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
               className={`fixed top-14 right-0 pt-10 w-[15%] h-screen text-white p-5 z-10 transition-opacity ${
                  visible ? "opacity-100" : "opacity-0"
               }`}
            >
               <div className="flex items-start justify-center flex-col gap-2 mt-0">
                  <div className="flex justify-center items-center w-full">
                     <span className="text-sm font-normal text-black">
                        Actividad reciente
                     </span>
                  </div>
                  <div className="font-light flex items-center justify-start flex-col gap-4 bg-gray-50 w-full py-5 px-3  shadow rounded-xl">
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
                  <div className="font-light flex items-center justify-start flex-col gap-6 bg-gray-50 w-full mt-2 py-5 px-3 rounded-xl shadow">
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
                  <div class="flex justify-center items-center w-full mt-5">
                     <span className="text-sm font-normal text-black">
                        Contacto
                     </span>
                  </div>
                  <div className="font-light flex items-center justify-start flex-col gap-6 bg-gray-50 w-full mt-2 py-5 px-3 rounded-xl shadow">
                     <div className="font-light flex items-center justify-start flex-col gap-5 w-full py-0 px-3 hover:shadow-black transition-colors duration-300 rounded-xl cursor-pointer">
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
                     <div className="font-light flex items-center justify-start flex-col gap-5 w-full py0 px-3 hover:shadow-black transition-colors duration-300 rounded-xl cursor-pointer">
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
               </div>
               <button
                  onClick={toggleVisibility}
                  className="toggle-button fixed bottom-3 right-5"
               >
                  <div className="flex items-center justify-center bg-mainGradient rounded-full">
                     <MdArrowRight size={22} className="text-white" />
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
