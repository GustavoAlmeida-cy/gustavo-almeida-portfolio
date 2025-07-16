"use client";

import ProjectCard from "@/components/ProjectCard";
import * as React from "react";
import { motion } from "framer-motion";
import SectionsHeader from "@/components/SectionsHeader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Duração e atraso base para cada animação
const CARD_ANIMATION_DURATION = 0.6;
const CARD_ANIMATION_DELAY = 0.3;

const Projects = () => {
  const projects = [
    {
      img_path: "/assets/images/demos/demo_miv_kod.png",
      title: "Miv Kod",
      description:
        "Miv Kod é um projeto escolar simples, criado como parte de uma representação artística que une arte, tecnologia e interação.",
      link: "https://github.com/GustavoAlmeida-cy/Miv_Kod",
    },
    {
      img_path: "/assets/images/demos/demo_matrixfy.png",
      title: "Matrixfy",
      description:
        "Matrixfy converte imagens e vídeo em arte ASCII colorida em tempo real usando p5.js. Suporta upload de imagens, webcam e personalizações",
      link: "https://github.com/GustavoAlmeida-cy/Matrixfy",
    },
    {
      img_path: "/assets/images/demos/demo_web_pong.png",
      title: "Web Pong",
      description:
        "Web Pong é uma implementação moderna do clássico jogo Pong usando tecnologias web nativas: JavaScript, CSS e HTML.",
      link: "https://github.com/GustavoAlmeida-cy/web-pong",
    },
    {
      img_path: "/assets/images/demos/demo_bin_calc.png",
      title: "Calculadora Binária",
      description:
        "Esta é uma calculadora binária interativa desenvolvida em Python, com uma interface de terminal aprimorada.",
      link: "https://github.com/GustavoAlmeida-cy/Binary-Calculator-Python",
    },
  ];

  return (
    <section
      id="projects"
      className="flex flex-col items-center px-4 w-full overflow-hidden relative py-12 mt-20"
    >
      <SectionsHeader emoji="💻" title="Conheça meus Trabalhos" />

      <div className="w-full max-w-7xl mt-40 px-2 sm:px-10 md:px-40">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="flex gap-8">
            {projects.map((project, index) => (
              <CarouselItem
                key={project.title}
                className="basis-full sm:basis-3/4 md:basis-2/4"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: CARD_ANIMATION_DURATION,
                    delay: index * CARD_ANIMATION_DELAY,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="p-4 h-full"
                >
                  <ProjectCard
                    img_path={project.img_path}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                  />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="cursor-pointer" />
          <CarouselNext className="cursor-pointer" />
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
