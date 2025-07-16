// src/sections/Footer.tsx
import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Obtém o ano atual dinamicamente

  return (
    <footer className="flex flex-col justify-center items-center p-6 mt-10">
      {/* Links*/}
      <div className="flex items-center gap-4 font-semibold text-white mb-6">
        <Link
          target="new _blank"
          href="https://github.com/GustavoAlmeida-cy"
          className="flex items-center gap-2"
        >
          <FaGithub size={24} />
          <span>Github</span>
        </Link>
        <Link href="#" className="flex items-center gap-2">
          <FaLinkedin size={24} />
          <span>Linkedin</span>
        </Link>
        <Link href="#" className="flex items-center gap-2">
          <FaWhatsapp size={24} />
          <span>Whatsapp</span>
        </Link>
      </div>

      {/* Seção de Copyright */}
      <div className="text-center text-sm text-gray-400">
        <hr />
        <p className="mt-4">
          &copy; {currentYear} Gustavo Almeida. Todos os direitos reservados.
        </p>

        <p className="mt-2">
          Assets utilizados: &ldquo;Robotic Hand&ldquo; por{" "}
          <Link
            href="https://skfb.ly/6XLBS"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            SeanNicolas
          </Link>{" "}
          está licenciada sob{" "}
          <Link
            href="http://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Creative Commons Attribution
          </Link>
          .
        </p>

        <p className="mt-1">
          Foto por{" "}
          <Link
            href="https://www.pexels.com/photo/grayscale-photography-of-mountain-3419791/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Balaji Srinivasan (Pexels)
          </Link>
          .{" "}
          <Link
            href="https://lucide.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Lucide Icons
          </Link>
          ,{" "}
          <Link
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Tailwind CSS
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
