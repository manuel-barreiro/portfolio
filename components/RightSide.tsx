'use client';

import { motion } from 'framer-motion'

const RightSide = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition= {{ delay: 1.5 }}
      className='w-full h-full flex flex-col items-center justify-end gap-10 text-textLight'
    >
        <a href="mailto:ing.mbarreiro@gmail.com">
            <p className='text-sm rotate-90 w-72 tracking-wide text-textLight'>
                ing.mbarreiro@gmail.com
            </p>
        </a>
        <span className='w-[2px] h-32 bg-textDark inline-flex'></span>
    </motion.div>
  )
}

export default RightSide