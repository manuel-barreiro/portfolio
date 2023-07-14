'use client';

import { motion } from 'framer-motion';
import { TiArrowForward } from 'react-icons/ti';

const IEA = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition= {{ delay: 0.1 }} 
        className='w-full'
    >
        <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
            Data Analyst
            <span className='hidden md:inline text-textGreen tracking-wide'>| Instituto de Energía Austral</span>
        </h3>
        <h3 className='md:hidden flex gap-1 font-medium text-xl font-titleFont'>
            <span className='text-textGreen tracking-wide'>| Instituto de Energía Austral</span>
        </h3>
        <p className='text-sm mt-1 font-medium text-textDark'>
            Octubre 2021 - Actualidad
        </p>
        <ul className='text-sm mt-3 font-medium text-textDark'>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                    <TiArrowForward />
                </span>
                Aplicación de modelos de machine learning para predecir oferta/demanda eléctrica
            </li>
            <li className='text-base flex gap-2 text-textDark mt-1'>
                <span className='text-textGreen mt-1'>
                    <TiArrowForward />
                </span>
                Generación mensual de reportes
            </li>
        </ul>
    </motion.div>
  )
}

export default IEA



