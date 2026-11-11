import {
  FaVideo,
  FaCamera,
  FaPenNib,
  FaHandFist,
  FaPersonHiking,
  FaDumbbell,
  FaDiagramProject,
} from "react-icons/fa6";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { partTimeRoles } from "../constants";
import { SectionHead, TimelineRow } from "./ui";

const interests = [
  { name: "Content Creation", icon: <FaPenNib /> },
  { name: "Video Editing", icon: <FaVideo /> },
  { name: "Photography", icon: <FaCamera /> },
  { name: "Boxing", icon: <FaHandFist /> },
  { name: "Trekking & Hiking", icon: <FaPersonHiking /> },
  { name: "Gym & Fitness", icon: <FaDumbbell /> },
  { name: "System Design", icon: <FaDiagramProject /> },
];

const Strong = ({ children }) => <span className="font-medium text-bone">{children}</span>;

const Beyond = () => {
  return (
    <>
      <SectionHead n="07" label="Outside the IDE" title="Beyond the Code">
        <p data-l="text" className={`${styles.lede} mt-6`}>
          When I'm not building intelligent systems, I love telling stories through a lens. I'm an
          avid <Strong>content creator</Strong> and enjoy <Strong>video editing and photography</Strong>, alongside
          staying active and curious through boxing, the outdoors, and a steady fascination with
          system design.
        </p>
      </SectionHead>

      <ul className="flex flex-wrap gap-2">
        {interests.map((interest) => (
          <li
            data-l
            key={interest.name}
            className={`${styles.card} flex items-center gap-3 px-4 py-3 transition-colors hover:border-amber`}
          >
            <span className="text-[16px] text-amber" aria-hidden="true">{interest.icon}</span>
            <span className="font-mono text-[12px] uppercase tracking-[0.06em] text-bone">{interest.name}</span>
          </li>
        ))}
      </ul>

      {partTimeRoles.length > 0 && (
        <div className="mt-14">
          <h3 data-l="text" className={`${styles.label} mb-4 w-fit`}>Part-Time Work</h3>
          <div className="border-t border-line">
            {partTimeRoles.map((role) => (
              <TimelineRow key={role.title} {...role} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Beyond, "beyond");
