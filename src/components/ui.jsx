import { styles } from "../styles";

/** Numbered eyebrow plus the big section title, with the accent full stop. */
export const SectionHead = ({ n, label, title, children }) => (
  <div className="mb-[clamp(28px,4vw,48px)]">
    <p data-l="text" className={styles.eyebrow}>
      {n} / {label}
    </p>
    <h2 data-l="text" className={styles.h2}>
      {title}
      <span className="text-amber">.</span>
    </h2>
    {children}
  </div>
);

/** One entry in a dated list: education, a job, or a part-time role. */
export const TimelineRow = ({ title, company_name, icon, date, points }) => (
  <article
    data-l
    className="grid gap-x-8 gap-y-4 border-b border-line py-8 md:grid-cols-[200px_minmax(0,1fr)]"
  >
    <div className="flex items-center gap-4 md:flex-col md:items-start">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-white p-1.5">
        <img src={icon} alt="" className="max-h-full max-w-full object-contain" />
      </div>
      <p className={styles.label}>{date}</p>
    </div>
    <div>
      <h3 data-l="text" className={`${styles.h3} w-fit text-[clamp(24px,3vw,32px)]`}>{title}</h3>
      <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.08em] text-amber">
        {company_name}
      </p>
      <ul className="mt-5 space-y-2.5">
        {points.map((point, i) => (
          <li
            key={i}
            className="relative pl-5 text-[15px] leading-[1.65] text-mute before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-amber"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  </article>
);
