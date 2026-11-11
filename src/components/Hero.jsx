import { styles } from "../styles";
import { portrait } from "../assets";
import { heroStats, RESUME_URL } from "../constants";
import { trackResumeDownload } from "../utils/analytics";

const Hero = () => {
  return (
    <div className="relative overflow-hidden border-b border-line pb-[clamp(48px,7vw,90px)] pt-[calc(56px+clamp(48px,9vw,110px))]">
      {/* Oversized outline word behind the headline */}
      <div
        data-l="text"
        aria-hidden="true"
        className="pointer-events-none absolute right-[-2vw] top-1/2 -translate-y-[46%] select-none whitespace-nowrap font-display text-[clamp(150px,36vw,480px)] font-black leading-[0.8] tracking-[-0.02em] text-transparent [-webkit-text-stroke:1px_#24353c]"
      >
        AI/ML
      </div>

      {/* Portrait: stands on the section's bottom edge, between the headline and the stats */}
      <img
        data-l
        src={portrait}
        alt="Tanmay Ghosh"
        className="pointer-events-none absolute bottom-0 left-1/2 hidden h-[min(86%,540px)] w-auto max-w-none -translate-x-[70px] select-none [mask-image:linear-gradient(to_bottom,#000_80%,transparent)] xl:block"
      />

      <div className={`${styles.wrap} relative grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_auto]`}>
        <div>
          <p data-l="text" className={styles.eyebrow}>
            AI/ML Engineer · Dublin, Ireland
          </p>
          <p data-l="text" className="mt-6 w-fit text-[clamp(18px,2.4vw,26px)] italic leading-tight text-mute">
            Hi, I'm
          </p>
          <h1 className="mt-1.5 font-display text-[clamp(64px,13.5vw,176px)] font-black uppercase leading-[0.86] tracking-[-0.01em]">
            <span data-l="text" className="block w-fit">Tanmay</span>
            <span data-l="text" className="block w-fit text-amber">Ghosh.</span>
          </h1>
          <p data-l="text" className="mt-7 max-w-[56ch] text-[clamp(16px,1.5vw,18px)] leading-[1.65] text-bone">
            AI/ML Engineer with an MSc in Computer Science from Trinity College Dublin,
            specialising in intelligent systems, computer vision, and scalable AI solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              data-l
              href={RESUME_URL}
              download="Tanmay_Ghosh_Resume.pdf"
              onClick={trackResumeDownload}
              className={`${styles.btn} ${styles.btnSolid}`}
            >
              Download Resume <span aria-hidden="true">↓</span>
            </a>
            <a data-l href="#projects" className={`${styles.btn} ${styles.btnGhost}`}>
              View Projects
            </a>
          </div>

          {/* On small screens the portrait sits in the flow, under the buttons */}
          <img
            data-l
            src={portrait}
            alt="Tanmay Ghosh"
            className="mx-auto mt-10 block max-h-[400px] w-auto select-none [mask-image:linear-gradient(to_bottom,#000_78%,transparent)] xl:hidden"
          />
        </div>

        <dl className="grid grid-cols-2 gap-x-7 gap-y-6 pb-1.5 xs:grid-cols-3 lg:grid-cols-1">
          {heroStats.map((stat) => (
            <div data-l key={stat.value} className="grid gap-1.5 lg:grid-cols-[auto_1fr] lg:items-baseline lg:gap-3.5">
              <dt className="order-2 max-w-[17ch] font-mono text-[11px] uppercase leading-[1.45] tracking-[0.08em] text-mute">
                {stat.label}
              </dt>
              <dd className="order-1 font-display text-[clamp(40px,5vw,60px)] font-black leading-[0.9] text-amber [font-variant-numeric:tabular-nums]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Hero;
