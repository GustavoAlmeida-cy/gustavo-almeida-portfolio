import SectionsHeader from "@/components/SectionsHeader";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex sm:flex-row flex-col justify-center items-center px-6 py-20 w-full overflow-hidden bg-background relative"
    >
      <SectionsHeader emoji="🖐️" title="Apresentações" top="top-0 md:top-15" />
      <div className="flex flex-col flex-1 text-left ml-0 md:ml-10 text-accent-foreground max-w-2xl pt-0 md:pt-20">
        <h2 className="text-3xl font-bold">
          Desenvolvo websites modernos e soluções completas
        </h2>
        <p className="text-xl font-semibold my-6 leading-relaxed">
          Sou desenvolvedor front-end dedicado a criar interfaces modernas,
          performáticas e intuitivas que conectam pessoas e tecnologia. Com foco
          em usabilidade e design responsivo, transformo ideias em produtos
          digitais funcionais e atraentes.
        </p>
        <p className="text-xl leading-relaxed mb-0 md:mb-6">
          Tenho experiência com as principais tecnologias do ecossistema web,
          como React, Next.js, TypeScript e Tailwind CSS, sempre buscando
          aprender novas ferramentas para entregar soluções de alta qualidade.
        </p>
      </div>
    </section>
  );
};

export default About;
