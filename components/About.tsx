import Image from "next/image"
import SectionTitle from "./SectionTitle"
import { AiFillThunderbolt } from "react-icons/ai"

const About = () => {
  return (
    <section id='about' className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8 lg:pl-16'>
        <SectionTitle title='Sobre mí' />
        <div className="flex flex-col lgl:flex-row gap-16">
          <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4 text-justify">
            <p>Mi nombre es Manuel, este año me recibo de ingeniero y soy desarrollador full-stack.</p>
            <p>Me apasiona el mundo de la tecnología, siempre me gustó programar y trabajar en proyectos desafiantes que me permitan adquirir nuevos conocimientos y superar mis límites. Estoy siempre en búsqueda de nuevos retos y oportunidades para crecer como <span className="text-textGreen">ingeniero y desarrollador.</span></p>
            <p>¡Gracias por visitar mi portfolio!</p>
            <p>Algunas de las tecnologías que manejo:</p>
            <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt/>
                </span>
                JavaScript (ES6+)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt/>
                </span>
                Python
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt/>
                </span>
                React
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt/>
                </span>
                MongoDB
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt/>
                </span>
                Next.js 13
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt/>
                </span>
                MySQL
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt/>
                </span>
                Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt/>
                </span>
                Power BI
              </li>
            </ul>
          </div>
          <div className="lgl:w-1/3 mx-auto">
              <Image
                width={200}
                height={200}
                src='/assets/profile.JPG'
                className='rounded-full'
                alt="photo"
                priority={true}
              />
          </div>
        </div>
    </section>      
  )
}

export default About