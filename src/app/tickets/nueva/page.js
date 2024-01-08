import React from "react";
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import Link from "next/link";

export default function Tickets_Nuevo() {
   return (
      <>
         <div className="pl-16 pr-16 py-7 flex flex-col justify-start items-center gap-5 min-h-[83vh]">
            <h1 className="text-2xl font-bold text-center">NUEVO REPORTE</h1>
            <Link className="hover:scale-125 transition-transform duration-300 ease-in-out" href="/tickets">
               <MdOutlineArrowCircleLeft size={40} />
            </Link>
            <div className="w-full max-w-md">
               <form className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                        Nombre
                     </label>
                     <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nombre" type="text" placeholder="Nombre" />
                  </div>
                  <div className="mb-4">
                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="asunto">
                        Asunto
                     </label>
                     <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="asunto" type="text" placeholder="Asunto" />
                  </div>
                  <div className="mb-4">
                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">
                        Descripción
                     </label>
                     <textarea className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="descripcion" placeholder="Describe el problema"></textarea>
                  </div>
                  <div className="flex items-center justify-between">
                     <button className="bg-mainColor hover:bg-mainColor2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Enviar
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </>
   );
};