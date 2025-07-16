import React from "react";

interface SectionsHeaderProps {
  emoji: string;
  title: string;
}

const SectionsHeader: React.FC<SectionsHeaderProps> = ({ emoji, title }) => {
  return (
    <div className="absolute top-15 text-center flex justify-center items-center gap-1 text-md font-semibold tracking-wide bg-accent-foreground text-background rounded-2xl py-2 px-4">
      <span>{emoji}</span>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionsHeader;
