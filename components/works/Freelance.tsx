'use client';

import { motion } from 'framer-motion';
import { TiArrowForward } from 'react-icons/ti';

const Freelance = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition= {{ delay: 0.1 }} 
        className='w-full'
    >
        <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
            Full Stack Developer
            <span className='hidden md:inline text-textGreen tracking-wide'>| Freelance</span>
        </h3>
        <h3 className='md:hidden flex gap-1 font-medium text-xl font-titleFont'>
            <span className='text-textGreen tracking-wide'>| Freelance</span>
        </h3>
        <p className='text-sm mt-1 font-medium text-textDark'>
            Octubre 2022 - Presente
        </p>
        <ul className='text-sm mt-3 font-medium text-textDark'>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                    <TiArrowForward />
                </span>
                Gestión del desarrollo completo de sitios web o aplicaciones para clientes.
            </li>
            <li className='text-base flex gap-2 text-textDark mt-2'>
                <span className='text-textGreen mt-1'>
                    <TiArrowForward />
                </span>
                Comunicación con los clientes para comprender los requisitos del proyecto y entregar soluciones personalizadas.
            </li>
            <li className='text-base flex gap-2 text-textDark mt-2'>
                <span className='text-textGreen mt-1'>
                    <TiArrowForward />
                </span>
                Gestión de bases de datos y garantizando la seguridad e integridad de los datos.
            </li>
        </ul>
    </motion.div>
  )
}

export default Freelance



