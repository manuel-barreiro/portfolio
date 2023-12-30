'use client';

import { power, boxmoment, bluesphere, coccions, snaphive, remindMe, devaluApp, shortcut, tablemaster } from "@/public"
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
      <SectionTitle title='Recent projects' />
      <div className="w-full flex flex-col items-center justify-between gap-16 mt-5">

        {/* TableMaster */}
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
              href="https://tablemaster.vercel.app/" target="_blank"
            >
              <div className="hover:scale-105 ease-in-out duration-300">
                <Image 
                  className="w-full h-full object-contain"
                  src={tablemaster}
                  alt="Box Moment"
                  priority={true}
                  placeholder="blur"
                />
              </div>
            </a>

            <div className="w-full xl:w-1/2 flex flex-col gap-4 lgl:justify-between items-end text-right z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Application
              </p>
              <h3 className="text-3xl lg:text-4xl font-titleFont font-bold">TableMaster</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md lg:-mr-16">
              Ongoing development of a restaurant table reservation application. Developed using React with Next.js and styled with Tailwind CSS.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>TypeScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a 
                  className="hover:text-textGreen hover:scale-105 ease-in-out duration-300"
                  href="https://github.com/manuel-barreiro/tablemaster"
                  target= "_blank"
                >
                  <TbBrandGithub />
                </a>
                <a 
                  className="hover:text-textGreen hover:scale-105 ease-in-out duration-300"
                  href="https://tablemaster.vercel.app/"
                  target= "_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ShortCut */}
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
              href="https://shortcut.com.ar/" target="_blank"
            >
              <div className="hover:scale-105 ease-in-out duration-300">
                <Image 
                  className="w-full h-full object-contain"
                  src={shortcut}
                  alt="Power Consultant"
                  priority={true}
                  placeholder="blur"
                />
              </div>
            </a>

            <div className="w-full xl:w-1/2 flex flex-col gap-4 lgl:justify-between items-start md:items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Application
              </p>
              <h3 className="text-3xl lg:text-4xl font-titleFont font-bold">ShortCut</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              Design and development of a web application for a bar in Buenos Aires, featuring an order system integrated with Mercado Pago for payment processing. Includes email notifications with resend functionality.
              </p>
              <ul className="ml-10 text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>MercadoPago</li>
                <li>MongoDB</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a 
                  className="hover:text-textGreen hover:scale-105 ease-in-out duration-300"
                  href="https://github.com/manuel-barreiro/intime"
                  target= "_blank"
                >
                  <TbBrandGithub />
                </a>
                <a 
                  className="hover:text-textGreen hover:scale-105 ease-in-out duration-300"
                  href="https://shortcut.com.ar/"
                  target= "_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* DevaluApp */}
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
              href="https://devaluapp.ar/" target="_blank"
            >
              <div className="hover:scale-105 ease-in-out duration-300">
                <Image 
                  className="w-full h-full object-contain"
                  src={devaluApp}
                  alt="Box Moment"
                  priority={true}
                  placeholder="blur"
                />
              </div>
            </a>

            <div className="w-full xl:w-1/2 flex flex-col gap-4 lgl:justify-between items-end text-right z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Application
              </p>
              <h3 className="text-3xl lg:text-4xl font-titleFont font-bold">DevaluApp</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md lg:-mr-16">
              Inflation in Argentina is worsening by the day. DevaluApp helps you calculate the devaluation of your salary in relation to the value of the US dollar. It does so using the Bluelytics API. Developed in React using Next.js, with styling done through Tailwind CSS.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>TypeScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a 
                  className="hover:text-textGreen hover:scale-105 ease-in-out duration-300"
                  href="https://github.com/manuel-barreiro/devaluapp"
                  target= "_blank"
                >
                  <TbBrandGithub />
                </a>
                <a 
                  className="hover:text-textGreen hover:scale-105 ease-in-out duration-300"
                  href="https://devaluapp.ar/"
                  target= "_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

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
              Design and development (Figma to code) of a corporate landing page and product catalog. Developed using Next.js 13 (app router), optimized by leveraging SSR (Server-Side Rendering).
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
              Design and development of a landing page for a Christmas gift box company. Developed in React using Vite, with Tailwind CSS for styling, and deployed on the company&apos;s hosting.
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
              An application enabling users to create and save reminders. Developed in TypeScript with Next.js, leveraging server actions, Tailwind CSS, and Prisma with PostgreSQL.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>TypeScript</li>
                <li>Next.js</li>
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

        {/* Coccions */}
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
              <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://coccions.com.ar/" target="_blank"
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
              </a>
            </div>

            <div className="w-full xl:w-1/2 flex flex-col gap-4 lgl:justify-between items-end text-right z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                E-commerce Catalog
              </p>
              <h3 className="text-3xl lg:text-4xl font-titleFont font-bold">Coccions</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md lg:-mr-16">
                Design and development of a landing page and web product catalog for a pastry company.
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
              A full-stack application developed using an MVC structure. Built with Express.js, Passport.js for authentication, and MongoDB. Allows users to publish, like, and comment on images.
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