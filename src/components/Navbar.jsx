import { useState } from "react";

import { styles } from "../styles";
import { navLinks, RESUME_URL } from "../constants";
import { trackResumeDownload, trackSocialClick } from "../utils/analytics";

const LINKEDIN = "https://www.linkedin.com/in/tanmay-g/";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-line bg-ink/85 backdrop-blur-md">
      <div className={`${styles.wrap} flex h-14 items-center justify-between gap-4`}>
        <a
          data-l="text"
          href="#top"
          aria-label="Tanmay Ghosh, back to top"
          className="font-display text-[26px] font-black leading-none tracking-[0.02em]"
        >
          TG<span className="text-amber">.</span>
        </a>

        <nav aria-label="Sections" className="hidden items-center gap-[clamp(14px,1.8vw,26px)] lg:flex">
          {navLinks.map((nav) => (
            <a
              data-l="text"
              key={nav.id}
              href={`#${nav.id}`}
              className="font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-mute transition-colors hover:text-bone"
            >
              {nav.title}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            data-l
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackSocialClick("LinkedIn")}
            className="hidden border border-line px-3 py-2 font-mono text-[11px] font-medium uppercase leading-none tracking-[0.08em] text-bone transition-colors hover:border-amber hover:text-amber sm:block"
          >
            LinkedIn
          </a>
          <a
            data-l
            href={RESUME_URL}
            download="Tanmay_Ghosh_Resume.pdf"
            onClick={trackResumeDownload}
            className="border border-amber bg-amber px-3 py-2 font-mono text-[11px] font-medium uppercase leading-none tracking-[0.08em] text-ink"
          >
            Resume
          </a>
          <button
            data-l
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
            className="flex h-[34px] w-[34px] flex-col items-center justify-center gap-[5px] border border-line lg:hidden"
          >
            <span className={`h-px w-4 bg-bone transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`h-px w-4 bg-bone transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Sections"
          className="border-t border-line bg-ink lg:hidden"
        >
          <div className={`${styles.wrap} flex flex-col py-2`}>
            {navLinks.map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 font-mono text-[13px] uppercase tracking-[0.08em] text-bone last:border-b-0"
              >
                {nav.title}
              </a>
            ))}
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackSocialClick("LinkedIn");
                setOpen(false);
              }}
              className="py-4 font-mono text-[13px] uppercase tracking-[0.08em] text-amber sm:hidden"
            >
              LinkedIn ↗
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
