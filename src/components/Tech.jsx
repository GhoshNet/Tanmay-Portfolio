import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  useEffect(() => {
    gsap.fromTo(
      ".tech-icon",  
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        stagger: 0.1, 
        scrollTrigger: {
          trigger: ".tech-icons-wrapper", 
          start: "top 80%", 
          end: "bottom 70%", 
          scrub: true, 
        },
      }
    );
  }, []);

  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className="tech-icons-wrapper mt-10 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div
            className="w-28 h-28 group relative"
            key={technology.name}
            title={technology.name}
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="tech-icon w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-secondary text-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {technology.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
