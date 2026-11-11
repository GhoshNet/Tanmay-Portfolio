/* ─────────────────────────────────────────────────────────────────────────────
   Agent-build reveal.

   Every element with a `data-l` attribute is a "layer". A team of cursors takes
   the layers in page order: fly to the top-left corner, drag out a selection
   box with a size readout and guide lines, then reveal the real element. A
   camera follows the build down the page and returns to the top.

   - `data-l="text"` wipes in like it is being typed; anything else fades up
     from a placeholder block.
   - A layer nested inside another layer waits for its parent.
   - Wheel, touch, a key press or Skip ends the build at once.

   This file has no React in it. `AgentBuild.jsx` decides when to run it.
   ───────────────────────────────────────────────────────────────────────────── */

const COLORS = ["#ffa62b", "#4cc2ff", "#ff6b6b", "#b79bff", "#5fe0b0", "#f5d76e", "#ff8fd0", "#9be36a", "#7aa2ff", "#ffd0a1"];

// Tuning. Durations are in milliseconds at 1× speed.
// The build has two paces. It opens slowly, so a visitor can see what the agents
// are doing, then speeds up once the page is past the `slowUntil` section.
const T = {
  slowUntil: "#about", // last section built at the slow pace
  slow: {
    agents: [6, 4], // desktop, mobile
    move: [160, 420], // cursor travel to a layer: min, max
    moveK: 0.5, // ms per pixel travelled
    drag: [200, 560], // drawing the selection box: min, max
    dragBase: 160,
    dragK: 0.3, // ms per pixel of box diagonal
    hold: 200, // pause on the finished box before moving on
    camera: 0.06, // how hard the camera chases the build (0–1 per frame)
  },
  fast: {
    agents: [10, 7],
    move: [90, 220],
    moveK: 0.4,
    drag: [120, 270],
    dragBase: 110,
    dragK: 0.22,
    hold: 80,
    camera: 0.14,
  },
  watchdog: 60000, // never leave the page half-built
};

const SESSION_KEY = "tg-build-seen";
const root = document.documentElement;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

let current = null; // the run in progress, if any

export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** True on the first page load of a browser session, unless motion is reduced. */
export function shouldAutoBuild() {
  if (prefersReducedMotion()) return false;
  try {
    return !sessionStorage.getItem(SESSION_KEY);
  } catch {
    return true;
  }
}

function markSeen() {
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    /* private mode: the build simply plays again next load */
  }
}

/** Show every layer and drop the build classes. Safe to call at any time. */
export function showAll() {
  document.querySelectorAll("[data-l]").forEach((el) => el.classList.add("on"));
  root.classList.remove("pre", "building");
}

function teardown(s) {
  if (!s || s.dead) return;
  s.dead = true;
  showAll();
  window.removeEventListener("wheel", s.stop);
  window.removeEventListener("touchmove", s.stop);
  window.removeEventListener("keydown", s.stop);
  clearTimeout(s.watchdog);
  s.fix.style.opacity = 0;
  s.doc.remove();
  setTimeout(() => s.fix.remove(), 500);
  if (current === s) current = null;
}

export function stopBuild() {
  teardown(current);
}

