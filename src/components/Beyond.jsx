import React from "react";
import { motion } from "framer-motion";
import {
  FaVideo,
  FaCamera,
  FaPenNib,
  FaHandFist,
  FaPersonHiking,
  FaDumbbell,
  FaDiagramProject,
  FaBriefcase,
} from "react-icons/fa6";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { partTimeRoles } from "../constants";

const interests = [
  { name: "Content Creation", icon: <FaPenNib /> },
  { name: "Video Editing", icon: <FaVideo /> },
  { name: "Photography", icon: <FaCamera /> },
  { name: "Boxing", icon: <FaHandFist /> },
  { name: "Trekking & Hiking", icon: <FaPersonHiking /> },
  { name: "Gym & Fitness", icon: <FaDumbbell /> },
  { name: "System Design", icon: <FaDiagramProject /> },
];

const InterestCard = ({ index, name, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.6)}
    className="bg-tertiary px-5 py-4 rounded-2xl flex items-center gap-3 shadow-card hover:scale-105 transition-transform duration-300"
  >
    <span className="text-[#915EFF] text-xl">{icon}</span>
    <span className="text-white font-medium text-[15px]">{name}</span>
  </motion.div>
);

const Beyond = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Outside the IDE</p>
        <h2 className={styles.sectionHeadText}>Beyond the Code.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        When I'm not building intelligent systems, I love telling stories through a lens. I'm an
        avid <span className="text-white font-semibold">content creator</span> and enjoy
        <span className="text-white font-semibold"> video editing and photography</span>, alongside
        staying active and curious through boxing, the outdoors, and a steady fascination with
        system design.
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-4">
        {interests.map((interest, index) => (
          <InterestCard key={interest.name} index={index} {...interest} />
        ))}
      </div>

      {/* Part-Time Work */}
      {partTimeRoles.length > 0 && (
        <motion.div
          variants={fadeIn("", "", 0.3, 1)}
          className="mt-16"
        >
          <h3 className="text-white font-semibold text-[22px] mb-6 flex items-center gap-3">
            <FaBriefcase className="text-[#915EFF]" />
            Part-Time Work
          </h3>
          <div className="flex flex-col gap-5">
            {partTimeRoles.map((role, index) => (
              <motion.div
                key={role.title}
                variants={fadeIn("up", "spring", index * 0.15, 0.6)}
                className="bg-tertiary p-5 rounded-2xl shadow-card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 overflow-hidden">
                    <img
                      src={role.icon}
                      alt={role.company_name}
                      className="w-[85%] h-[85%] object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-[17px] leading-snug">{role.title}</h4>
                    <p className="text-secondary text-[14px] mt-1">{role.company_name}</p>
                    <p className="text-secondary text-[12px] mt-0.5">{role.date}</p>
                    <ul className="mt-3 list-disc ml-4 space-y-1">
                      {role.points.map((point, i) => (
                        <li key={i} className="text-white-100 text-[13px] pl-1 tracking-wider leading-[20px]">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default SectionWrapper(Beyond, "beyond");
