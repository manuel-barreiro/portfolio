'use client';

import { motion } from 'framer-motion';
import { TiArrowForward } from 'react-icons/ti';

const Weplan = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition= {{ delay: 0.1 }} 
        className='w-full'
    >
        <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
            Data Engineer
            <span className='hidden md:inline text-textGreen tracking-wide'>| We Plan LATAM</span>
        </h3>
        <h3 className='md:hidden flex gap-1 font-medium text-xl font-titleFont'>
            <span className='text-textGreen tracking-wide'>| We Plan LATAM</span>
        </h3>
        <p className='text-sm mt-1 font-medium text-textDark'>
            Mayo 2022 - Deciembre 2023
        </p>
        <ul className='text-sm mt-3 font-medium text-textDark'>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                    <TiArrowForward />
                </span>
                Asistencia en el desarrollo e implementación de aplicaciones
            </li>
            <li className='text-base flex gap-2 text-textDark mt-1'>
                <span className='text-textGreen mt-1'>
                    <TiArrowForward />
                </span>
                Revisiones de código y procesos de aseguramiento de calidad
            </li>
            <li className='text-base flex gap-2 text-textDark mt-1'>
                <span className='text-textGreen mt-1'>
                    <TiArrowForward />
                </span>
                Contribuir al diseño y documentación de sistemas de software
            </li>
        </ul>
    </motion.div>
  )
}

export default Weplan



