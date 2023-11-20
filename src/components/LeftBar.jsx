"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
   MdDashboard,
   MdOutlinePersonOutline,
   MdFolderCopy,
   MdShield,
   MdGroups2,
   MdOutlineTransgender,
   MdSpatialAudioOff,
   MdSupervisedUserCircle,
   MdOutlineAddTask,
   MdArrowLeft,
   MdArrowRight,
} from "react-icons/md";

const LeftBar = () => {
   const [visible, setVisible] = useState(true);
   const toggleVisibility = () => {
      setVisible(!visible);
   };
   return (
      <>
         {visible ? (
            <aside className="sticky top-0 left-0 w-[17%] h-screen bg-secondaryGradient text-white p-5 z-10 shadow-2xl">
               <div className="flex justify-start items-start gap-2 flex-col">
                  <div className="grid grid-cols-1 justify-center items-center">
                     <div className="flex justify-center items-center gap-4">
                        <div className="rounded-full bg-white w-fit text-mainColor p-1">
                           <MdOutlinePersonOutline className="text-3xl" />
                        </div>
                        <div className="flex flex-col w-fit">
                           <span className="text-lg font-extralight">
                              José Ramos
                           </span>
                           <span className="text-sm font-extralight">
                              Contable
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flex items-start justify-center flex-col gap-2 mt-5">
                  <span className="text-sm mb-1">Acceso rápido</span>
                  <Link
                     href="/"
                     className="font-light flex items-center justify-start flex-row gap-3 bg-mainColor2 w-full py-3 px-4 hover:bg-mainColor3 transition-colors duration-300 rounded-lg"
                  >
                     <MdDashboard />
                     <span className="text-sm">Inicio</span>{" "}
                  </Link>
                  <Link
                     href="/ndocs"
                     className="font-light flex items-center justify-start flex-row gap-3 bg-mainColor2 w-full py-3 px-4 hover:bg-mainColor3 transition-colors duration-300 rounded-lg"
                  >
                     <MdFolderCopy />
                     <span className="text-sm">Documentación</span>{" "}
                  </Link>
                  <span className="text-sm mt-1 mb-1">Audidat 360</span>

                  <Link
                     href="/docs"
                     className="font-light flex items-center justify-start flex-row gap-3 bg-mainColor2 w-full py-3 px-4 hover:bg-mainColor3 transition-colors duration-300 rounded-lg"
                  >
                     <MdShield />
                     <span className="text-sm">Protección de datos</span>{" "}
                  </Link>
                  <Link
                     href="/ndocs"
                     className="font-light flex items-center justify-start flex-row gap-3 bg-mainColor2 w-full py-3 px-4 hover:bg-mainColor3 transition-colors duration-300 rounded-lg"
                  >
                     <MdGroups2 />
                     <span className="text-sm">Compliance</span>{" "}
                  </Link>
                  <Link
                     href="/ndocs"
                     className="font-light flex items-center justify-start flex-row gap-3 bg-mainColor2 w-full py-3 px-4 hover:bg-mainColor3 transition-colors duration-300 rounded-lg"
                  >
                     <MdOutlineTransgender />
                     <span className="text-sm">Igualdad</span>{" "}
                  </Link>
                  <Link
                     href="/ndocs"
                     className="font-light flex items-center justify-start flex-row gap-3 bg-mainColor2 w-full py-3 px-4 hover:bg-mainColor3 transition-colors duration-300 rounded-lg"
                  >
                     <MdSpatialAudioOff />
                     <span className="text-sm">Canal ético</span>{" "}
                  </Link>

                  <span className="text-sm mt-1 mb-1">Protección de datos</span>
                  <Link
                     href="/tareas"
                     className="font-light flex items-center justify-start flex-row gap-3 bg-mainColor2 w-full py-3 px-4 hover:bg-mainColor3 transition-colors duration-300 rounded-lg"
                  >
                     <MdOutlineAddTask />
                     <span className="text-sm">Tareas</span>{" "}
                  </Link>

                  <span className="text-sm mt-1 mb-1">Audidat Cumple</span>
                  <Link
                     href="/acc"
                     className="font-light flex items-center justify-start flex-row gap-3 bg-mainColor2 w-full py-3 px-4 hover:bg-mainColor3 transition-colors duration-300 rounded-lg"
                  >
                     <MdSupervisedUserCircle />
                     <span className="text-sm">Audidat CUMPLE</span>{" "}
                  </Link>
               </div>
               <button
                  onClick={toggleVisibility}
                  className="toggle-button fixed bottom-3"
               >
                  <div className="flex items-center justify-center bg-white rounded-full">
                     <MdArrowLeft size={22} className="text-secondaryColor" />
                  </div>
               </button>
            </aside>
         ) : (
            <button
               onClick={toggleVisibility}
               className="toggle-button fixed top-1/2 left-2 z-50 shadow-black"
            >
               <div className="flex items-center justify-center bg-secondaryGradient rounded-full">
                  <MdArrowRight size={22} className="text-white" />
               </div>
            </button>
         )}
      </>
   );
};

export default LeftBar;
