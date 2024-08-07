"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Banner = () => {
  return (
    <section
      id="home"
      className="scroll-m-[100vh] min-h-[100svh] flex justify-center items-start mt-32"
    >
      <div className="mx-auto flex flex-col items-start gap-4 lg:gap-8 h-auto ">
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-base sm:text-lg font-titleFont tracking-wide text-textGreen"
        >
          Hola, mi nombre es
        </motion.h3>

        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl  lg:text-6xl font-titleFont font-semibold flex flex-col"
        >
          Manuel Barreiro{" "}
          <span className="text-textDark mt-2 lg:mt-4 text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
            Ingeniero | Developer
          </span>
        </motion.h1>
        <Link href={"/#about"}>
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
              otherClasses="text-xs sm:text-base"
            />
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
