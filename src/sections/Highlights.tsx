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
            "3D Shop é uma aplicação web moderna para exibir e vender teclados mecânicos com visualização interativa."
          }
          link={"https://github.com/GustavoAlmeida-cy/3D-Shop"}
        />
        <div className="md:mb-50">
          <ProjectCard
            img_path={"/assets/images/demos/demo_study.png"}
            title={"Study"}
            description={
              "Study é uma plataforma web gratuita desenvolvida como projeto universitário com o propósito de promover a educação."
            }
            link={"https://github.com/GustavoAlmeida-cy/study-project"}
          />
        </div>
        <ProjectCard
          img_path={"/assets/images/demos/demo_memory_game.png"}
          title={"Jogo da Memória"}
          description={
            "Um projeto interativo de Jogo da Memória desenvolvido com componentes otimizados para acessibilidade e desempenho."
          }
          link={"https://github.com/GustavoAlmeida-cy/memory-game"}
        />
      </div>
    </section>
  );
};

export default Highlights;
