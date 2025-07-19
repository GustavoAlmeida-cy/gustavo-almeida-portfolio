"use client";

import ProjectCard from "@/components/ProjectCard";
import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../public/constants/Highlights";
import SectionsHeader from "@/components/SectionsHeader";

// Configurações para animação dos cards (duração e delay)
const CARD_ANIMATION_DURATION = 0.8;
const CARD_ANIMATION_DELAY = 0.3;

const Highlights = () => {
  return (
    <section
      id="highlights"
      className="flex justify-center items-center px-6 w-full overflow-hidden relative pb-4"
    >
      {/* Cabeçalho da seção */}
      <SectionsHeader emoji="👨‍💻" title="Projetos em Destaque" top="top-15" />

      {/* Cards animados dos projetos */}
      <div className="flex xl:flex-row flex-col justify-center items-center px-6 gap-12 mt-40">
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
            viewport={{ once: true, amount: 0.3 }} // anima só uma vez ao aparecer 30% do card
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
