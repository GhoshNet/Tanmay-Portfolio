import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { SectionHead } from "./ui";

const Strong = ({ children }) => <span className="font-medium text-bone">{children}</span>;

const About = () => {
  return (
    <>
      <SectionHead n="01" label="Introduction" title="Overview" />

      <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <div className="max-w-[66ch] space-y-5 text-[17px] leading-[1.75] text-mute">
          <p data-l="text">
            I recently completed an MSc in Computer Science (<Strong>Intelligent Systems</Strong>) at <Strong>Trinity College Dublin</Strong> with First Class Honours, with a focus on AI, Data Science, Knowledge Graphs, and Advanced Software Engineering.
          </p>
          <p data-l="text">
            With 1.5+ years of production experience, I've built end-to-end AI/ML solutions that deliver measurable impact—from computer vision systems reducing workplace hazards by 60% to RAG-based platforms cutting response times by 40%.
          </p>
          <p data-l="text">
            My expertise spans <Strong>YOLO-based vision models, LLMs, FastAPI backends, and React frontends</Strong>. I specialize in transforming complex AI research into scalable, real-world applications that solve business problems and optimize operations.
          </p>
          <p data-l="text">
            Let's collaborate to build intelligent systems that make a difference.
          </p>
        </div>

        <ol className="self-start border-t border-line">
          {services.map((service, index) => (
            <li
              data-l
              key={service.title}
              className="flex items-baseline gap-5 border-b border-line py-5"
            >
              <span className="font-mono text-[12px] font-medium text-amber">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-[clamp(24px,2.6vw,30px)] font-bold uppercase leading-none tracking-[0.01em]">
                {service.title}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
