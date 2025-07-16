"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronsDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex sm:flex-row flex-col justify-between items-start mt-10 px-6 w-[100%] h-[100vh] overflow-hidden relative"
    >
      <div className="flex z-30 flex-col h-140 w-140 text-left mx-8 text-white">
        <h1 className="text-8xl font-bold capitalize">
          Construa experiências digitais
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
      </div>
    </section>
  );
};

export default Hero;
