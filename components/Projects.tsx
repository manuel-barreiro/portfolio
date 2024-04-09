import SectionTitle from "./SectionTitle"
import { projects } from '@/constants/projects'
import RightVariantProject from "./projects/RightVariantProject";
import LeftVariantProject from "./projects/LeftVariantProject";

const Projects = () => {

  return (
    <section id='projects' className='max-w-contentContainer mx-auto lgl:px-20 py-24'>
      <SectionTitle title='Proyectos recientes' />
      <div className="w-full flex flex-col items-center justify-between gap-16 mt-5">
        {projects.map((project, index) => {
          if (index % 2 === 0) {
            return <RightVariantProject key={index} {...project} />
          } else {
            return <LeftVariantProject key={index} {...project} />
          }
        })
      }
      </div>
    </section>
  )
}

export default Projects