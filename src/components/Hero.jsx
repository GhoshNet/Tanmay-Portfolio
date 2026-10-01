import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { trackResumeDownload } from "../utils/analytics";

const Hero = () => {

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-28 md:mt-5 lg:mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="mt-28 md:mt-5 lg:mt-5">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Tanmay Ghosh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            AI/ML Engineer & Computer Science Master's Student<br className='sm:block hidden' />
            at Trinity College Dublin, specializing in intelligent<br className='sm:block hidden' />
            systems, computer vision, and scalable AI solutions.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download="Tanmay_Ghosh_Resume.pdf"
              onClick={trackResumeDownload}
              className="bg-[#915EFF] hover:bg-[#7c4ddb] text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#915EFF]/25 hover:-translate-y-0.5"
            >
              Download Resume
            </a>
            <a
              href="#work"
              className="border-2 border-[#915EFF] text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:bg-[#915EFF]/10 hover:-translate-y-0.5"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about' aria-label="Scroll down to About section">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
