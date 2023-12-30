'use client';

/*-------------------------------------------------------------------
|  🐼 React FC Form
|
|  🦝 Todo: CREATE AN AWESOME AND MAINTAINABLE FORM COMPONENT 
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import { Input } from './Input'
import { FormProvider, useForm } from 'react-hook-form'
import {
  name_validation,
  apellido_validation,
  consulta_validation,
  email_validation,
  empresa_validation,
  cell_validation,
  cp_validation
} from '../utils/inputValidations'
import { useState, useRef } from 'react'
import { GrMail } from 'react-icons/gr'
import { BsFillPatchCheckFill, BsFillPatchExclamationFill } from 'react-icons/bs'
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialTwitter, SlSocialLinkedin } from "react-icons/sl";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  
  const methods = useForm()
  const [success, setSuccess] = useState(false)
  const [failed, setFailed] = useState(false)

  const form = useRef();

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
    emailjs.sendForm('service_5c1a51u', 'template_pdgdg8b', form.current, 'Xl00r8D3G-NwN09jC')
        .then((result) => {
            console.log(result.text);
            setSuccess(true)
            methods.reset()
            // Para que se vaya el mensaje
            // setTimeout(() => {
            //     setSuccess(false);
            //   }, "20000");
        }, (error) => {
            console.log(error.text);
            setFailed(true)
            methods.reset()
            // Para que se vaya el mensaje
            // setTimeout(() => {
            //     setFailed(false);
            //   }, "20000");
        });
  })

  return (
    <section id="contact" className='container px-8 md:px-32 mx-auto font-primary h-auto pb-20 w-full'>


        <div className="flex flex-col items-center gap-4 text-center w-full mb-10">
                    <h3 className="sm:text-4xl text-3xl font-bold mb-2 font-titleFont">Contact</h3>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-sm text-gray-300">Get in touch through any of my social media channels or fill out the form below to reach me.</p>
                    <div className="flex gap-6 xl:hidden ">
                                    <a href="mailto:ing.mbarreiro@gmail.com?Subject=Consulta">
                                        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                            <GrMail />
                                        </span>
                                    </a>
                                    <a href="https://wa.me/+5491166726968" target="_blank">
                                        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                            <AiOutlineWhatsApp />
                                        </span>
                                    </a>
                                    <a href="sms:+61481270364?&body=Hi%2520there%252C%2520I%2527d%2520like%2520to%2520place%2520an%2520order%2520for..." target="_blank">
                                        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                            <BiMessageRounded />
                                        </span>
                                    </a>
                                    <a href="https://www.linkedin.com/in/manuel-barreiro/" target="_blank">
                                        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                            <SlSocialLinkedin />
                                        </span>
                                    </a>
                                    {/* <a href="https://twitter.com/ing_Barreiro" target="_blank">
                                        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                            <SlSocialTwitter />
                                        </span>
                                    </a> */}
                                    <a href="https://github.com/manuel-barreiro" target="_blank">
                                        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                            <TbBrandGithub />
                                        </span>
                                    </a>
                                </div>
        </div>

            <FormProvider {...methods}>
                <form
                    onSubmit={e => e.preventDefault()}
                    ref={form}
                    noValidate
                    autoComplete="off"
                    className="container"
                >
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className='flex flex-wrap -m-2'>
                            <Input {...name_validation} className="w-full" />
                            <Input {...email_validation} />
                            <Input {...cell_validation} />
                            <Input {...consulta_validation} className="p-2 w-full" />
                        </div>
                        <div className="mt-5">
                                {success && (
                                    <p className="flex items-center justify-center gap-1 mb-5 font-semibold text-sm md:text-lg text-textGreen">
                                    <BsFillPatchCheckFill size={25} /> Tu consulta fue enviada correctamente
                                    </p>
                                )}
                                {failed && (
                                    <p className="flex items-center justify-center gap-1 mb-5 font-semibold text-md md:text-lg text-red-500">
                                    <BsFillPatchExclamationFill size={25} /> Error al enviar el formulario
                                    </p>
                                )}
                                <button
                                    onClick={onSubmit}
                                    className="flex justify-center items-center gap-2 px-4 py-2 rounded-md text-textGreen text-md border border-textGreen hover:bg-textGreen/10 duration-300 w-full cursor-pointer"
                                >
                                    <GrMail size={20} />
                                    <p className='mt-1'>Send</p> 
                                </button>
                            </div>
                    </div>
                    
                </form>
            </FormProvider>
    </section>
  )
}