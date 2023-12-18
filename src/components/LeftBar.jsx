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
   MdKeyboardArrowDown,
   MdKeyboardArrowUp,
   MdOutlineDraw,
} from "react-icons/md";
import CustomModal from "@/components/PopupInvitaEmpresa";

const LeftBar = () => {
   const [visible, setVisible] = useState(true);
   const toggleVisibility = () => {
      setVisible(!visible);
   };
   const [modalIsOpen, setModalIsOpen] = useState(false);
   const openModal = () => setModalIsOpen(true);
   const closeModal = () => setModalIsOpen(false);
   const [isOpenAccesoRapido, setIsOpenAccesoRapido] = useState(false);
   const [isOpenAudidat360, setIsOpenAudidat360] = useState(false);
   const [isOpenMisHerramientas, setIsOpenMisHerramientas] = useState(false);
   const [isSeguimientoCumplimiento, setIsSeguimientoCumplimiento] =
      useState(false);

   return (
      <>
         {visible ? (
            <aside className="fixed top-10 pt-10 pb-32 left-0 w-[17%] h-screen bg-gray-50 text-white p-4 z-10 shadow-2xl flex flex-col justify-between">
               <div className="flex-1 overflow-auto">
                  <div className="flex items-start justify-center flex-col gap-2 ">
                     <div className="w-full">
                        <span className="text-sm font-semibold text-black">
                           BIENVENIDO/A
                        </span>
                        <hr className="border-gray-300 my-2 mr-1" />
                        <div className="flex items-center justify-between gap-1 w-full px-3">
                           <span className="text-sm text-black">
                              Acceso rápido
                           </span>
                           <span
                              className="text-black cursor-pointer rounded-full text-xl hover:bg-gray-100 transition-colors duration-300 p-1"
                              onClick={() =>
                                 setIsOpenAccesoRapido(!isOpenAccesoRapido)
                              }
                           >
                              {isOpenAccesoRapido ? (
                                 <MdKeyboardArrowUp />
                              ) : (
                                 <MdKeyboardArrowDown />
                              )}
                           </span>
                        </div>
                        {isOpenAccesoRapido && (
                           <div>
                              <div className="mx-4 my-2">
                                 <Link
                                    href="/"
                                    className="text-black font-light flex items-center justify-start flex-row gap-2 py-1 px-3 w-fit hover:bg-gray-200 duration-300 rounded-lg"
                                 >
                                    <MdDashboard className="text-mainColor" />
                                    <span className="text-sm">Inicio</span>{" "}
                                 </Link>
                              </div>
                              <div className="mx-4">
                                 <Link
                                    href="/ndocs"
                                    className="text-black font-light flex items-center justify-start flex-row gap-2 py-1 px-3 w-fit hover:bg-gray-200 duration-300 rounded-lg"
                                 >
                                    <MdFolderCopy className="text-mainColor" />
                                    <span className="text-sm">
                                       Documentación
                                    </span>{" "}
                                 </Link>
                              </div>
                           </div>
                        )}
                     </div>

                     <div className="w-full">
                        <span className="text-sm font-semibold text-black">
                           PANEL
                        </span>
                        <hr className="border-gray-300 my-2 mr-1" />
                        <div className="flex items-center justify-between gap-1 w-full px-3">
                           <span className="text-sm mt-1 mb-1 text-black">
                              Audidat 360
                           </span>
                           <span
                              className="text-black cursor-pointer rounded-full text-xl hover:bg-gray-100 transition-colors duration-300 p-1"
                              onClick={() =>
                                 setIsOpenAudidat360(!isOpenAudidat360)
                              }
                           >
                              {isOpenAudidat360 ? (
                                 <MdKeyboardArrowUp />
                              ) : (
                                 <MdKeyboardArrowDown />
                              )}
                           </span>
                        </div>
                        {isOpenAudidat360 && (
                           <div>
                              <div className="mx-4 my-2">
                                 <Link
                                    href="/docs"
                                    className="text-black font-light flex items-center justify-start flex-row gap-2 py-1 px-3 w-fit hover:bg-gray-200 duration-300 rounded-lg"
                                 >
                                    <MdShield />
                                    <span className="text-sm ">
                                       Protección de datos
                                    </span>{" "}
                                 </Link>
                              </div>
                              <div className="mx-4 my-2">
                                 <Link
                                    href="/ndocs"
                                    className="text-black font-light flex items-center justify-start flex-row gap-2 py-1 px-3 w-fit hover:bg-gray-200 duration-300 rounded-lg"
                                 >
                                    <MdGroups2 />
                                    <span className="text-sm">
                                       Compliance
                                    </span>{" "}
                                 </Link>
                              </div>
                              <div className="mx-4 my-2">
                                 <Link
                                    href="/ndocs"
                                    className="text-black font-light flex items-center justify-start flex-row gap-2 py-1 px-3 w-fit hover:bg-gray-200 duration-300 rounded-lg"
                                 >
                                    <MdOutlineTransgender />
                                    <span className="text-sm">
                                       Igualdad
                                    </span>{" "}
                                 </Link>
                              </div>
                              <div className="mx-4 my-2">
                                 <Link
                                    href="/ndocs"
                                    className="text-black font-light flex items-center justify-start flex-row gap-2 py-1 px-3 w-fit hover:bg-gray-200 duration-300 rounded-lg"
                                 >
                                    <MdSpatialAudioOff />
                                    <span className="text-sm">
                                       Canal ético
                                    </span>{" "}
                                 </Link>
                              </div>
                           </div>
                        )}
                     </div>

                     <div className="w-full">
                        <div className="flex items-center justify-between gap-1 w-full px-3">
                           <span className="text-sm mt-1 mb-1 text-black">
                              Mis herramientas
                           </span>
                           <span
                              className="text-black cursor-pointer rounded-full text-xl hover:bg-gray-100 transition-colors duration-300 p-1"
                              onClick={() =>
                                 setIsOpenMisHerramientas(
                                    !isOpenMisHerramientas
                                 )
                              }
                           >
                              {isOpenAudidat360 ? (
                                 <MdKeyboardArrowUp />
                              ) : (
                                 <MdKeyboardArrowDown />
                              )}
                           </span>
                        </div>
                        {isOpenMisHerramientas && (
                           <div>
                              <div className="mx-4 my-2">
                                 <Link
                                    href="/tareas"
                                    className="text-black font-light flex items-center justify-start flex-row gap-2 py-1 px-3 w-fit hover:bg-gray-200 duration-300 rounded-lg"
                                 >
                                    <MdOutlineDraw />
                                    <span className="text-sm">
                                       Generador de firmas
                                    </span>{" "}
                                 </Link>
                              </div>
                              <div className="mx-4 my-2">
                                 <Link
                                    href="/tareas"
                                    className="text-black font-light flex items-center justify-start flex-row gap-2 py-1 px-3 w-fit hover:bg-gray-200 duration-300 rounded-lg"
                                 >
                                    <MdOutlineAddTask />
                                    <span className="text-sm">Tareas</span>{" "}
                                 </Link>
                              </div>
                           </div>
                        )}
                     </div>

                     <div className="w-full">
                        <div className="flex items-center justify-between gap-1 w-full px-3">
                           <span className="text-sm mt-1 mb-1 text-black">
                              Seguimiento de cumplimiento
                           </span>
                           <span
                              className="text-black cursor-pointer rounded-full text-xl hover:bg-gray-100 transition-colors duration-300 p-1"
                              onClick={() =>
                                 setIsSeguimientoCumplimiento(
                                    !isSeguimientoCumplimiento
                                 )
                              }
                           >
                              {isSeguimientoCumplimiento ? (
                                 <MdKeyboardArrowUp />
                              ) : (
                                 <MdKeyboardArrowDown />
                              )}
                           </span>
                        </div>
                        {isSeguimientoCumplimiento && (
                           <div className="mx-4 my-2">
                              <Link
                                 href="/acc"
                                 className="text-black font-light flex items-center justify-start flex-row gap-2 py-1 px-3 w-fit hover:bg-gray-200 duration-300 rounded-lg"
                              >
                                 <MdSupervisedUserCircle />
                                 <span className="text-sm">
                                    Audidat CUMPLE
                                 </span>{" "}
                              </Link>
                           </div>
                        )}
                     </div>
                  </div>
               </div>
               <div className="flex-none">
                  <div className="flex items-start justify-center flex-col gap-2 mt-2">
                     <span className="text-sm mt-1 mb-1 text-black">
                        Invita a una empresa
                     </span>
                     <p
                        className="font-light flex items-center justify-start flex-row gap-3 bg-mainColor2 w-5/6 ml-4 py-3 px-5 hover:bg-mainColor3 transition-colors duration-300 rounded-lg cursor-pointer"
                        onClick={openModal}
                     >
                        <MdOutlineCardGiftcard />
                        <span className="text-sm font-medium">
                           INVITAR
                        </span>{" "}
                     </p>
                     <CustomModal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                     />
                  </div>
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
