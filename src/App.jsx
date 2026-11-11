import {
  About,
  Beyond,
  Certifications,
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  Publications,
  Tech,
  Works,
} from "./components";
import AgentBuild from "./agentBuild/AgentBuild";

const App = () => {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Works />
        <Publications />
        <Certifications />
        <Beyond />
        <Contact />
      </main>
      <Footer />
      <AgentBuild />
    </>
  );
};

export default App;
