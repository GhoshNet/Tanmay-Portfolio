import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { publications } from "../constants";
import { SectionHead } from "./ui";

const PublicationCard = ({ title, subtitle, journal, year, role, description, link }) => (
  <article
    data-l
    className={`${styles.card} grid gap-x-10 gap-y-5 p-[clamp(20px,3vw,32px)] md:grid-cols-[minmax(0,1fr)_auto]`}
  >
    <div>
      <p className={styles.label}>{journal}</p>
      <h3 className={`${styles.h3} mt-3 text-[clamp(26px,3.4vw,38px)] [text-wrap:balance]`}>{title}</h3>
      {subtitle && <p className="mt-3 text-[15px] italic text-amber">{subtitle}</p>}
      <p className="mt-4 max-w-[70ch] text-[15px] leading-[1.7] text-mute">{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className={`${styles.link} mt-5 inline-block`}>
          Read Paper <span aria-hidden="true">↗</span>
        </a>
      )}
    </div>
    <div className="flex flex-wrap content-start gap-1.5 md:flex-col md:items-end">
      <span className="font-display text-[44px] font-black leading-[0.9] text-amber">{year}</span>
      <span className={styles.chip}>{role}</span>
    </div>
  </article>
);

const Publications = () => {
  return (
    <>
      <SectionHead n="05" label="Research & Writing" title="Publications">
        <p data-l="text" className={`${styles.lede} mt-6`}>
          Peer-reviewed research contributions in AI and machine learning.
        </p>
      </SectionHead>

      <div className="flex flex-col gap-4">
        {publications.map((pub) => (
          <PublicationCard key={pub.title} {...pub} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Publications, "publications");
