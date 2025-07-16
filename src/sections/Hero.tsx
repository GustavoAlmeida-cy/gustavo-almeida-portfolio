"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronsDown } from "lucide-react";
import { motion } from "framer-motion";

// Texto para o efeito de typing
const typingText = "Construa experiências digitais";

const Hero = () => {
  const [typedText, setTypedText] = useState("");

  // Efeito de typing
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(typingText.slice(0, i + 1));
      i++;
      if (i >= typingText.length) clearInterval(interval);
    }, 60); // velocidade do typing
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="flex sm:flex-row flex-col justify-between items-start mt-10 px-6 w-[100%] h-[100vh] overflow-hidden relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex z-30 flex-col h-140 w-140 text-left mx-8 text-white mt-6 md:mt-0"
      >
        <h1 className="text-8xl font-bold capitalize">
          {typedText}
          <span className="ml-1 animate-pulse text-[80px]">|</span>
        </h1>
        <p className="text-4xl font-semibold my-10">
          Sou desenvolvedor web focado em criar interfaces modernas,
          performáticas e intuitivas.
        </p>
        <Button
          type="button"
          className="group flex justify-center items-center gap-2 px-6 py-4 w-[280px] h-[60px] text-md font-black uppercase tracking-wide text-accent-foreground bg-gradient-to-r from-background to-accent shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-accent-foreground/40 hover:opacity-95 cursor-pointer"
        >
          <Link href="#" className="flex items-center gap-2">
            <ChevronsDown className="mt-2 transition-transform duration-300 animate-bounce scale-140" />
            Transforme sua ideia
            <ChevronsDown className="mt-2 transition-transform duration-300 animate-bounce scale-140" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
