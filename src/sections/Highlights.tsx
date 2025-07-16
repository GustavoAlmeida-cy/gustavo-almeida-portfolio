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
          img_path={"/assets/images/demos/demo_3d_shop.png"}
          title={"3D Shop"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequatur, possimus rem dolore magnam."
          }
          link={"https://github.com/GustavoAlmeida-cy/3D-Shop"}
        />
        <div className="md:mb-50">
          <ProjectCard
            img_path={"/assets/images/demos/demo_study.png"}
            title={"Study"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequatur, possimus rem dolore magnam."
            }
            link={"https://github.com/GustavoAlmeida-cy/study-project"}
          />
        </div>
        <ProjectCard
          img_path={"/assets/images/demos/demo_memory_game.png"}
          title={"Jogo da Memória"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequatur, possimus rem dolore magnam."
          }
          link={"https://github.com/GustavoAlmeida-cy/memory-game"}
        />
      </div>
    </section>
  );
};

export default Highlights;
