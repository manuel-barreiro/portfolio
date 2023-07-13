'use client';

import { motion } from 'framer-motion'

const Banner = () => {
  return (
    <section id='home' className='max-w-contentContainer mx-auto py-10 mdl:py-8 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'>
        <motion.h3
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition= {{ duration: 0.5, delay: 0.6 }} 
            className='text-lg font-titleFont tracking-wide text-textGreen'
        >
            Hola, mi nombre es
        </motion.h3>

        <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition= {{ duration: 0.5, delay: 0.7 }} 
            className='text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col'
        >
            Manuel Barreiro.{' '} 
            <span className='text-textDark mt-2 lgl:mt-4'>
                Ingeniero | Developer
            </span>
        </motion.h1>

        <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition= {{ duration: 0.5, delay: 0.8 }} 
            className='text-base md:max-w-[650px] text-textDark font-medium'
        >
            Apasionado por la tecnología. Mi formación en ingeniería me brindó habilidades y experiencia en el campo de Business Intelligence y Data Science, y mi pasión por programar me llevó a desarrollar aplicaciones fullstack y páginas web responsivas, utilizando distintos frameworks. {' '}
        </motion.p>

        <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition= {{ duration: 0.5, delay: 0.9 }} 
            className='w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300'
        >
            Mis proyectos
        </motion.button>

    </section>
  )
}

export default Banner