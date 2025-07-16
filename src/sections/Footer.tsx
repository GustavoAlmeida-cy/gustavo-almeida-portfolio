import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center p-6">
      <div className="flex items-center gap-4">
        <Link href="#" className="flex items-center gap-2">
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
    </footer>
  );
};

export default Footer;
