import React from 'react'

const Form = () => {
  return (
        <section id='contact' className="relative">
            <div className="container px-5 pt-24 pb-52 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 font-titleFont">Contactame :)</h1>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-1/2">
                    <div className="relative">
                        <label className="leading-7 text-sm text-gray-400">Nombre</label>
                        <input type="text" id="name" name="name" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    </div>
                    <div className="p-2 w-1/2">
                    <div className="relative">
                        <label className="leading-7 text-sm text-gray-400">E-mail</label>
                        <input type="email" id="email" name="email" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    </div>
                    <div className="p-2 w-full">
                    <div className="relative">
                        <label className="leading-7 text-sm text-gray-400">Mensaje</label>
                        <textarea id="message" name="message" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    </div>
                    <div className="p-2 w-full">
                    <button className='w-full h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300'>Enviar</button>
                    </div>
                </div>
                </div>
            </div>
    </section>
  )
}

export default Form