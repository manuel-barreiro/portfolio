"use client";

import { useState } from "react";
import SectionTitle from "../SectionTitle";
import { ExperienceType, experience } from "@/constants/experience";
import ExperienceCard from "./ExperienceCard";
import { cn } from "@/utils/cn";

const Experience = () => {
  const [exp, setExp] = useState<ExperienceType>(experience[0]);

  return (
    <section
      id="experience"
      className="scroll-m-20 lg:scroll-m-28 max-w-containerSmall mx-auto lg:py-32 px-10 lg:px-24 pt-36"
    >
      <SectionTitle title="Experiencia" />
      <div className="w-full mt-10 flex flex-col lg:flex-row gap-16">
        <ul className="flex flex-col">
          {experience.map((workExp, index) => (
            <li
              key={index}
              onClick={() => setExp(workExp)}
              className={cn(
                "border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium",
                index === exp.id
                  ? "border-l-textGreen text-textGreen bg-[#112240]"
                  : "border-l-hoverColor text-textDark"
              )}
            >
              {workExp.workPlace}
            </li>
          ))}
        </ul>

        <ExperienceCard {...exp} />
      </div>
    </section>
  );
};

export default Experience;
