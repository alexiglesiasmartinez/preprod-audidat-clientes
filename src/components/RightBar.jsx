"use client";
import React, { useState } from "react";
import {
   MdOutlineTaskAlt,
   MdOutlineDownloadForOffline,
   MdPhone,
   MdEmail,
   MdArrowLeft,
   MdArrowRight,
} from "react-icons/md";

const RightBar = () => {
   const [visible, setVisible] = useState(true);
   const toggleVisibility = () => {
      setVisible(!visible);
   };

   return (
      <>
         {visible ? (
            <aside
               className={`sticky top-0 right-0 w-[17%] h-screen bg-secondaryGradient text-white p-5 z-10 shadow-2xl transition-opacity ${
                  visible ? "opacity-100" : "opacity-0"
               }`}
            >
               <div className="flex items-start justify-center flex-col gap-2">
                  <span className="text-sm">Actividad reciente</span>
                  <div className="font-light flex items-start justify-start flex-col gap-5 bg-white w-full py-5 px-3 hover:shadow-black transition-colors duration-300 rounded-xl">
                     <div className="flex items-center gap-2">
                        <div>
                           <MdOutlineTaskAlt size={20} className="text-black" />
                        </div>
                        <div>
                           <p className="text-sm font-medium text-black">
                              Tarea completada
                           </p>
                           <p className="text-xs text-gray-600">
                              Hace 2 segundos
                           </p>
                        </div>
                     </div>
                     <div className="flex items-center gap-2">
                        <div>
                           <MdOutlineTaskAlt size={20} className="text-black" />
                        </div>
                        <div>
                           <p className="text-sm font-medium text-black">
                              Tarea completada
                           </p>
                           <p className="text-xs text-gray-600">
                              Hace 1 minuto
                           </p>
                        </div>
                     </div>
                     <div className="flex items-center gap-2">
                        <div>
                           <MdOutlineTaskAlt size={20} className="text-black" />
                        </div>
                        <div>
                           <p className="text-sm font-medium text-black">
                              Tarea completada
                           </p>
                           <p className="text-xs text-gray-600">
                              Hace 10 minutos
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="font-light flex items-start justify-start flex-col gap-6 bg-white w-full mt-2 py-5 px-3 hover:shadow-black transition-colors duration-300 rounded-xl">
                     <div className="flex items-center gap-2">
                        <div>
                           <MdOutlineDownloadForOffline
                              size={22}
                              className="text-black"
                           />
                        </div>
                        <div>
                           <p className="text-sm font-medium text-black">
                              Fichero descargado
                           </p>
                           <p className="text-xs text-gray-600">
                              Hace 20 minutos
                           </p>
                        </div>
                     </div>
                     <div className="flex items-center gap-2">
                        <div>
                           <MdOutlineDownloadForOffline
                              size={22}
                              className="text-black"
                           />
                        </div>
                        <div>
                           <p className="text-sm font-medium text-black">
                              Fichero descargado
                           </p>
                           <p className="text-xs text-gray-600">Hace 2 días</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-2">
                        <div>
                           <MdOutlineDownloadForOffline
                              size={22}
                              className="text-black"
                           />
                        </div>
                        <div>
                           <p className="text-sm font-medium text-black">
                              Fichero descargado
                           </p>
                           <p className="text-xs text-gray-600">
                              Hace 1 semana
                           </p>
                        </div>
                     </div>
                  </div>
                  <span className="text-sm mt-3">Contacto</span>
                  <div className="font-light flex items-start justify-start flex-col gap-5 bg-white w-full py-5 px-3 hover:shadow-black transition-colors duration-300 rounded-xl cursor-pointer">
                     <div className="flex items-center gap-2">
                        <div>
                           <MdPhone size={22} className="text-black" />
                        </div>
                        <div>
                           <p className="text-sm font-normal text-black">
                              Telefónico
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="font-light flex items-start justify-start flex-col gap-5 bg-white w-full py-5 px-3 hover:shadow-black transition-colors duration-300 rounded-xl cursor-pointer">
                     <div className="flex items-center gap-2">
                        <div>
                           <MdEmail size={22} className="text-black" />
                        </div>
                        <div>
                           <p className="text-sm font-normal text-black">
                              Electrónico
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <button
                  onClick={toggleVisibility}
                  className="toggle-button fixed bottom-3 right-5"
               >
                  <div className="flex items-center justify-center bg-white rounded-full">
                     <MdArrowRight size={22} className="text-secondaryColor" />
                  </div>
               </button>
            </aside>
         ) : (
            <button
               onClick={toggleVisibility}
               className="toggle-button fixed top-1/2 right-2 z-50 shadow-black"
            >
               <div className="flex items-center justify-center bg-secondaryGradient rounded-full">
                  <MdArrowLeft size={22} className="text-white" />
               </div>
            </button>
         )}
      </>
   );
};

export default RightBar;
