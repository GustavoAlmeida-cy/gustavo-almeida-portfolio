"use client";

import React from "react";
import RoboticHandModel from "../components/models/hero/RoboticModel";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex sm:flex-row flex-col justify-between items-start mt-12 px-6 w-[100%] h-[100vh] overflow-hidden"
    >
      <div className="flex flex-col flex-1/2 h-140 text-left ml-10 text-white">
        <h1 className="text-8xl font-bold">Construo experiências digitais</h1>
        <p className="text-4xl font-semibold my-10">
          Sou desenvolvedor web focado em criar interfaces modernas,
          performáticas e intuitivas.
        </p>
      </div>

      <figure className="hidden md:block">
        <RoboticHandModel />
      </figure>
    </section>
  );
};

export default Hero;
