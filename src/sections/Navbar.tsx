import React from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-3 sticky top-0 left-0 bg-background/70 backdrop-blur-sm w-full z-50">
      <Button type="button">
        <Link href="#">Contato</Link>
      </Button>

      <div className="flex items-center gap-4 mr-10">
        <Link href="#">Sobre mim</Link>
        <Link href="#">Tecnologias</Link>
        <Link href="#">Projetos</Link>
      </div>

      <ModeToggle />
    </nav>
  );
};

export default Navbar;
