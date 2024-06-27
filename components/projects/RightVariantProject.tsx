"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import { Project } from "@/constants/projects";

function RightVariantProject({
  category,
  name,
  description,
  image,
  tools,
  href,
  github,
}: Project) {
  const rightVariant = {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={rightVariant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="w-full flex flex-col items-center justify-center gap-28 mt-10"
    >
      <div className="flex flex-col xl:flex-row-reverse gap-4">
        <a
          className="w-full xl:w-1/2 h-auto relative group"
          href={href}
          target="_blank"
        >
          <div className="hover:scale-105 ease-in-out duration-300">
            <Image
              className="w-full h-full object-contain"
              src={image}
              alt={name}
              priority={true}
              placeholder="blur"
            />
          </div>
        </a>

        <div className="w-full xl:w-1/2 flex flex-col gap-4 lgl:justify-between items-end text-right z-10">
          <p className="font-titleFont text-textGreen text-sm tracking-wide">
            {category}
          </p>
          <h3 className="text-3xl lg:text-4xl font-titleFont font-bold">
            {name}
          </h3>
          <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md lg:-mr-16">
            {description}
          </p>
          <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
            {tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
          <div className="text-2xl flex gap-4">
            {github && (
              <a
                className="hover:text-textGreen hover:scale-105 ease-in-out duration-300"
                href={github}
                target="_blank"
              >
                <TbBrandGithub />
              </a>
            )}
            <a
              className="hover:text-textGreen hover:scale-105 ease-in-out duration-300"
              href={href}
              target="_blank"
            >
              <RxOpenInNewWindow />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default RightVariantProject;
