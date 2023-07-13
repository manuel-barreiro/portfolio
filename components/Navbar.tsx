'use client';

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

function Navbar() {
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
                    <Link href="#home" className='font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                        <motion.li 
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0,  opacity: 1 }}
                            transition= {{ duration: 0.1 }}
                        >
                            Home
                        </motion.li>
                    </Link>
                    <Link href="#about" className='font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                        <motion.li 
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0,  opacity: 1 }}
                            transition={{ duration: 0.1, delay: 0.1 }}
                        >
                            About
                        </motion.li>
                    </Link>
                    <Link href="#experience" className='font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                        <motion.li 
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0,  opacity: 1 }}
                            transition={{ duration: 0.1, delay: 0.2 }}
                        >
                            Experience
                        </motion.li>
                    </Link>
                    <Link href="#projects" className='font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                        <motion.li 
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0,  opacity: 1 }}
                            transition={{ duration: 0.1, delay: 0.3 }}
                        >
                            Projects
                        </motion.li>
                    </Link>
                    <Link href="#contact" className='font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                        <motion.li 
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0,  opacity: 1 }}
                            transition={{ duration: 0.1, delay: 0.4 }}
                        >
                            Contact
                        </motion.li>
                    </Link>
                </ul>
                <a href="/assets/resumeManuelBarreiro.pdf" target='_blank'>
                    <motion.button className='px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'>
                        Resume
                    </motion.button>
                </a>
            </div>
            {/* Small Icon section */}

            <div className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group'>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
            </div>
        </div>
    </div>
  )
}

export default Navbar