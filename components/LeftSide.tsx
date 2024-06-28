"use client";

import { TbBrandGithub } from "react-icons/tb";
import { SlSocialTwitter, SlSocialLinkedin } from "react-icons/sl";
import { AiOutlineWhatsApp } from "react-icons/ai";

import { motion } from "framer-motion";
import { GrMail } from "react-icons/gr";

const LeftSide = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight"
    >
      <div className="flex flex-col gap-6">
        <a href="https://github.com/manuel-barreiro" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/manuel-barreiro/" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialLinkedin />
          </span>
        </a>
        <a href="mailto:ing.mbarreiro@gmail.com?Subject=Consulta">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <GrMail />
          </span>
        </a>
        <a href="https://wa.me/+5491166726968" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <AiOutlineWhatsApp />
          </span>
        </a>
      </div>

      <div className="w-[2px] h-32 bg-textDark"></div>
    </motion.div>
  );
};

export default LeftSide;
