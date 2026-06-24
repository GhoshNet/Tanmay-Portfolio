import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaCertificate, FaArrowUpRightFromSquare } from "react-icons/fa6";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certifications, achievements } from "../constants";

const CertCard = ({ index, title, issuer }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.6)}
    className="bg-tertiary p-5 rounded-2xl w-full sm:w-[300px] flex items-start gap-4 shadow-card"
  >
    <div className="text-[#915EFF] text-2xl mt-1 shrink-0">
      <FaCertificate />
    </div>
    <div>
      <h3 className="text-white font-bold text-[17px] leading-snug">{title}</h3>
      <p className="text-secondary text-[13px] mt-1">{issuer}</p>
    </div>
  </motion.div>
);

const AchievementCard = ({ index, title, year, description, link }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.6)}
    className="bg-tertiary p-5 rounded-2xl w-full flex items-start gap-4 shadow-card"
  >
    <div className="text-[#915EFF] text-2xl mt-1 shrink-0">
      <FaAward />
    </div>
    <div>
      <div className="flex items-center gap-2 flex-wrap">
        <h3 className="text-white font-bold text-[17px] leading-snug">{title}</h3>
        <span className="text-secondary text-[12px] bg-black-100 px-2 py-[2px] rounded-full">
          {year}
        </span>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#915EFF] hover:text-white transition-colors text-[13px]"
            aria-label={`View ${title}`}
          >
            <FaArrowUpRightFromSquare />
          </a>
        )}
      </div>
      <p className="text-secondary text-[14px] mt-2 leading-[22px]">{description}</p>
    </div>
  </motion.div>
);

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Credentials & Recognition</p>
        <h2 className={styles.sectionHeadText}>Certifications & Achievements.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-10"
      >
        <h3 className="text-white font-semibold text-[22px] mb-6">Certifications</h3>
        <div className="flex flex-wrap gap-5">
          {certifications.map((cert, index) => (
            <CertCard key={cert.title} index={index} {...cert} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-14"
      >
        <h3 className="text-white font-semibold text-[22px] mb-6">Achievements & Awards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {achievements.map((item, index) => (
            <AchievementCard key={item.title} index={index} {...item} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
