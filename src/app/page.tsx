import React from "react";
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Footer from "@/sections/Footer";

/**
 * Página inicial do site.
 */
const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
