"use client";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import { profile } from "@/public";
import { GlareCard } from "./ui/GlareCard";
import { BackgroundGradient } from "./ui/background-gradient";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { tools } from "@/constants/tools";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto lg:py-32 flex flex-col gap-8 scroll-mt-32 lg:scroll-mt-0 px-5 sm:px-10 lg:px-24"
    >
      <SectionTitle title="Sobre mí " />
      <div className="flex flex-col-reverse md:flex-row gap-16">
        <div className="w-full md:w-2/3 text-base text-textDark font-medium flex flex-col gap-4 text-justify max-w-containerxs">
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
          <div className="mt-5 grid grid-cols-5 gap-4 w-full">
            <AnimatedTooltip items={tools} />
          </div>
        </div>
        <div className="w-[200px] md:w-1/3 mx-auto">
          <BackgroundGradient className="rounded-full w-auto ">
            <Image
              className="h-full w-full object-cover rounded-full"
              alt="profile photo"
              src={profile}
              priority={true}
            />
          </BackgroundGradient>
          {/* <GlareCard className="flex flex-col items-center justify-center w-2">
            <Image
              className="h-full w-full absolute inset-0 object-cover"
              alt="profile photo"
              src={profile}
              priority={true}
            />
          </GlareCard> */}
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
