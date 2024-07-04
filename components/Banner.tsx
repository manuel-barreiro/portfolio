"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeroGlobe } from "./Globe/HeroGlobe";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Banner = () => {
  return (
    <section
      id="home"
      className="scroll-m-28 lg:scroll-m-[20vh] min-h-[100svh]"
    >
      <div className="max-w-containerSmall mx-auto pt-10 mdl:pt-8 flex flex-col items-start gap-4 lgl:gap-8 mdl:px-10 xl:px-4 h-auto">
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg font-titleFont tracking-wide text-textGreen"
        >
          Hola, mi nombre es
        </motion.h3>

        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-3xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
        >
          Manuel Barreiro.{" "}
          <span className="text-textDark mt-2 lgl:mt-4 text-2xl md:text-3xl lgl:text-6xl">
            Ingeniero | Developer
          </span>
        </motion.h1>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-5"
        >
          <MagicButton
            title="Sobre mí"
            icon={<FaLocationArrow />}
            position="right"
          />
        </motion.div>
      </div>

      {/* <HeroGlobe /> */}
    </section>
  );
};

export default Banner;
