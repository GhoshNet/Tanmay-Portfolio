import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaArrowUpRightFromSquare } from "react-icons/fa6";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { publications } from "../constants";

const PublicationCard = ({ index, title, subtitle, journal, year, role, description, link }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.75)}
    className="bg-tertiary p-6 rounded-2xl w-full shadow-card"
  >
    <div className="flex items-start gap-4">
      <div className="text-[#915EFF] text-3xl mt-1 shrink-0">
        <FaBookOpen />
      </div>
      <div className="flex-1">
        <h3 className="text-white font-bold text-[20px] leading-snug">{title}</h3>
        {subtitle && (
          <p className="text-[#915EFF] text-[14px] mt-1 font-medium italic">{subtitle}</p>
        )}
        <div className="flex items-center gap-3 mt-2 flex-wrap">
          <span className="text-secondary text-[13px]">{journal}</span>
          <span className="text-secondary text-[12px] bg-black-100 px-2 py-[2px] rounded-full">{year}</span>
          <span className="text-secondary text-[12px] bg-black-100 px-2 py-[2px] rounded-full">{role}</span>
        </div>
        <p className="text-secondary text-[14px] mt-3 leading-[22px]">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-[#915EFF] hover:text-white transition-colors duration-300 text-[14px] font-medium"
          >
            Read Paper <FaArrowUpRightFromSquare className="text-[12px]" />
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Publications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Research & Writing</p>
        <h2 className={styles.sectionHeadText}>Publications.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Peer-reviewed research contributions in AI and machine learning.
      </motion.p>

      <div className="mt-10 flex flex-col gap-6">
        {publications.map((pub, index) => (
          <PublicationCard key={pub.title} index={index} {...pub} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Publications, "publications");
