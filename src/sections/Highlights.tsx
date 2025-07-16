import ProjectCard from "@/components/ProjectCard";
import React from "react";

const Highlights = () => {
  return (
    <section
      id="highlights"
      className="flex justify-center items-center px-6 w-full  overflow-hidden mt-20"
    >
      <div className="flex md:flex-row flex-col justify-center items-center px-6 gap-12">
        <ProjectCard
          img_path={"/assets/images/placeholder.jpg"}
          title={"Project 1"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequatur, possimus rem dolore magnam."
          }
        />
        <ProjectCard
          img_path={"/assets/images/placeholder.jpg"}
          title={"Project 2"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequatur, possimus rem dolore magnam."
          }
        />
        <ProjectCard
          img_path={"/assets/images/placeholder.jpg"}
          title={"Project 3"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequatur, possimus rem dolore magnam."
          }
        />
      </div>
    </section>
  );
};

export default Highlights;
