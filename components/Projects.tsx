import SectionTitle from "./SectionTitle";
import { projects } from "@/constants/projects";
import ProjectCard from "./projects/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-contentContainer mx-auto px-10 lg:px-20 py-24 scroll-m-20 lg:scroll-m--[12vh]"
    >
      <SectionTitle title="Proyectos recientes" />
      <div className="w-full flex flex-col items-center justify-between gap-16 mt-5">
        {projects.map((project, index) => {
          return <ProjectCard key={index} {...project} index={index} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
