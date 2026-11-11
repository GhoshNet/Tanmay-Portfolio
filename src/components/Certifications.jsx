import { FaCertificate } from "react-icons/fa6";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certifications, achievements } from "../constants";
import { SectionHead } from "./ui";

const CertCard = ({ title, issuer }) => (
  <li data-l className={`${styles.card} flex items-start gap-4 p-5`}>
    <FaCertificate className="mt-0.5 shrink-0 text-[20px] text-amber" aria-hidden="true" />
    <div>
      <h4 className={`${styles.h3} text-[22px] leading-[1.05]`}>{title}</h4>
      <p className={`${styles.label} mt-2`}>{issuer}</p>
    </div>
  </li>
);

const AchievementRow = ({ title, year, description, link }) => (
  <li
    data-l
    className="grid grid-cols-[64px_minmax(0,1fr)] gap-x-6 gap-y-1 border-b border-line py-5 md:grid-cols-[110px_minmax(0,1fr)]"
  >
    <span className="font-display text-[clamp(24px,3vw,32px)] font-black leading-none text-amber [font-variant-numeric:tabular-nums]">
      {year}
    </span>
    <div>
      <h4 className={`${styles.h3} text-[clamp(22px,2.6vw,26px)] leading-[1.05]`}>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-amber">
            {title} <span aria-hidden="true" className="font-sans text-[0.7em] text-amber">↗</span>
          </a>
        ) : (
          title
        )}
      </h4>
      <p className="mt-2 max-w-[70ch] text-[15px] leading-[1.65] text-mute">{description}</p>
    </div>
  </li>
);

const Certifications = () => {
  return (
    <>
      <SectionHead n="06" label="Credentials & Recognition" title="Certifications & Achievements" />

      <h3 data-l="text" className={`${styles.label} mb-4 w-fit`}>Certifications</h3>
      <ul className="grid gap-3 md:grid-cols-3">
        {certifications.map((cert) => (
          <CertCard key={cert.title} {...cert} />
        ))}
      </ul>

      <h3 data-l="text" className={`${styles.label} mb-4 mt-14 w-fit`}>Achievements & Awards</h3>
      <ul className="border-t border-line">
        {achievements.map((item) => (
          <AchievementRow key={item.title} {...item} />
        ))}
      </ul>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
