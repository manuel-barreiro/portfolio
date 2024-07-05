"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import { Project } from "@/constants/projects";
import { cn } from "@/utils/cn";
import { AnimatedTooltip } from "../ui/animated-tooltip";

function ProjectCard({
  category,
  name,
  description,
  image,
  tools,
  href,
  github,
  index,
}: Project) {
  const leftVariant = {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  const rightVariant = {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  let animationVariant = {};

  if (index != undefined && index % 2 === 0) {
    animationVariant = rightVariant;
  } else {
    animationVariant = leftVariant;
  }

  return (
    <motion.div
      variants={animationVariant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="w-full flex flex-col items-center justify-center gap-28 mt-10"
    >
      <div
        className={cn(
          "flex flex-col gap-4",
          index != undefined && index % 2 === 0
            ? "lg:flex-row-reverse"
            : "lg:flex-row"
        )}
      >
        <a
          className="w-full lg:w-1/2 h-auto relative group"
          href={href}
          target="_blank"
        >
          <div className="hover:scale-105 ease-in-out duration-300">
            <Image
              className="w-full h-full object-contain rounded-xl"
              src={image}
              alt={name}
              priority={true}
              placeholder="blur"
            />
          </div>
        </a>

        <div className="w-full lg:w-1/2 flex flex-col gap-4 lgl:justify-between items-end z-10">
          <p className="font-titleFont text-textGreen text-xs sm:text-sm tracking-wide">
            {category}
          </p>
          <h3 className="text-3xl lg:text-4xl font-titleFont font-bold">
            {name}
          </h3>
          <p
            className={cn(
              "bg-[#112240] backdrop-blur-xl text-sm md:text-base p-3 md:p-6 rounded-md text-justify",
              index != undefined && index % 2 === 0 ? "lg:-mr-16" : "lg:-ml-16"
            )}
          >
            {description}
          </p>
          <div className="flex flex-row items-center justify-start md:justify-end  w-full">
            <AnimatedTooltip items={tools} />
          </div>
          <div className="text-2xl flex gap-4 self-start md:self-auto">
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

export default ProjectCard;
