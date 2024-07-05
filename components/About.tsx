"use client";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import { profile } from "@/public";
import { GlareCard } from "./ui/GlareCard";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { tools } from "@/constants/projects";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto lg:py-32 flex flex-col gap-8 scroll-mt-32 lg:scroll-mt-0 px-10 lg:px-24"
    >
      <SectionTitle title="Sobre mí " />
      <div className="flex flex-col-reverse lg:flex-row gap-16">
        <div className="w-full lg:w-2/3 text-base text-textDark font-medium flex flex-col gap-4 text-justify max-w-containerxs">
          <p>
            Mi nombre es Manuel Barreiro, soy ingeniero y desarrollador
            full-stack.
          </p>
          <p>
            Siempre me ha gustado programar y sumergirme en proyectos
            desafiantes que me permitan ampliar mis habilidades. Estoy
            constantemente en búsqueda de nuevos desafíos y oportunidades para
            crecer como{" "}
            <span className="text-textGreen">ingeniero y desarrollador.</span>
          </p>
          <p>Gracias por visitar mi portfolio!</p>
          <p>Algunas de las herramientas que manejo:</p>
          {/* <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Python
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MySQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Figma
            </li>
          </ul> */}
          <div className="mt-5 grid grid-cols-5 gap-4 w-full">
            <AnimatedTooltip items={tools} />
          </div>
        </div>
        <div className="lg:w-1/3 mx-auto">
          <GlareCard className="flex flex-col items-center justify-center rounded-full">
            <Image
              className="h-full w-full absolute inset-0 object-cover"
              alt="profile photo"
              src={profile}
              priority={true}
            />
          </GlareCard>
          {/* <Image
            width={200}
            height={200}
            src={profile}
            className="rounded-full"
            alt="profile photo"
            priority={true}
          /> */}
        </div>
      </div>
    </section>
  );
};

export default About;
