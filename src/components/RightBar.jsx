"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
   MdOutlineTaskAlt,
   MdOutlineDownloadForOffline,
   MdPhone,
   MdEmail,
   MdArrowLeft,
   MdArrowRight,
   MdOutlineWarningAmber,
   MdFactCheck,
} from "react-icons/md";
import CustomModal from "@/components/PopupSolicitaAuditoria";
import PopupContactaGestorPersonalLlamada from "@/components/PopupContactaGestorPersonalLlamada";
import Link from "next/link";

const RightBar = () => {
   const [visible, setVisible] = useState(true);
   const toggleVisibility = () => {
      setVisible(!visible);
   };
   const [modalIsOpen, setModalIsOpen] = useState(false);
   const openModal = () => setModalIsOpen(true);
   const closeModal = () => setModalIsOpen(false);

   const [modalIsOpen2, setModalIsOpen2] = useState(false);
   const openModal2 = () => setModalIsOpen2(true);
   const closeModal2 = () => setModalIsOpen2(false);

   const [modalIsOpen3, setModalIsOpen3] = useState(false);
   const openModal3 = () => setModalIsOpen3(true);
   const closeModal3 = () => setModalIsOpen3(false);
   return (
      <>
         {visible ? (
            <aside
               className={`fixed top-20 right-0 pt-10 w-[18%] h-screen text-white p-5 z-10 transition-opacity ${
                  visible ? "opacity-100" : "opacity-0"
               }`}
            >
               <div className="flex items-start justify-center flex-col gap-2 mt-0">
                  <div className="font-light flex items-center justify-start flex-col gap-6 bg-gray-50 w-full mt-2 py-5 px-3 rounded-xl shadow">
                     <div className="font-light flex items-center justify-start flex-col gap-5 w-full py-0 px-3 hover:shadow-black transition-colors duration-300 rounded-xl cursor-pointer">
                        <div className="flex items-center flex-col gap-4">
                           <div className="flex justify-center items-center text-center flex-col">
                              <Image
                                 src="/asesorPersonalAudidat.png"
                                 width={50}
                                 height={50}
                                 className="text-black"
                              />
                              <div className="flex flex-col gap-1">
                                 <p className="text-base font-semibold text-black">
                                    Tu gestor
                                 </p>
                                 <p className="text-sm font-normal text-black">
                                    Daniel González
                                 </p>
                                 <p className="text-sm font-normal text-black">
                                    L-V 9:00h - 17:00h
                                 </p>
                              </div>
                           </div>
                           <div className="flex gap-2">
                              <div
                                 className="flex flex-col justify-center items-center text-center bg-mainGradient text-white rounded-full p-2"
                                 onClick={openModal2}
                              >
                                 <MdPhone size={15} className="text-white" />
                              </div>
                              <PopupContactaGestorPersonalLlamada
                                 isOpen={modalIsOpen2}
                                 onRequestClose={closeModal2}
                              />
                              <Link href="/tickets">
                                 <div
                                    className="flex flex-col justify-center items-center text-center bg-mainGradient text-white rounded-full p-2"
                                    onClick={openModal3}
                                 >
                                    <MdEmail size={15} className="text-white" />
                                 </div>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="flex justify-center items-center w-full mt-2">
                     <span className="text-sm font-normal text-black">
                        Actividad reciente
                     </span>
                  </div>
                  <div className="font-light flex items-center justify-start flex-col gap-4 bg-gray-50 w-full py-5 px-3 shadow rounded-xl">
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
                  </div>
                  <div className="font-light flex items-center justify-start flex-col gap-2 bg-orange-100 w-full mt-2 py-5 px-3 rounded-xl shadow">
                     <MdOutlineWarningAmber size={22} className="text-black" />
                     <p className="text-base text-black font-bold">
                        Evita sanciones
                     </p>

                     <button
                        onClick={openModal}
                        className="flex justify-center items-center gap-2 bg-mainColor hover:bg-mainColor2 transition-colors duration-300 py-1 px-3 rounded-md text-white text- font-light shadow-sm"
                     >
                        <MdFactCheck size={18} className="text-white" />
                        <span>Solicitar auditoría</span>
                     </button>
                     <CustomModal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                     />
                  </div>
               </div>
               <button
                  onClick={toggleVisibility}
                  className="toggle-button fixed bottom-3 right-5"
               >
                  <div className="flex items-center justify-center bg-mainColor hover:bg-mainColor2 transition-colors duration-300 rounded-full">
                     <MdArrowRight size={22} className="text-white" />
                  </div>
               </button>
            </aside>
         ) : (
            <button
               onClick={toggleVisibility}
               className="toggle-button fixed top-1/2 right-2 z-50 shadow-black"
            >
               <div className="flex items-center justify-center bg-mainColor hover:bg-mainColor2 transition-colors duration-300 rounded-full">
                  <MdArrowLeft size={22} className="text-white" />
               </div>
            </button>
         )}
      </>
   );
};

export default RightBar;
