import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex sm:flex-row flex-col justify-center items-center px-6 w-full h-[50vh] -mt-10 overflow-hidden"
    >
      <div className="flex flex-col flex-1 text-left ml-10 text-white max-w-2xl">
        <h1 className="text-3xl font-bold">
          Desenvolvo interfaces modernas e soluções completas
        </h1>
        <p className="text-xl font-semibold my-6 leading-relaxed">
          Sou desenvolvedor front-end dedicado a criar interfaces modernas,
          performáticas e intuitivas que conectam pessoas e tecnologia. Com foco
          em usabilidade e design responsivo, transformo ideias em produtos
          digitais funcionais e atraentes.
        </p>
        <p className="text-xl leading-relaxed mb-6">
          Tenho experiência com as principais tecnologias do ecossistema web,
          como React, Next.js, TypeScript e Tailwind CSS, sempre buscando
          aprender novas ferramentas para entregar soluções de alta qualidade.
        </p>
      </div>
    </section>
  );
};

export default About;
