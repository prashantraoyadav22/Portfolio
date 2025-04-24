import React from "react";
import Overview from "../components/sections/Overview";
import Experience from "../components/sections/Experience";
import Project from "../components/sections/Project";
// import Certificates from "../components/sections/Other";
import TechStack from "../components/sections/TechStack";
import SectionNav from "../components/sections/SectionNav";

const Home = () => {
  return (
    <>
      <SectionNav />
      <section
        id="overview"
        className="bg-black text-white min-h-screen flex flex-col items-center justify-end-safe "
      >
        <Overview />
      </section>
      <section
        id="techstack"
        className="bg-black text-white min-h-screen flex flex-col items-center justify-end-safe "
      >
        <TechStack />
      </section>
      <section
        id="experience"
        className="bg-black text-white min-h-screen flex flex-col items-center justify-end-safe "
      >
        <Experience />
      </section>
      <section
        id="project"
        className="bg-black text-white min-h-screen flex flex-col items-center justify-end-safe "
      >
        <Project />
      </section>
      <section
        id="other"
        className="bg-black text-white min-h-screen flex flex-col items-center justify-end-safe "
      >
        {/* <Other /> */}
      </section>
      
    </>
  );
};

export default Home;
