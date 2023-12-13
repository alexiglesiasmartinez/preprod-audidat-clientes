"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
   MdDashboard,
   MdFolderCopy,
   MdShield,
   MdGroups2,
   MdOutlineTransgender,
   MdSpatialAudioOff,
   MdSupervisedUserCircle,
   MdOutlineAddTask,
   MdArrowLeft,
   MdArrowRight,
   MdOutlineCardGiftcard,
} from "react-icons/md";
import CustomModal from "@/components/CustomModal";

const LeftBar = () => {
   const [visible, setVisible] = useState(true);
   const toggleVisibility = () => {
      setVisible(!visible);
   };
   const [modalIsOpen, setModalIsOpen] = useState(false);
   const openModal = () => setModalIsOpen(true);
   const closeModal = () => setModalIsOpen(false);
   return (
      <>
         {visible ? (
            <aside className="fixed top-14 pt-10 left-0 w-[17%] h-screen bg-gray-50 text-white p-4 z-10 shadow-2xl">
               <div className="flex items-start justify-center flex-col gap-2">
                  <span className="text-sm mb-1 text-black">Acceso rápido</span>
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
                  <span className="text-sm mt-1 mb-1 text-black">
                     Audidat 360
                  </span>

                  <Link
                     href="/docs"
                     className="font-light flex items-center justify-start flex-row gap-3 bg-mainColor2 w-full py-3 px-4 hover:bg-mainColor3 transition-colors duration-300 rounded-lg"
                  >
                     <MdShield />
                     <span className="text-sm ">Protección de datos</span>{" "}
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

                  <span className="text-sm mt-1 mb-1 text-black">
                     Protección de datos
                  </span>
                  <Link
                     href="/tareas"
                     className="font-light flex items-center justify-start flex-row gap-3 bg-mainColor2 w-full py-3 px-4 hover:bg-mainColor3 transition-colors duration-300 rounded-lg"
                  >
                     <MdOutlineAddTask />
                     <span className="text-sm">Tareas</span>{" "}
                  </Link>

                  <span className="text-sm mt-1 mb-1 text-black">
                     Audidat Cumple
                  </span>
                  <Link
                     href="/acc"
                     className="font-light flex items-center justify-start flex-row gap-3 bg-mainColor2 w-full py-3 px-4 hover:bg-mainColor3 transition-colors duration-300 rounded-lg"
                  >
                     <MdSupervisedUserCircle />
                     <span className="text-sm">Audidat CUMPLE</span>{" "}
                  </Link>
               </div>
               <div className="flex items-start justify-center flex-col gap-2 mt-2">
                  <span className="text-sm mt-1 mb-1 text-black">
                     Invita a una empresa
                  </span>
                  <p
                     className="font-light flex items-center justify-start flex-row gap-3 bg-mainColor2 w-full py-3 px-4 hover:bg-mainColor3 transition-colors duration-300 rounded-lg cursor-pointer"
                     onClick={openModal}
                  >
                     <MdOutlineCardGiftcard />
                     <span className="text-sm font-medium">INVITAR</span>{" "}
                  </p>
                  <CustomModal
                     isOpen={modalIsOpen}
                     onRequestClose={closeModal}
                  />
               </div>
               <button
                  onClick={toggleVisibility}
                  className="toggle-button fixed bottom-3"
               >
                  <div className="flex items-center justify-center bg-mainGradient rounded-full">
                     <MdArrowLeft size={22} className="text-white" />
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