export function startBuild() {
  stopBuild();
  markSeen();

  const els = [...document.querySelectorAll("[data-l]")];
  if (!els.length) {
    showAll();
    return;
  }
  els.forEach((el) => el.classList.remove("on"));
  root.classList.add("building");
  root.classList.remove("pre");
  window.scrollTo(0, 0);

  const s = (current = { speed: 1, dead: false, done: 0, camY: 0, next: 0 });
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms / s.speed));
  const small = window.innerWidth < 700 ? 1 : 0;
  const nSlow = T.slow.agents[small]; // agents working during the slow opening
  const nAgents = Math.max(nSlow, T.fast.agents[small]); // the rest join afterwards

  // One overlay scrolls with the page (boxes, guides, cursors)…
  s.doc = document.createElement("div");
  s.doc.id = "rig-doc";
  s.doc.style.height = root.scrollHeight + "px";
  // …and one is fixed to the viewport (rulers, status pill).
  s.fix = document.createElement("div");
  s.fix.id = "rig-fix";
  s.fix.innerHTML =
    '<div class="ruler t"></div><div class="ruler l"></div>' +
    '<div class="hud" role="status"><span class="dots">' +
    COLORS.slice(0, nAgents)
      .map((c, k) => `<i style="background:${c}${k < nSlow ? "" : ";display:none"}"></i>`)
      .join("") +
    `</span><span><b class="ag">${nSlow}</b> agents</span><span><b class="n">0</b> / ${els.length} layers</span>` +
    '<span class="bar"><span></span></span><span class="st">Building</span>' +
    '<button type="button" class="spd" aria-label="Toggle build speed">1×</button>' +
    '<button type="button" class="skip">Skip</button></div>';
  document.body.append(s.doc, s.fix);

  const hudN = s.fix.querySelector(".n");
  const hudBar = s.fix.querySelector(".bar span");
  const hudSt = s.fix.querySelector(".st");
  const hudAgents = s.fix.querySelector(".ag");
  const hudDots = s.fix.querySelectorAll(".dots i");
  s.fix.querySelector(".skip").onclick = () => teardown(s);
  s.fix.querySelector(".spd").onclick = (e) => {
    s.speed = s.speed === 1 ? 2.5 : 1;
    e.currentTarget.textContent = s.speed === 1 ? "1×" : "2×";
  };

  s.stop = (e) => {
    if (e.type === "keydown" && e.target.closest && e.target.closest(".hud")) return;
    teardown(s);
  };
  window.addEventListener("wheel", s.stop, { passive: true });
  window.addEventListener("touchmove", s.stop, { passive: true });
  window.addEventListener("keydown", s.stop);
  s.watchdog = setTimeout(() => teardown(s), T.watchdog);

  // One task per layer, in page order.
  const byEl = new Map();
  const docTop = (el) => el.getBoundingClientRect().top + window.scrollY;
  const tasks = els.map((el, i) => {
    const t = { el, i, top: docTop(el), fin: false };
    t.done = new Promise((res) => {
      t.finish = () => {
        t.fin = true;
        res();
      };
    });
    byEl.set(el, t);
    return t;
  });
  tasks.forEach((t) => {
    const p = t.el.parentElement && t.el.parentElement.closest("[data-l]");
    t.parent = p ? byEl.get(p) : null;
  });
  tasks.sort((a, b) => a.top - b.top || a.i - b.i);

  // Everything down to the end of the `slowUntil` section is built at the slow pace.
  const slowEl = document.querySelector(T.slowUntil);
  const slowEnd = slowEl ? slowEl.getBoundingClientRect().bottom + window.scrollY : 0;
  let slowCount = 0;
  while (slowCount < tasks.length && tasks[slowCount].top < slowEnd) slowCount++;
  const pace = (index) => (index < slowCount ? T.slow : T.fast);

  // Camera: follow the build down the page.
  let front = 0;
  let frame = 0;
  (function cam() {
    if (s.dead || s.returning) return;
    while (front < tasks.length && tasks[front].fin) front++;
    if (front < tasks.length) {
      if (frame++ % 20 === 0) s.doc.style.height = root.scrollHeight + "px";
      const max = Math.max(0, root.scrollHeight - window.innerHeight);
      // Look ahead to the next unclaimed layer so agents are never waiting on the
      // camera, but keep the oldest unfinished layer on screen.
      const vh = window.innerHeight;
      const ahead = tasks[Math.min(s.next, tasks.length - 1)].el;
      const target = clamp(Math.min(docTop(tasks[front].el) - vh * 0.1, docTop(ahead) - vh * 0.45), 0, max);
      s.camY += (target - s.camY) * Math.min(1, pace(front).camera * s.speed);
      window.scrollTo(0, s.camY);
    }
    requestAnimationFrame(cam);
  })();

  const cursorSVG = (c) =>
    `<svg viewBox="0 0 18 18"><path d="M2 1.5 15.5 8 9.6 10 7.4 16z" fill="${c}" stroke="#fff" stroke-width="1.2" stroke-linejoin="round"/></svg>`;

  async function agent(k) {
    // Extra agents sit out the slow opening and join when the pace picks up.
    if (k >= nSlow) {
      while (!s.dead && s.next < slowCount) await new Promise((r) => setTimeout(r, 60));
      if (s.dead || s.next >= tasks.length) return;
      hudDots[k].style.display = "";
      hudAgents.textContent = Math.max(Number(hudAgents.textContent), k + 1);
    }
    const cur = document.createElement("div");
    cur.className = "cur";
    cur.innerHTML = cursorSVG(COLORS[k % COLORS.length]);
    let x = k % 2 ? window.innerWidth + 30 : -30;
    let y = window.scrollY + window.innerHeight * (0.1 + 0.08 * k);
    cur.style.transform = `translate(${x}px,${y}px)`;
    s.doc.append(cur);

    const move = async (nx, ny, ms) => {
      cur.style.transitionDuration = ms / s.speed + "ms";
      cur.style.transform = `translate(${nx}px,${ny}px)`;
      x = nx;
      y = ny;
      await sleep(ms);
    };
    await sleep(k < nSlow ? 60 * k : 30 * (k - nSlow));

    while (!s.dead && s.next < tasks.length) {
      const P = pace(s.next);
      const t = tasks[s.next++];
      if (t.parent) await t.parent.done;
      // Don't build far below the fold: give the camera a moment to arrive.
      for (let w = 0; !s.dead && w < 40; w++) {
        if (t.el.getBoundingClientRect().top < window.innerHeight * 0.95) break;
        await new Promise((r) => setTimeout(r, 40));
      }
      if (s.dead) return;

      const r0 = t.el.getBoundingClientRect();
      const r = { x: r0.left + window.scrollX, y: r0.top + window.scrollY, w: r0.width, h: r0.height };
      if (r.w < 2 || r.h < 2) {
        // Hidden at this screen size (e.g. desktop-only nav links).
        t.el.classList.add("on");
        s.done++;
        t.finish();
        continue;
      }
      const isText = t.el.dataset.l === "text";

      await move(r.x, r.y, clamp(Math.hypot(r.x - x, r.y - y) * P.moveK, ...P.move));
      if (s.dead) return;

      const sel = document.createElement("div");
      sel.className = "sel" + (isText ? "" : " box");
      sel.innerHTML = `<i></i><i></i><i></i><i></i><b>${Math.round(r.w)} × ${Math.round(r.h)}</b>`;
      sel.style.left = r.x + "px";
      sel.style.top = r.y + "px";
      const gh = document.createElement("div");
      gh.className = "guide h";
      gh.style.top = r.y + "px";
      const gv = document.createElement("div");
      gv.className = "guide v";
      gv.style.left = r.x + "px";
      gv.style.top = r.y - 240 + "px";
      gv.style.height = r.h + 480 + "px";
      s.doc.append(gh, gv, sel);

      const drag = clamp(P.dragBase + Math.hypot(r.w, r.h) * P.dragK, ...P.drag);
      sel.style.transitionDuration = drag / s.speed + "ms";
      sel.getBoundingClientRect(); // commit the zero-size state before growing
      sel.style.width = r.w + "px";
      sel.style.height = r.h + "px";
      gh.style.opacity = 0;
      gv.style.opacity = 0;
      await move(r.x + r.w, r.y + r.h, drag);
      if (s.dead) return;

      t.el.classList.add("on");
      if (t.el.animate) {
        const d = 240 / s.speed;
        if (isText) {
          t.el.animate(
            [{ clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0 0 0)" }],
            { duration: d * 1.4, easing: "steps(14, end)" }
          );
        } else {
          t.el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: d, easing: "ease-out" });
        }
      }
      s.done++;
      hudN.textContent = s.done;
      hudBar.style.width = (100 * s.done) / tasks.length + "%";
      t.finish();

      await sleep(P.hold);
      sel.style.transitionDuration = "300ms";
      sel.style.opacity = 0;
      setTimeout(() => {
        sel.remove();
        gh.remove();
        gv.remove();
      }, 950);
    }

    // Out of work: drift off screen.
    cur.style.transitionDuration = "700ms";
    cur.style.opacity = 0;
    cur.style.transform = `translate(${x + (k % 2 ? 140 : -140)}px,${y - 90}px)`;
  }

  Promise.all(Array.from({ length: nAgents }, (_, k) => agent(k))).then(async () => {
    if (s.dead) return;
    hudN.textContent = tasks.length;
    hudBar.style.width = "100%";
    hudSt.textContent = "Done";
    await new Promise((r) => setTimeout(r, 450));
    if (s.dead) return;
    s.returning = true;
    window.scrollTo({ top: 0, behavior: "smooth" });
    await new Promise((r) => setTimeout(r, 900));
    teardown(s);
  });
}
