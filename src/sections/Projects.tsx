"use client";

import ProjectCard from "@/components/ProjectCard";
import * as React from "react";
import { useEffect, useState } from "react";
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
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">(
    "horizontal"
  );
  const [itemsPerView, setItemsPerView] = useState(2);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;

      if (width < 1024) {
        setOrientation("vertical");
        setItemsPerView(1);
      } else {
        setOrientation("horizontal");
        setItemsPerView(1);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <section
      id="projects"
      className="flex flex-col items-center px-4 w-full overflow-hidden relative py-12 mt-20"
    >
      <SectionsHeader emoji="💻" title="Conheça meus Trabalhos" top="top-15" />

      <div className="w-full max-w-[440px] mt-40 pr-3 ml-2">
        <Carousel
          orientation={orientation}
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent
            className={`${
              orientation === "vertical"
                ? "flex-col h-[500px]"
                : "flex-row gap-8"
            }`}
          >
            {projects.map((project, index) => (
              <CarouselItem
                key={project.title}
                className={
                  orientation === "vertical"
                    ? "basis-full"
                    : itemsPerView === 2
                    ? "basis-1/2"
                    : "basis-full"
                }
              >
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
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
