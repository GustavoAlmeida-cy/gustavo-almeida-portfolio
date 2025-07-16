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
    <div className="flex flex-col justify-start gap-4 items-center bg-card rounded-md w-[400px] h-[440px] overflow-hidden pb-2 shadow-md">
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

      <div className="flex flex-col items-start justify-center gap-2 px-4 py-2">
        <h3 className="text-2xl font-semibold flex items-center justify-between gap-4">
          <MonitorCheck />
          <span>{title}</span>
        </h3>
        <Link
          href={link}
          className="underline-element animate-pulse text-sm my-1"
          target="new _blank"
        >
          <span>{link}</span>
        </Link>
        <p className="text-md">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
