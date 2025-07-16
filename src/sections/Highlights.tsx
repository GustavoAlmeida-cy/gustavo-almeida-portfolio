"use client";

import ProjectCard from "@/components/ProjectCard";
import React from "react";
import { motion } from "framer-motion";

// Duração e atraso base para cada animação
const CARD_ANIMATION_DURATION = 0.8;
const CARD_ANIMATION_DELAY = 0.3;

const Highlights = () => {
  const projects = [
    {
      img_path: "/assets/images/demos/demo_3d_shop.png",
      title: "3D Shop",
      description:
        "3D Shop é uma aplicação web moderna para exibir e vender teclados mecânicos com visualização interativa.",
      link: "https://github.com/GustavoAlmeida-cy/3D-Shop",
    },
    {
      img_path: "/assets/images/demos/demo_study.png",
      title: "Study",
      description:
        "Study é uma plataforma web gratuita desenvolvida como projeto universitário com o propósito de promover a educação.",
      link: "https://github.com/GustavoAlmeida-cy/study-project",
    },
    {
      img_path: "/assets/images/demos/demo_memory_game.png",
      title: "Jogo da Memória",
      description:
        "Um projeto interativo de Jogo da Memória desenvolvido com componentes otimizados para acessibilidade e desempenho.",
      link: "https://github.com/GustavoAlmeida-cy/memory-game",
    },
  ];

  return (
    <section
      id="highlights"
      className="flex justify-center items-center px-6 w-full overflow-hidden mt-20"
    >
      <div className="flex md:flex-row flex-col justify-center items-center px-6 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: CARD_ANIMATION_DURATION,
              delay: index * CARD_ANIMATION_DELAY,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }} // ativa ao ver 30% do componente
          >
            <ProjectCard
              img_path={project.img_path}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
