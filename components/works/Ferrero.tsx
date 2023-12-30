'use client';

import { motion } from 'framer-motion';
import { TiArrowForward } from 'react-icons/ti';

const Ferrero = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition= {{ delay: 0.1 }} 
        className='w-full'
    >
        <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
            Jr. Sofware Engineer
            <span className='hidden md:inline text-textGreen tracking-wide'>| Ferrero</span>
        </h3>
        <h3 className='md:hidden flex gap-1 font-medium text-xl font-titleFont'>
            <span className='text-textGreen tracking-wide'>| Ferrero</span>
        </h3>
        <p className='text-sm mt-1 font-medium text-textDark'>
            March 2021 - May 2022
        </p>
        <ul className='text-sm mt-3 font-medium text-textDark'>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                    <TiArrowForward />
                </span>
                Contributed to designing and implementing IT solutions.
            </li>
            <li className='text-base flex gap-2 text-textDark mt-1'>
                <span className='text-textGreen mt-1'>
                    <TiArrowForward />
                </span>
                Assisted in debugging and resolving technical issues.
            </li>
            <li className='text-base flex gap-2 text-textDark mt-1'>
                <span className='text-textGreen mt-1'>
                    <TiArrowForward />
                </span>
                Maintained adherence to coding standards and IT best practices under guidance.
            </li>
        </ul>
    </motion.div>
  )
}

export default Ferrero



