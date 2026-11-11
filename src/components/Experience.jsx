import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { SectionHead, TimelineRow } from "./ui";

const Experience = () => {
  return (
    <>
      <SectionHead n="02" label="My journey so far" title="Experiences" />

      <div className="border-t border-line">
        {experiences.map((experience) => (
          <TimelineRow key={experience.title} {...experience} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
