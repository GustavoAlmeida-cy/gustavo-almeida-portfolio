import { MonitorCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  img_path: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  img_path,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col justify-between items-center bg-background rounded-2xl w-[400px] h-[400px] overflow-hidden pb-4">
      <Image
        src={img_path}
        alt="project"
        width={400}
        height={200}
        className="select-none"
      />
      <div className="flex flex-col items-start justify-center gap-2 px-4">
        <h3 className="text-2xl font-semibold flex items-center justify-between gap-4">
          <MonitorCheck />
          <span>{title}</span>
        </h3>
        <p className="text-md">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
