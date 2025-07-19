"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronsDown } from "lucide-react";
import { motion } from "framer-motion";

// Texto para animação de typing
const typingText = "Construa experiências digitais";

const Hero = () => {
  const [typedText, setTypedText] = useState("");

  // Simula efeito de digitação para o texto
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(typingText.slice(0, i + 1));
      i++;
      if (i >= typingText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="flex sm:flex-row flex-col justify-between items-start mt-10 w-[100%] h-[100vh] overflow-hidden relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex z-30 flex-col h-140 w-140 text-left mx-8 text-white mt-6 md:mt-0 md:ml-14"
      >
        {/* Título com efeito de typing e cursor piscante */}
        <h1 className="text-4xl md:text-8xl font-bold capitalize w-[100px] md:w-auto">
          {typedText}
          <span className="ml-2 animate-pulse text-[30px] md:text-[80px]">
            |
          </span>
        </h1>

        {/* Subtítulo descritivo */}
        <p className="text-2xl md:text-4xl font-semibold my-6 md:my-10  w-[250px] md:w-auto">
          Sou desenvolvedor web focado em criar interfaces modernas,&nbsp;
          performáticas e intuitivas.
        </p>

        {/* Botão com animação que leva para a seção de destaques */}
        <Button
          type="button"
          className="group flex justify-center items-center gap-2 px-6 py-4 w-[220px] md:w-[280px] h-[60px] text-xs md:text-md font-black uppercase tracking-wide text-accent-foreground bg-gradient-to-r from-background to-accent shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-accent-foreground/40 hover:opacity-95 cursor-pointer"
        >
          <Link href="#highlights" className="flex items-center gap-2">
            <ChevronsDown className="mt-2 transition-transform duration-300 animate-bounce scale-120 md:scale-140" />
            Transforme sua ideia
            <ChevronsDown className="mt-2 transition-transform duration-300 animate-bounce scale-120 md:scale-140" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
