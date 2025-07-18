"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { expCards } from "../../public/constants/Techs";
import SectionsHeader from "@/components/SectionsHeader";

type ExperienceCard = {
  title: string;
  date: string;
  logoPath: string;
  responsibilities: string[];
};

type ExperienceCardItemProps = {
  card: ExperienceCard;
};

const ExperienceCardItem: React.FC<ExperienceCardItemProps> = ({ card }) => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const isTextInView = useInView(textRef, {
    once: true,
    margin: "-30% 0px",
  });

  return (
    <motion.div
      ref={textRef}
      className="flex gap-4 sm:gap-6 md:gap-10 relative z-10 w-full"
      initial={{ opacity: 0, y: 40 }}
      animate={isTextInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Logo */}
      <div className="w-8 h-8 sm:w-10 sm:h-10 flex-none rounded-full flex justify-center items-center relative shadow-md z-10 -ml-9 sm:ml-0">
        <Image
          src={card.logoPath}
          alt={`${card.title} logo`}
          fill
          className="object-contain"
          priority={card.title === expCards[0].title}
          sizes="(max-width: 768px) 40px, 64px"
        />
      </div>

      {/* Text */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold">{card.title}</h2>
        <p className="my-3 text-sm sm:text-base text-white/70">
          📆 {card.date}
        </p>
        <p className="italic text-[#839cb5] text-sm">Responsabilidades</p>
        <ul className="list-disc ms-4 mt-4 space-y-3 text-white/80 text-sm sm:text-base">
          {card.responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Technologies: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1.4]);

  return (
    <section
      id="technologies"
      className="relative w-full px-6 py-20 flex flex-col items-center bg-background overflow-hidden mb-8"
    >
      <SectionsHeader
        emoji="🤖"
        title="Tecnologias & Proficiências"
        top="top-0 md:top-15"
      />

      <div
        ref={timelineRef}
        className="relative flex flex-col flex-1 max-w-3xl w-full pt-10 sm:pt-20"
      >
        {/* Timeline Line */}
        <motion.div
          className="absolute left-4.5 -mt-3 sm:mt-0 sm:left-20.5 w-1 bg-gradient-to-b from-[#6d45ce] via-[#fd5c79] to-[#62e0ff] z-0 rounded-2xl"
          style={{
            top: 80,
            bottom: 0,
            scaleY,
            transformOrigin: "top",
          }}
        />

        {/* Experience Cards */}
        <div className="relative z-10 flex flex-col gap-14 sm:gap-20 pl-10 sm:pl-16">
          {expCards.map((card) => (
            <ExperienceCardItem key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
