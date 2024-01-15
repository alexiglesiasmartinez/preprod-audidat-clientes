"use client";
import React, { useState, useEffect } from "react";
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
   MdOutlineSearch,
   MdHome,
   MdConstruction,
   MdLocationOn,
   MdLibraryAddCheck,
   MdFileOpen,
   MdLightbulb,
   MdCookie,
   MdAddCircle,
} from "react-icons/md";
import CustomModal from "@/components/PopupInvitaEmpresa";
import dynamic from "next/dynamic";
const Tour = dynamic(() => import("reactour"), { ssr: false });

const LeftBar = () => {
   const [visible, setVisible] = useState(true);
   const toggleVisibility = () => {
      setVisible(!visible);
   };
   const [modalIsOpen, setModalIsOpen] = useState(false);
   const openModal = () => setModalIsOpen(true);
   const closeModal = () => setModalIsOpen(false);
   const [isOpenAccesoRapido, setIsOpenAccesoRapido] = useState(true);
   const [isOpenAudidat360, setIsOpenAudidat360] = useState(false);
   const [isOpenPlanDeIgualdad, setIsOpenPlanDeIgualdad] = useState(false);
   const [isOpenCompliance, setIsOpenCompliance] = useState(false);
   const [isOpenMisHerramientas, setIsOpenMisHerramientas] = useState(false);
   const [isSeguimientoCumplimiento, setIsSeguimientoCumplimiento] =
      useState(false);

   /*const [isTourOpen, setIsTourOpen] = useState(true);

   useEffect(() => {
      if (window.location.pathname === "/ndocs") {
         setIsTourOpen(true);
         setIsOpenAudidat360(true);
      }
      return () => setIsTourOpen(false);
   }, []);

   const steps = [
      {
         selector: ".div6",
         content:
            "Aquí puedes ver tu sección para acceder a tu documentación. Haz click en Protección de Datos para comenzar a mejorar tu cumplimiento normativo.",
      },
   ];

   const handleDiv6Click = () => {
      setIsTourOpen(false);
   };*/

   return (
      <>
         {/*<Tour
            steps={steps}
            isOpen={isTourOpen}
            onRequestClose={() => setIsTourOpen(false)}
            accentColor="#00375e"
            rounded={5}
            showButtons={false}
            showNavigation={false}
         />*/}
         {visible ? (
            <aside className="fixed top-20 pt-10 pb-32 left-0 w-[17%] h-screen bg-gray-50 text-white p-4 z-10 shadow-2xl flex flex-col justify-between">
               <div className="flex-1 overflow-auto">
                  <div className="flex items-start justify-center flex-col gap-4">
                     <div className="flex items-center shadow-sm rounded-lg overflow-hidden bg-white w-full mb-2">
                        <div className="px-4 text-black">
                           <MdOutlineSearch size="18" />
                        </div>
                        <input
                           type="text"
                           placeholder="Buscar ..."
                           className="w-full py-2 text-black focus:outline-none"
                        />
                     </div>

                     <div className="w-full">
                        <div className="flex items-center justify-between gap-1 w-full px-3">
                           <div className="flex justify-center items-center gap-2">
                              <MdDashboard className="text-mainColor" />
                              <span className="text-sm text-black">
                                 Acceso rápido
                              </span>
                           </div>
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
                                    <MdHome className="text-mainColor" />
                                    <span className="text-sm">Inicio</span>{" "}
                                 </Link>
                              </div>
                              <div className="mx-4">
                                 <Link
                                    href="/ndocs"
                                    className="text-black font-light flex items-center justify-start flex-row gap-2 py-1 px-3 w-fit hover:bg-gray-200 duration-300 rounded-lg"
                                 >
                                    <MdFileOpen className="text-mainColor" />
                                    <span className="text-sm">
                                       Documentación
                                    </span>{" "}
                                 </Link>
                              </div>
                           </div>
                        )}
                     </div>

                     <div /*onClick={handleDiv6Click}*/ className="div6 w-full">
                        <div className="w-full">
                           <div className="flex items-center justify-between gap-1 w-full px-3">
                              <div className="flex justify-center items-center gap-2">
                                 <MdFolderCopy className="text-mainColor" />
                                 <span className="text-sm mt-1 mb-1 text-black">
                                    Audidat 360
                                 </span>
                              </div>
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
                                       <MdShield className="text-mainColor" />
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
                                       <MdGroups2 className="text-mainColor" />
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
                                       <MdOutlineTransgender className="text-mainColor" />
                                       <span className="text-sm">Igualdad</span>{" "}
                                    </Link>
                                 </div>
                                 <div className="mx-4 my-2">
                                    <Link
                                       href="/ndocs"
                                       className="text-black font-light flex items-center justify-start flex-row gap-2 py-1 px-3 w-fit hover:bg-gray-200 duration-300 rounded-lg"
                                    >
                                       <MdSpatialAudioOff className="text-mainColor" />
                                       <span className="text-sm">
                                          Canal ético
                                       </span>{" "}
                                    </Link>
                                 </div>
                              </div>
                           )}
                        </div>
                     </div>

                     <div className="w-full">
                        <div className="flex items-center justify-between gap-1 w-full px-3">
                           <div className="flex justify-center items-center gap-2">
                              <MdOutlineTransgender className="text-mainColor" />
                              <span className="text-sm mt-1 mb-1 text-black">
                                 Plan de igualdad
                              </span>
                           </div>
                           <span
                              className="text-black cursor-pointer rounded-full text-xl hover:bg-gray-100 transition-colors duration-300 p-1"
                              onClick={() =>
                                 setIsOpenPlanDeIgualdad(!isOpenPlanDeIgualdad)
                              }
                           >
                              {isOpenPlanDeIgualdad ? (
                                 <MdKeyboardArrowUp />
                              ) : (
                                 <MdKeyboardArrowDown />
                              )}
                           </span>
                        </div>
                        {isOpenPlanDeIgualdad && (
                           <div>
                              <div className="mx-4 my-2">
                                 <Link
                                    href="#"
                                    className="text-black font-light flex items-center justify-start flex-row gap-2 py-1 px-3 w-fit hover:bg-gray-200 duration-300 rounded-lg"
                                 >
                                    <MdFileOpen className="text-mainColor" />
                                    <span className="text-sm ">
                                       Documentación
                                    </span>{" "}
                                 </Link>
                              </div>
                              <div className="mx-4 my-2">
                                 <Link
                                    href="#"
                                    className="text-black font-light flex items-center justify-start flex-row gap-2 py-1 px-3 w-fit hover:bg-gray-200 duration-300 rounded-lg"
                                 >
                                    <MdLightbulb className="text-mainColor" />
                                    <span className="text-sm">
                                       Implantación
                                    </span>{" "}
                                 </Link>
                              </div>
                           </div>
                        )}
                     </div>

                     <div className="w-full">
                        <div className="flex items-center justify-between gap-1 w-full px-3">
                           <div className="flex justify-center items-center gap-2">
                              <MdLibraryAddCheck className="text-mainColor" />
                              <span className="text-sm mt-1 mb-1 text-black">
                                 Compliance
                              </span>
                           </div>
                           <span
                              className="text-black cursor-pointer rounded-full text-xl hover:bg-gray-100 transition-colors duration-300 p-1"
                              onClick={() =>
                                 setIsOpenCompliance(!isOpenCompliance)
                              }
                           >
                              {isOpenCompliance ? (
                                 <MdKeyboardArrowUp />
                              ) : (
                                 <MdKeyboardArrowDown />
                              )}
                           </span>
                        </div>
                        {isOpenCompliance && (
                           <div>
                              <div className="mx-4 my-2">
                                 <Link
                                    href="#"
                                    className="text-black font-light flex items-center justify-start flex-row gap-2 py-1 px-3 w-fit hover:bg-gray-200 duration-300 rounded-lg"
                                 >
                                    <MdFileOpen className="text-mainColor" />
                                    <span className="text-sm ">
                                       Documentación
                                    </span>{" "}
                                 </Link>
                              </div>
                              <div className="mx-4 my-2">
                                 <Link
                                    href="#"
                                    className="text-black font-light flex items-center justify-start flex-row gap-2 py-1 px-3 w-fit hover:bg-gray-200 duration-300 rounded-lg"
                                 >
                                    <MdLightbulb className="text-mainColor" />
                                    <span className="text-sm">
                                       Implantación
                                    </span>{" "}
                                 </Link>
                              </div>
                           </div>
                        )}
                     </div>

                     <div className="w-full">
                        <div className="flex items-center justify-between gap-1 w-full px-3">
                           <div className="flex justify-center items-center gap-2">
                              <MdConstruction className="text-mainColor" />
                              <span className="text-sm mt-1 mb-1 text-black">
                                 Mis herramientas
                              </span>
                           </div>
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
                                    href="#"
                                    className="text-black font-light flex items-center justify-start flex-row gap-2 py-1 px-3 w-fit hover:bg-gray-200 duration-300 rounded-lg"
                                 >
                                    <MdOutlineDraw className="text-mainColor" />
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
                                    <MdOutlineAddTask className="text-mainColor" />
                                    <span className="text-sm">Tareas</span>{" "}
                                 </Link>
                              </div>
                              <div className="mx-4 my-2">
                                 <Link
                                    href="#"
                                    className="text-black font-light flex items-center justify-start flex-row gap-2 py-1 px-3 w-fit hover:bg-gray-200 duration-300 rounded-lg"
                                 >
                                    <MdCookie className="text-mainColor" />
                                    <span className="text-sm">
                                       Cookies Web
                                    </span>{" "}
                                 </Link>
                              </div>
                           </div>
                        )}
                     </div>

                     <div className="w-full">
                        <div className="flex items-center justify-between gap-1 w-full px-3">
                           <div className="flex justify-center items-center gap-2">
                              <MdLocationOn className="text-mainColor" />
                              <span className="text-sm mt-1 mb-1 text-black">
                                 Seguimiento de cumplimiento
                              </span>
                           </div>
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
                                 <MdSupervisedUserCircle className="text-mainColor" />
                                 <span className="text-sm">Audidat CUMPLE</span>{" "}
                              </Link>
                           </div>
                        )}
                     </div>

                     <div className="w-full">
                        <div className="flex items-center justify-between gap-1 w-full px-3">
                           <div className="flex justify-center items-center gap-2">
                              <Link
                                 href="/alta"
                                 className="text-black font-normal flex items-center justify-start flex-row gap-2 py-1  w-fit rounded-lg"
                              >
                                 <MdAddCircle className="text-mainColor" />
                                 <span className="text-sm mb-1 text-black">
                                    Alta cliente
                                 </span>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flex-none">
                  <div className="flex items-center justify-center flex-col gap-2 px-3">
                     <span className="text-sm mt-3 mb-1 text-black">
                        Invita a una empresa
                     </span>
                     <p
                        className="font-light flex items-center justify-center flex-row gap-2 bg-mainColor w-full py-3 hover:bg-mainColor3 transition-colors duration-300 rounded-lg cursor-pointer"
                        onClick={openModal}
                     >
                        <MdOutlineCardGiftcard className="text-mainColor" />
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
                  <div className="flex items-center justify-center bg-mainColor hover:bg-mainColor2 transition-colors duration-300 rounded-full">
                     <MdArrowLeft size={22} className="text-white" />
                  </div>
               </button>
            </aside>
         ) : (
            <button
               onClick={toggleVisibility}
               className="toggle-button fixed top-1/2 left-2 z-50 shadow-black"
            >
               <div className="flex items-center justify-center bg-mainColor hover:bg-mainColor2 transition-colors duration-300 rounded-full">
                  <MdArrowRight size={22} className="text-white" />
               </div>
            </button>
         )}
      </>
   );
};

export default LeftBar;
