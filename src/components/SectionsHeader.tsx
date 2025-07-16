import React from "react";

interface SectionsHeaderProps {
  emoji: string;
  title: string;
  top: string;
}

const SectionsHeader: React.FC<SectionsHeaderProps> = ({
  emoji,
  title,
  top,
}) => {
  return (
    <div
      className={`absolute ${top} text-center flex justify-center items-center gap-1 text-md font-semibold tracking-wide bg-accent-foreground text-background rounded-2xl py-2 px-4 z-40`}
    >
      <span>{emoji}</span>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionsHeader;
