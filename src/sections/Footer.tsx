import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center p-6">
      <div className="flex items-center gap-4">
        <Link href="#">Github</Link>
        <Link href="#">Linkedin</Link>
        <Link href="#">Whatsapp</Link>
      </div>
    </footer>
  );
};

export default Footer;
