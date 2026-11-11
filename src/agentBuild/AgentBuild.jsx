import { useEffect } from "react";

import "./agentBuild.css";
import { prefersReducedMotion, shouldAutoBuild, showAll, startBuild, stopBuild } from "./engine";

export const REPLAY_EVENT = "agentbuild:replay";

/** Ask the mounted <AgentBuild /> to run the build again (used by the footer button). */
export const replayBuild = () => window.dispatchEvent(new Event(REPLAY_EVENT));

/**
 * Plays the agent-build reveal once per browser session, after fonts have
 * loaded so the selection boxes match the final layout. Renders nothing.
 */
const AgentBuild = () => {
  useEffect(() => {
    let cancelled = false;

    if (shouldAutoBuild()) {
      const fonts = document.fonts?.ready ?? Promise.resolve();
      const timeout = new Promise((r) => setTimeout(r, 1500));
      Promise.race([fonts, timeout])
        .then(() => !cancelled && startBuild())
        .catch(showAll);
    } else {
      showAll();
    }

    const onReplay = () => {
      if (!prefersReducedMotion()) startBuild();
    };
    window.addEventListener(REPLAY_EVENT, onReplay);

    return () => {
      cancelled = true;
      window.removeEventListener(REPLAY_EVENT, onReplay);
      stopBuild();
    };
  }, []);

  return null;
};

export default AgentBuild;
