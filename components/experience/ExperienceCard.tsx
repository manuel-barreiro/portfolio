"use client";

import { ExperienceType } from "@/constants/experience";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";
import { GlareCard } from "../ui/GlareCard";
import Image from "next/image";

function ExperienceCard({
  id,
  date,
  workPlace,
  position,
  image,
  mainTasks,
}: ExperienceType) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full flex flex-col-reverse sm:flex-row items-center gap-10"
    >
      <GlareCard className="flex flex-col items-center justify-center px-5 w-[200px]">
        <Image src={image} alt={workPlace} priority />
      </GlareCard>
      <div className="w-full">
        <h3 className="flex font-medium text-xl font-titleFont">{position}</h3>
        <p className="text-sm mt-1 font-medium text-textDark">{date}</p>
        <ul className="text-sm mt-3 font-medium text-textDark text-left">
          {mainTasks.map((task, index) => (
            <li key={index} className="text-base flex gap-2 text-textDark mt-1">
              <span className="text-textGreen mt-1">
                <TiArrowForward />
              </span>
              {task}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default ExperienceCard;
