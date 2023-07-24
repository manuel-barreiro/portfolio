'use client';

import { useState, useRef } from 'react' 
import Link from 'next/link';
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MdOutlineClose } from 'react-icons/md'

import { TbBrandGithub } from "react-icons/tb";
import { SlSocialTwitter, SlSocialLinkedin } from "react-icons/sl";
import { AiOutlineWhatsApp } from "react-icons/ai";

function Navbar() {

    const ref = useRef<string | any>("")

    const [showMenu, setShowMenu] = useState(false);

    function handleShowMenu() {
    setShowMenu((prevState) => !prevState)
    console.log(showMenu)
    }

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
        behavior: "smooth",
    });

    // Update the class name of the clicked link

    const links = document.querySelectorAll(".nav-link")
    links.forEach((link) => {
        link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    };

    return (
    <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4'>
        <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition= {{ duration: 1 }}
                className='font-bold uppercase'
            >
                Manuel Barreiro.
            </motion.div>
            <div className='hidden mdl:inline-flex items-center gap-7'>
                <ul className='flex text-[13px] gap-7'>
                    <Link
                        href="#home"
                        onClick={handleScroll} 
                        className='font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                    >
                        <motion.li 
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0,  opacity: 1 }}
                            transition= {{ duration: 0.1 }}
                        >
                            Inicio
                        </motion.li>
                    </Link>
                    <Link 
                        href="#about" 
                        onClick={handleScroll} 
                        className='font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                    >
                        <motion.li 
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0,  opacity: 1 }}
                            transition={{ duration: 0.1, delay: 0.1 }}
                        >
                            Sobre mí
                        </motion.li>
                    </Link>
                    <Link
                        href="#experience" 
                        onClick={handleScroll} 
                        className='font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                    >
                        <motion.li 
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0,  opacity: 1 }}
                            transition={{ duration: 0.1, delay: 0.2 }}
                        >
                            Experiencia
                        </motion.li>
                    </Link>
                    <Link
                        href="#projects"
                        onClick={handleScroll} 
                        className='font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' 
                    >
                        <motion.li 
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0,  opacity: 1 }}
                            transition={{ duration: 0.1, delay: 0.3 }}
                        >
                            Proyectos
                        </motion.li>
                    </Link>
                    <Link 
                        href="#contact" 
                        onClick={handleScroll} 
                        className='font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' 
                    >
                        <motion.li 
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0,  opacity: 1 }}
                            transition={{ duration: 0.1, delay: 0.4 }}
                        >
                            Contacto
                        </motion.li>
                    </Link>
                </ul>
                <a href="/assets/resumeManuelBarreiro.pdf" target='_blank'>
                    <motion.button
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, ease: "easeIn" }}
                        className='px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'
                    >
                        CV
                    </motion.button>
                </a>
            </div>
            {/* Small Icon section */}

            <div onClick={handleShowMenu} className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group'>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
            </div>
                {showMenu && (
                    <div 
                        ref={(node) => (ref.current = node)}
                        className='absolute mdl:hidden top-0 right-0 w-full h-screen bg-black/50 flex flex-col col items-end'
                    >
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0,  opacity: 1 }}
                            transition={{ duration: 0.1 }}
                            className='w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative'
                        >
                            <MdOutlineClose onClick={handleShowMenu} className='text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4'/>

                            <div className='flex flex-col justify-center text-base gap-7'>
                                <ul className='flex flex-col text-base gap-7'>
                                    <Link
                                        href="#home"
                                        onClick={handleScroll} 
                                        className='font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                                    >
                                        <motion.li 
                                            initial={{ x: 20, opacity:0 }}
                                            animate={{ x: 0,  opacity: 1 }}
                                            transition= {{
                                                duration: 0.2,
                                                delay: 0.1,
                                                ease: "easeIn", 
                                            }}
                                        >
                                            Inicio
                                        </motion.li>
                                    </Link>
                                    <Link 
                                        href="#about" 
                                        onClick={handleScroll} 
                                        className='font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                                    >
                                        <motion.li 
                                            initial={{ x: 20, opacity:0 }}
                                            animate={{ x: 0,  opacity: 1 }}
                                            transition= {{
                                                duration: 0.2,
                                                delay: 0.2,
                                                ease: "easeIn", 
                                            }}
                                        >
                                            Sobre mí
                                        </motion.li>
                                    </Link>
                                    <Link
                                        href="#experience" 
                                        onClick={handleScroll} 
                                        className='font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                                    >
                                        <motion.li 
                                            initial={{ x: 20, opacity:0 }}
                                            animate={{ x: 0,  opacity: 1 }}
                                            transition= {{
                                                duration: 0.2,
                                                delay: 0.3,
                                                ease: "easeIn", 
                                            }}
                                        >
                                            Experiencia
                                        </motion.li>
                                    </Link>
                                    <Link
                                        href="#projects"
                                        onClick={handleScroll} 
                                        className='font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' 
                                    >
                                        <motion.li 
                                            initial={{ x: 20, opacity:0 }}
                                            animate={{ x: 0,  opacity: 1 }}
                                            transition= {{
                                                duration: 0.2,
                                                delay: 0.4,
                                                ease: "easeIn", 
                                            }}
                                        >
                                            Proyectos
                                        </motion.li>
                                    </Link>
                                    <Link 
                                        href="#contact" 
                                        onClick={handleScroll} 
                                        className='font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' 
                                    >
                                        <motion.li 
                                            initial={{ x: 20, opacity:0 }}
                                            animate={{ x: 0,  opacity: 1 }}
                                            transition= {{
                                                duration: 0.2,
                                                delay: 0.5,
                                                ease: "easeIn", 
                                            }}
                                        >
                                            Contacto
                                        </motion.li>
                                    </Link>
                                </ul>
                                <a href="/assets/resumeManuelBarreiro.pdf" target='_blank'>
                                    <motion.button
                                        initial={{ opacity: 0 }} 
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.6, ease: "easeIn" }}
                                        className='px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300 w-full'
                                    >
                                        CV
                                    </motion.button>
                                </a>
                                <div className="flex gap-6">
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
                                    <a href="https://twitter.com/ing_Barreiro" target="_blank">
                                        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                            <SlSocialTwitter />
                                        </span>
                                    </a>
                                    <a href="https://wa.me/+5491166726968" target="_blank">
                                        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                            <AiOutlineWhatsApp />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
  )
}

export default Navbar