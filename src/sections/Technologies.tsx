"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
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
  index: number;
  onVisible: () => void;
  animated: boolean;
};

const ExperienceCardItem: React.FC<ExperienceCardItemProps> = ({
  card,
  index,
  onVisible,
  animated,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30% 0px" });

  useEffect(() => {
    if (isInView) {
      // Delay + duração menor para animação mais rápida
      const timeout = setTimeout(() => {
        onVisible();
      }, (0.1 + index * 0.1) * 1000 + 400);
      return () => clearTimeout(timeout);
    }
  }, [isInView, onVisible, index]);

  const delay = 0.1 + index * 0.1;

  return (
    <motion.div
      ref={ref}
      className="flex gap-4 sm:gap-6 md:gap-10 relative z-10 w-full"
      initial={{ opacity: 0, x: 50 }}
      animate={animated ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeInOut", delay }}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={animated ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, ease: "easeInOut", delay: delay + 0.05 }}
        className="w-8 h-8 sm:w-10 sm:h-10 flex-none rounded-full flex justify-center items-center relative shadow-md z-10 -ml-9 sm:ml-0 bg-card p-3"
      >
        <Image
          src={card.logoPath}
          alt={`${card.title} logo`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 40px, 64px"
        />
      </motion.div>

      {/* Texto preparado para Tecnologias */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold">{card.title}</h2>
        <p className="my-2 text-sm sm:text-base text-accent-foreground/70">
          {card.date} {/* Pode usar para versão ou nível */}
        </p>
        <p className="italic text-[#839cb5] text-sm">Principais habilidades</p>
        <ul className="list-disc ms-4 mt-2 space-y-2 text-accent-foreground/80 text-sm sm:text-base">
          {card.responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Technologies: React.FC = () => {
  const timelineControls = useAnimation();
  const [cardsVisibleCount, setCardsVisibleCount] = useState(0);
  const totalCards = expCards.length;

  useEffect(() => {
    if (cardsVisibleCount === 0) return;

    const progress = cardsVisibleCount / totalCards;

    timelineControls.start({
      opacity: 1,
      scaleY: progress,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.1,
      },
    });
  }, [cardsVisibleCount, totalCards, timelineControls]);

  const handleCardVisible = () => {
    setCardsVisibleCount((prev) => Math.min(prev + 1, totalCards));
  };

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

      <div className="relative flex flex-col flex-1 max-w-3xl w-full pt-10 sm:pt-20">
        {/* Linha da Timeline */}
        <motion.div
          className="absolute left-4.5 -mt-4 sm:mt-0 sm:left-20.5 w-1 bg-gradient-to-b from-[#81e0ff] via-[#76ae63] to-[#ffd026] z-0 rounded-2xl origin-top"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={timelineControls}
          style={{ top: 80, bottom: 0 }}
        />

        {/* Cards */}
        <div className="relative z-10 flex flex-col gap-14 sm:gap-20 pl-10 sm:pl-16">
          {expCards.map((card, index) => (
            <ExperienceCardItem
              key={card.title}
              card={card}
              index={index}
              onVisible={handleCardVisible}
              animated={index < cardsVisibleCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
