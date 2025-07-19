import React from "react";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Highlights from "@/sections/Highlights";
import RoboticHandModel from "@/components/models/hero/RoboticModel";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Technologies from "@/sections/Technologies";

/** Página inicial do site com seções principais e modelo 3D decorativo */
const Home: React.FC = () => {
  return (
    <>
      {/* Modelo 3D exibido apenas em telas maiores */}
      <figure className="absolute z-20 h-[109vh] w-full top-0 right-0 hidden sm:block">
        <RoboticHandModel />
      </figure>

      {/* Seções principais da home */}
      <Hero />
      <About />
      <Technologies />
      <Highlights />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
