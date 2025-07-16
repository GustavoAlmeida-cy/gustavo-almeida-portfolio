import React from "react";
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Footer from "@/sections/Footer";
import About from "@/sections/About";

/**
 * Página inicial do site.
 */
const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </>
  );
};

export default Home;
