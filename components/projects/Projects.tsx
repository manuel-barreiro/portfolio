import SectionTitle from "../SectionTitle";
import { projects } from "@/constants/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-contentContainer mx-auto px-5 sm:px-10 lg:px-24 pt-36 scroll-m-20 lg:scroll-m--[10vh]"
    >
      <div className="px-6">
        <SectionTitle title="Proyectos recientes" />
      </div>
      <div className="w-full flex flex-col items-center justify-between gap-16 mt-5">
        {projects.map((project, index) => {
          return <ProjectCard key={index} {...project} index={index} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
