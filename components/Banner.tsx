'use client';

import { motion } from 'framer-motion'
import Link from 'next/link';

const Banner = () => {
  return (
    <section id='home' className='max-w-containerSmall h-auto mx-auto py-10 mdl:py-8 flex flex-col gap-6 lgl:gap-8 mdl:px-10 xl:px-4'>
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
            className='text-3xl lgl:text-6xl font-titleFont font-semibold flex flex-col'
        >
            Manuel Barreiro.{' '} 
            <span className='text-textDark mt-2 lgl:mt-4 text-2xl md:text-3xl lgl:text-6xl'>
                Ingeniero | Developer
            </span>
        </motion.h1>

        <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition= {{ duration: 0.5, delay: 0.8 }} 
            className='text-base md:max-w-[650px] text-textDark font-medium'
        >
            Apasionado por la tecnología y la programación. Soy ingeniero experimentado en desarrollo full-stack. Construyo sitios web y aplicaciones usando los frameworks más modernos, impulsado por mi pasión por la programación. {' '}
        </motion.p>
        
        <Link href="#about">
        <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition= {{ duration: 0.5, delay: 0.9 }} 
            className='w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-textGreen/10 duration-300'
        >
            Sobre mí
        </motion.button>
        </Link>

    </section>
  )
}

export default Banner