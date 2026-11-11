import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { styles } from "../styles";
import { trackSocialClick } from "../utils/analytics";
import { replayBuild } from "../agentBuild/AgentBuild";

const Footer = () => {
  return (
    <footer className="pb-24 pt-7">
      <div className={`${styles.wrap} flex flex-wrap items-center justify-between gap-x-6 gap-y-4`}>
        <div className="flex items-center gap-5">
          <a
            data-l
            href="https://github.com/GhoshNet"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackSocialClick("GitHub")}
            className="text-bone transition-colors hover:text-amber"
            aria-label="GitHub Profile"
          >
            <FaGithub size={22} />
          </a>
          <a
            data-l
            href="https://www.linkedin.com/in/tanmay-g/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackSocialClick("LinkedIn")}
            className="text-bone transition-colors hover:text-amber"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={22} />
          </a>
          <button
            data-l
            type="button"
            onClick={replayBuild}
            className="border border-line px-3 py-2 font-mono text-[11px] uppercase tracking-[0.08em] text-bone transition-colors hover:border-amber hover:text-amber motion-reduce:hidden"
          >
            Replay the build
          </button>
        </div>

        <p data-l="text" className={`${styles.label} font-normal`}>
          © {new Date().getFullYear()} Tanmay Ghosh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
