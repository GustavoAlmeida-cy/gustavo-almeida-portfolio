import { MonitorCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  img_path: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  img_path,
  title,
  description,
  link,
}) => {
  return (
    <div className="flex flex-col justify-start gap-4 items-center bg-card rounded-md sm:w-[400px] h-[440px] overflow-hidden pb-2 shadow-md">
      {/* Imagem do projeto com Next.js Image para otimização */}
      <div className="relative w-full h-[240px]">
        <Image
          src={img_path}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-contain select-none scale-90 rounded-md"
          priority
        />
      </div>

      {/* Conteúdo textual do cartão */}
      <div className="flex flex-col items-start justify-center gap-2 px-4 py-2 scale-80 xs:scale-85 sm:scale-95 md:scale-100">
        <h3 className="text-xl md:text-2xl font-semibold flex items-center justify-between gap-4">
          {/* Ícone decorativo */}
          <MonitorCheck aria-hidden="true" />
          <span>{title}</span>
        </h3>

        {/* Link para o projeto, abre em nova aba */}
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-element animate-pulse text-sm my-1 italic text-[#839cb5]"
        >
          <span>{link}</span>
        </Link>

        {/* Descrição do projeto */}
        <p className="text-md">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
