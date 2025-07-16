import React from "react";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Highlights from "@/sections/Highlights";

/**
 * Página inicial do site.
 */
const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Highlights />
    </>
  );
};

export default Home;
