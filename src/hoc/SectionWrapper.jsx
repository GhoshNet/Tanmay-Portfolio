import { useEffect, useRef } from "react";

import { styles } from "../styles";

/**
 * Wraps a section component in the shared page frame: an anchor id for the
 * nav, a bottom rule, the centred column, and a one-time fade-up on scroll.
 */
const SectionWrapper = (Component, idName) =>
  function HOC() {
    const ref = useRef(null);

    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      if (!("IntersectionObserver" in window)) {
        el.classList.add("in");
        return;
      }
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("in");
            io.disconnect();
          }
        },
        { threshold: 0.08 }
      );
      io.observe(el);
      return () => io.disconnect();
    }, []);

    return (
      <section
        id={idName || undefined}
        className="scroll-mt-14 border-b border-line py-[clamp(56px,8vw,104px)]"
      >
        <div ref={ref} className={`reveal ${styles.wrap}`}>
          <Component />
        </div>
      </section>
    );
  };

export default SectionWrapper;
