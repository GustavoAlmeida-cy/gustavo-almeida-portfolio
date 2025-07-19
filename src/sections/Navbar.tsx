// src/sections/Navbar.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-3 sticky top-0 left-0 w-full z-100 bg-gradient-to-b from-background/70 to-background/30 backdrop-blur-md">
      {/* Botão que direciona para a seção de contato */}
      <Button type="button" className="font-bold tracking-wide cursor-pointer">
        <Link href="#contact">Fale comigo</Link>
      </Button>

      {/* Links de navegação visíveis em telas md+ */}
      <div className="hidden md:flex items-center gap-8 mr-10 font-semibold">
        <Link href="#about" className="underline-element">
          <span>Sobre mim</span>
        </Link>
        <Link href="#highlights" className="underline-element">
          <span>Destaques</span>
        </Link>
        <Link href="#projects" className="underline-element">
          <span>Projetos</span>
        </Link>
        <Link href="#technologies" className="underline-element">
          <span>Tecnologias</span>
        </Link>
      </div>

      {/* Toggle para modo claro/escuro */}
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
