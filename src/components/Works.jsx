import { FaLock } from "react-icons/fa6";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { trackProjectClick } from "../utils/analytics";
import { SectionHead } from "./ui";

const GITHUB_PROFILE = "https://github.com/GhoshNet";

const ProjectCard = ({ index, name, description, tags, image, imageAlt, source_code_link, isEnterprise }) => {
  // Enterprise work has no public repo, so its link goes to the GitHub profile.
  const hasRepo = source_code_link.replace(/\/$/, "") !== GITHUB_PROFILE;

  return (
    <article
      data-l
      className={`${styles.card} group flex flex-col transition-[border-color,transform] duration-200 hover:-translate-y-1 hover:border-amber`}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-ink">
        <img
          src={image}
          alt={imageAlt || `${name} project screenshot`}
          loading="lazy"
          className="h-full w-full object-cover object-left opacity-90 transition-[opacity,transform] duration-300 group-hover:scale-[1.03] group-hover:opacity-100"
        />
        {isEnterprise && (
          <span
            className="absolute right-3 top-3 flex items-center gap-1.5 bg-ink/85 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-bone backdrop-blur-sm"
            title="Enterprise / Private Project"
          >
            <FaLock className="text-[9px] text-amber" aria-hidden="true" />
            Enterprise
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3.5 p-5">
        <div className={`flex justify-between ${styles.label}`}>
          <span className="text-amber">{String(index + 1).padStart(2, "0")}</span>
          <span>{isEnterprise ? "Enterprise / Private" : "Personal / Academic"}</span>
        </div>
        <h3 data-l="text" className={`${styles.h3} w-fit text-[28px] [text-wrap:balance]`}>{name}</h3>
        <p className="flex-1 text-[14.5px] leading-[1.65] text-mute">{description}</p>
        <ul className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <li key={`${name}-${tag.name}`} className={styles.chip}>
              {tag.name}
            </li>
          ))}
        </ul>
        <a
          href={source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackProjectClick(name)}
          aria-label={hasRepo ? `View ${name} source code on GitHub` : `${name}: view GitHub profile`}
          className={styles.link}
        >
          {hasRepo ? "Source code" : "GitHub profile"} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
};

const Works = () => {
  return (
    <>
      <SectionHead n="04" label="My work" title="Projects">
        <p data-l="text" className={`${styles.lede} mt-6`}>
          The following projects showcase real-world AI/ML systems I've built — from computer vision pipelines to LLM-powered platforms. Enterprise projects are marked accordingly, while personal and academic projects include direct links to source code.
        </p>
      </SectionHead>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
