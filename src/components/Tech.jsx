import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { SectionHead } from "./ui";

const Tech = () => {
  return (
    <>
      <SectionHead n="03" label="What I work with" title="Technologies" />

      <ul className="grid grid-cols-2 gap-2 xs:grid-cols-[repeat(auto-fill,minmax(168px,1fr))]">
        {technologies.map((technology) => (
          <li
            data-l
            key={technology.name}
            className="flex items-center gap-3 border border-line bg-panel p-2.5 transition-colors hover:border-amber"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-bone p-1.5">
              <img
                src={technology.icon}
                alt=""
                loading="lazy"
                className="max-h-full max-w-full object-contain"
              />
            </span>
            <span className="font-mono text-[12px] tracking-[0.04em] text-bone">
              {technology.name}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
