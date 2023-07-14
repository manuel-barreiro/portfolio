'use client';

import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import Freelance from './works/Freelance'
import Weplan from './works/Weplan';
import IEA from './works/IEA';
import Ferrero from './works/Ferrero';

const Experience = () => {

  const [workFreelance, setWorkFreelance] = useState(true)
  const [workWePlan, setWorkWePlan] = useState(false)
  const [workFerrero, setWorkFerrero] = useState(false)
  const [workIEA, setWorkIEA] = useState(false)

  function handleFreelance() {
    setWorkFreelance(true)
    setWorkWePlan(false)
    setWorkFerrero(false)
    setWorkIEA(false)
  }

  
  function handleWePlan() {
    setWorkFreelance(false)
    setWorkWePlan(true)
    setWorkFerrero(false)
    setWorkIEA(false)
  }

  function handleFerrero() {
    setWorkFreelance(false)
    setWorkWePlan(false)
    setWorkFerrero(true)
    setWorkIEA(false)
  }

  function handleIEA() {
    setWorkFreelance(false)
    setWorkWePlan(false)
    setWorkFerrero(false)
    setWorkIEA(true)
  }
  

  return (
    <section
      id='experience'
      className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'
    >
      <SectionTitle title='Experiencia' />
      <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
        <ul className='md:w-32 flex flex-col'>
          <li 
            onClick={handleFreelance}
            className={`${
              workFreelance
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            >
            Freelance
          </li>
          <li 
            onClick={handleWePlan} 
            className={`${
              workWePlan
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            >
            We Plan
          </li>
          <li 
            onClick={handleIEA} 
            className={`${
              workIEA
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            IEA
          </li>
          <li 
            onClick={handleFerrero}
            className={`${
              workFerrero
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Ferrero
          </li>
        </ul>
        {workFreelance && <Freelance />}
        {workWePlan && <Weplan />}
        {workIEA && <IEA />}
        {workFerrero && <Ferrero />}
        
      </div>
    </section>
  )
}

export default Experience