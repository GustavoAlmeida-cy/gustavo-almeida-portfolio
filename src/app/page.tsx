import React from "react";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Highlights from "@/sections/Highlights";
import RoboticHandModel from "@/components/models/hero/RoboticModel";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";

/**
 * Página inicial do site.
 */
const Home: React.FC = () => {
  return (
    <>
      <figure className="absolute z-20 h-[109vh] w-full top-0 right-0 hidden sm:block">
        <RoboticHandModel />
      </figure>
      <Hero />
      <About />
      <Highlights />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
