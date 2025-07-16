// src/sections/Navbar.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-3 sticky top-0 left-0 w-full z-50 bg-gradient-to-b from-background/70 to-background/30 backdrop-blur-md">
      <Button type="button" className="font-bold tracking-wide cursor-pointer">
        <Link href="#">Fale comigo</Link>
      </Button>

      <div className="flex items-center gap-8 mr-10 font-semibold">
        <Link href="#about" className="underline-div">
          <span>Sobre mim</span>
          <div />
        </Link>
        <Link href="#highlights" className="underline-div">
          <span>Destaques</span>
          <div />
        </Link>
        <Link href="#" className="underline-div">
          <span>Projetos</span>
          <div />
        </Link>
        <Link href="#" className="underline-div">
          <span>Tecnologias</span>
          <div />
        </Link>
      </div>

      <ModeToggle />
    </nav>
  );
};

export default Navbar;
