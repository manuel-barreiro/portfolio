'use client';

import { power, boxmoment, bluesphere, coccions, promptopia, snaphive, remindMe } from "@/public"
import SectionTitle from "./SectionTitle"
import Image from "next/image"
import { TbBrandGithub } from "react-icons/tb"
import { RxOpenInNewWindow } from "react-icons/rx"
import { motion } from "framer-motion";

const Projects = () => {

  const rightVariant = {
    initial: { x: -50, opacity: 0 },
    animate:{ x: 0, opacity: 1 },      
  }

  const leftVariant = {
    initial: { x: 50, opacity: 0 },
    animate:{ x: 0, opacity: 1 },      
  }

  return (
    <section id='projects' className='max-w-contentContainer mx-auto lgl:px-20 py-24'>
      <SectionTitle title='Proyectos recientes' />
      <div className="w-full flex flex-col items-center justify-between gap-16 mt-5">

        {/* Power Consultant */}
        <motion.div
          variants={leftVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true,
                      amount: 0.5 }}
          transition= {{ duration: 0.5, delay: 0.5 }}
          className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-4">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://powerconsultant.com.ar/" target="_blank"
            >
              <div className="hover:scale-105 ease-in-out duration-300">
                <Image 
                  className="w-full h-full object-contain"
                  src={power}
                  alt="Power Consultant"
                  priority={true}
                  placeholder="blur"
                />
              </div>
            </a>

            <div className="w-full xl:w-1/2 flex flex-col gap-4 lgl:justify-between items-start md:items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Landing page & Product Catalog
              </p>
              <h3 className="text-3xl lg:text-4xl font-titleFont font-bold">Power Consultant</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                Diseño y desarrollo (Figma to code) de landing page empresarial y catálogo de productos. Desarrollado con Next.js 13 (app router), optimizado aprovechando SSR.
              </p>
              <ul className="ml-10 text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Next.js</li>
                <li>Tailwind</li>
                <li>Vercel</li>
                <li>Framer Motion</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a 
                  className="hover:text-textGreen hover:scale-105 ease-in-out duration-300"
                  href="https://github.com/manuel-barreiro/power_consultant"
                  target= "_blank"
                >
                  <TbBrandGithub />
                </a>
                <a 
                  className="hover:text-textGreen hover:scale-105 ease-in-out duration-300"
                  href="https://powerconsultant.com.ar/"
                  target= "_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Box Moment */}
        <motion.div 
          variants={rightVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true,
                      amount: 0.5 }}
          transition= {{ duration: 0.5, delay: 0.5 }}
          className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-4">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://boxmoment.com.ar/" target="_blank"
            >
              <div className="hover:scale-105 ease-in-out duration-300">
                <Image 
                  className="w-full h-full object-contain"
                  src={boxmoment}
                  alt="Box Moment"
                  priority={true}
                  placeholder="blur"
                />
              </div>
            </a>

            <div className="w-full xl:w-1/2 flex flex-col gap-4 lgl:justify-between items-end text-right z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Landing Page
              </p>
              <h3 className="text-3xl lg:text-4xl font-titleFont font-bold">Box Moment</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md lg:-mr-16">
                Diseño y desarrollo de landing page para empresa de cajas navideñas. Desarrollado en React utilizando Vite, y Tailwind CSS para los estilos, deploy en hosting de la empresa.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>React</li>
                <li>Vite</li>
                <li>Tailwind</li>
                <li>Framer Motion</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a 
                  className="hover:text-textGreen hover:scale-105 ease-in-out duration-300"
                  href="https://github.com/manuel-barreiro/boxmoment"
                  target= "_blank"
                >
                  <TbBrandGithub />
                </a>
                <a 
                  className="hover:text-textGreen hover:scale-105 ease-in-out duration-300"
                  href="https://boxmoment.com.ar/"
                  target= "_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Promptopia */}
        {/* <motion.div 
          variants={leftVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true,
                      amount: 0.5 }}
          transition= {{ duration: 0.5, delay: 0.5 }}
          className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-4">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://promptopia-mb.vercel.app/" target="_blank"
            >
              <div className="hover:scale-105 ease-in-out duration-300">
                <Image 
                  className="w-full h-full object-contain"
                  src={promptopia}
                  alt="promptopia"
                  priority={true}
                />
              </div>
            </a>

            <div className="w-full xl:w-1/2 flex flex-col gap-4 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Fullstack App
              </p>
              <h3 className="text-3xl lg:text-4xl font-titleFont font-bold">Promptopia</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                Aplicación fullstack desarrollada con Next.js. Permite a los usuarios publicar sus prompts para utilizarlas en una IA como ChatGPT.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>React</li>
                <li>Next.js</li>
                <li>Next-auth</li>
                <li>Tailwind</li>
                <li>MongoDB</li>
                <li>Vercel</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a 
                  className="hover:text-textGreen hover:scale-105 ease-in-out duration-300"
                  href="https://github.com/manuel-barreiro/promptopia"
                  target= "_blank"
                >
                  <TbBrandGithub />
                </a>
                <a 
                  className="hover:text-textGreen hover:scale-105 ease-in-out duration-300"
                  href="https://promptopia-mb.vercel.app/"
                  target= "_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </motion.div> */}

        {/* RemindMe */}
        <motion.div 
        variants={leftVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true,
                      amount: 0.5 }}
        transition= {{ duration: 0.5, delay: 0.5 }}
        className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-4">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://mb-remind-me.vercel.app/" target="_blank"
            >
              <div className="hover:scale-105 ease-in-out duration-300">
                <Image 
                  className="w-full h-full object-contain"
                  src={remindMe}
                  alt="coccions"
                  priority={true}
                  placeholder="blur"
                />
              </div>
            </a>

            <div className="w-full xl:w-1/2 flex flex-col gap-4 lgl:justify-between items-start md:items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Full Stack App
              </p>
              <h3 className="text-3xl lg:text-4xl font-titleFont font-bold">RemindMe</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                Aplicación que le permite a los usuarios crear y guardar recordatorios. Desarrollada en TypeScript con Next.js utilizando server actions, TailwindCSS, y Prisma con PostgreSQL.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind</li>
                <li>Prisma</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a 
                  className="hover:text-textGreen hover:scale-105 ease-in-out duration-300"
                  href="https://github.com/manuel-barreiro/remind-me"
                  target= "_blank"
                >
                  <TbBrandGithub />
                </a>
                <a 
                  className="hover:text-textGreen hover:scale-105 ease-in-out duration-300"
                  href="https://mb-remind-me.vercel.app/"
                  target= "_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SnapHive */}
        <motion.div 
        variants={rightVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true,
                      amount: 0.5 }}
        transition= {{ duration: 0.5, delay: 0.5 }}
        className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-4">
            <div
              className="w-full xl:w-1/2 h-auto relative group"
            >
              <div className="hover:scale-105 ease-in-out duration-300">
                <Image 
                  className="w-full h-full object-contain"
                  src={coccions}
                  alt="coccions"
                  priority={true}
                  placeholder="blur"
                />
              </div>
            </div>

            <div className="w-full xl:w-1/2 flex flex-col gap-4 lgl:justify-between items-end text-right z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                E-commerce Catalog
              </p>
              <h3 className="text-3xl lg:text-4xl font-titleFont font-bold">Coccions</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md lg:-mr-16">
                Diseño y desarrollo de landing page y catálogo web de productos para empresa de pastelería.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a 
                  className="hover:text-textGreen hover:scale-105 ease-in-out duration-300"
                  href="https://github.com/manuel-barreiro/Coccions"
                  target= "_blank"
                >
                  <TbBrandGithub />
                </a>
                <a 
                  className="hover:text-textGreen hover:scale-105 ease-in-out duration-300"
                  href="https://coccions.com.ar/"
                  target= "_blank"
                >
                  <RxOpenInNewWindow />
                </a>

              </div>
            </div>
          </div>
        </motion.div>


        {/* SnapHive */}
        <motion.div 
        variants={leftVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true,
                      amount: 0.5 }}
        transition= {{ duration: 0.5, delay: 0.5 }}
        className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-4">
            <div
              className="w-full xl:w-1/2 h-auto relative group"
            >
              <div className="hover:scale-105 ease-in-out duration-300">
                <Image 
                  className="w-full h-full object-contain"
                  src={snaphive}
                  alt="snaphive"
                  priority={true}
                  placeholder="blur"
                />
              </div>
            </div>

            <div className="w-full xl:w-1/2 flex flex-col gap-4 lgl:justify-between items-start md:items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Full Stack App
              </p>
              <h3 className="text-3xl lg:text-4xl font-titleFont font-bold">SnapHive</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                Aplicación full stack desarrollada con estructura MVC. Express.js, Passport.js, MongoDB. Permite a los usuarios publicar, likear y comentar imágenes.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Express.js</li>
                <li>Passport.js</li>
                <li>MongoDB</li>
                <li>Cloudinary</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a 
                  className="hover:text-textGreen hover:scale-105 ease-in-out duration-300"
                  href="https://github.com/manuel-barreiro/SnapHive"
                  target= "_blank"
                >
                  <TbBrandGithub />
                </a>
              </div>
            </div>
          </div>
        </motion.div>


        {/* Bluesphere
        <motion.div 
          variants={leftVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true,
                      amount: 0.5 }}
          transition= {{ duration: 0.5, delay: 0.5 }}
          className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-4">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://bluesphere.com.ar/" target="_blank"
            >
              <div className="hover:scale-105 ease-in-out duration-300">
                <Image 
                  className="w-full h-full object-contain"
                  src={bluesphere}
                  alt="bluesphere"
                  priority={true}
                  placeholder="blur"
                />
              </div>
            </a>

            <div className="w-full xl:w-1/2 flex flex-col gap-4 lgl:justify-between items-start md:items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Landing Page
              </p>
              <h3 className="text-3xl lg:text-4xl font-titleFont font-bold">Bluesphere</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md lg:-ml-16">
                Diseño y desarrollo de logotipo y sitio web, para Bluesphere, empresa de gestión de residuos.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>HTML</li>
                <li>CSS</li>
                <li>Sass</li>
                <li>Javascript</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a 
                  className="hover:text-textGreen hover:scale-105 ease-in-out duration-300"
                  href="https://github.com/manuel-barreiro/BLUESPHERE"
                  target= "_blank"
                >
                  <TbBrandGithub />
                </a>
                <a 
                  className="hover:text-textGreen hover:scale-105 ease-in-out duration-300"
                  href="https://bluesphere.com.ar/"
                  target= "_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </motion.div> */}
        
      </div>
    </section>
  )
}

export default Projects