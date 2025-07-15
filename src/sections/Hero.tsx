import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex justify-between items-start mt-8 px-6 w-[100%] h-[100vh]"
    >
      <div className="flex flex-col flex-1/2 h-140 text-left">
        <h1 className="text-8xl font-bold">Construo experiências digitais</h1>
        <p className="text-4xl font-semibold my-10">
          Sou desenvolvedor web focado em criar interfaces modernas,
          performáticas e intuitivas.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center p-4 flex-1/2 h-140"></div>
    </section>
  );
};

export default Hero;
