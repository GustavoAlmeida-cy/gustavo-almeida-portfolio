"use client";

import ProjectCard from "@/components/ProjectCard";
import * as React from "react";
import { motion } from "framer-motion";
import { projects } from "../../public/constants/Projects";
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
  return (
    <section
      id="projects"
      className="flex flex-col items-center px-4 w-full overflow-hidden relative py-12 mt-20"
    >
      <SectionsHeader emoji="💻" title="Conheça meus Trabalhos" top="top-15" />

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
