"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import CustomModal from "@/components/PopupSolicitaAuditoria";
import toast, { Toaster } from 'react-hot-toast';

import {
   MdOutlineNotificationsNone,
   MdLogout,
   MdHelpOutline,
   MdPersonOutline,
   MdOutlineSettings,
   MdOutlineMessage,
   MdArrowOutward,
} from "react-icons/md";

const Header = () => {

   // LOGOUT
   const router = useRouter();
   async function handleLogout() {
      const response = await fetch('/api/logout');
      const data = await response.json();    
      if (data.success) {
         toast.success('¡Has cerrado sesión correctamente!');
         router.push('/login');
      }
    }
   
   // MODAL
   const [modalIsOpen, setModalIsOpen] = useState(false);
   const openModal = () => setModalIsOpen(true);
   const closeModal = () => setModalIsOpen(false);

   // DESPLEGABLE MENÚ
   const [dropdownVisible, setDropdownVisible] = useState(false);
   const dropdownRef = useRef(null);
   const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
   };
   const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
         setDropdownVisible(false);
      }
   };
   useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);

   // CAMBIO DE LOGO
   const [logo, setLogo] = useState("/logo-audidat-clientes.png");
   const changeLogo = () => {
      const root = document.documentElement;
      if (logo === "/logo-eurocajarural.jpeg") {
         setLogo("/logo-audidat-clientes.png");
         root.style.setProperty("--mainGradient", "#00375e");
         root.style.setProperty("--secondaryGradient", "#002c4b");
         root.style.setProperty("--mainColor2", "#002c4b");
         root.style.setProperty("--mainColor3", "#00375e");
      } else {
         setLogo("/logo-eurocajarural.jpeg");
         root.style.setProperty("--mainGradient", "#2f7655");
         root.style.setProperty("--secondaryGradient", "#2f7655");
         root.style.setProperty("--mainColor2", "#2f7655");
         root.style.setProperty("--mainColor3", "#2f7655");
      }
   };

   return (
      <>
         <Toaster />
         <div className="fixed flex items-center justify-center bg-gray-50 text-mainColor text-center top-0 left-0 h-10 w-full z-20 py-2 px-5 shadow bg-mainColor">
            <div className="flex gap-2 justify-center items-center text-white">
               <MdOutlineMessage size={20} />
               <span className="flex justify-center items-center text-base text-white font-light">
                  Recuerda revisar y actualizar regularmente tus políticas de privacidad para garantizar el pleno cumplimiento con el RGPD y la protección óptima de los datos personales.
               </span>
            </div>
         </div>
         <header className="fixed flex items-center bg-gray-50 text-mainColor text-center top-10 left-0 h-14 w-full z-20 py-2 px-5 shadow">
            <div className="grid grid-cols-2 align-middle w-full">
               <div className="flex items-center gap-3">
                  <Link href="/app/">
                     <Image
                        src={logo}
                        width={130}
                        height={40}
                        alt="Logo audidat"
                     />
                  </Link>
               </div>
               <div className="flex items-center justify-end gap-6">
                  <div
                     onClick={changeLogo}
                     className="transition transform hover:scale-125"
                  >
                     <Link href="#">
                        <MdArrowOutward size={20} />
                     </Link>
                  </div>
                  <div className="transition transform hover:scale-125">
                     <Link href="#">
                        <MdOutlineMessage size={20} />
                     </Link>
                  </div>
                  <div className="transition transform hover:scale-125">
                     <Link href="#" onClick={openModal}>
                        <MdOutlineNotificationsNone size={20} />
                     </Link>
                     <CustomModal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                     />
                  </div>
                  <div
                     ref={dropdownRef}
                     className="flex justify-start items-start gap-2 flex-col"
                  >
                     <div className="grid grid-cols-1 justify-center items-center">
                        <div className="flex justify-center items-center gap-4">
                           <div className="flex flex-col w-fit">
                              <span className="text-base font-light">
                                 Alex Iglesias
                              </span>
                           </div>
                           <div onClick={toggleDropdown} className="cursor-pointer">                              
                              <Image
                                 src="/profile.png"
                                 width={32}
                                 height={32}
                                 alt="Profile image"
                              />
                           </div>
                        </div>
                     </div>

                     {dropdownVisible && (
                        <div className="text-left text-sm absolute right-5 mt-14 w-48 bg-white rounded-lg shadow-xl z-20">
                           <div className="div1">
                              <Link
                                 href="/app/perfil/configuracion"
                                 className="rounded-lg"
                              >
                                 <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-t-lg">
                                    <MdOutlineSettings
                                       size={20}
                                       className="inline mr-2"
                                    />
                                    Configuración
                                 </span>
                              </Link>
                           </div>
                           <Link href="/app/perfil/datos">
                              <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                 <MdPersonOutline
                                    size={20}
                                    className="inline mr-2"
                                 />
                                 Perfil
                              </span>
                           </Link>
                           <Link href="/app/perfil/ayuda">
                              <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                 <MdHelpOutline
                                    size={20}
                                    className="inline mr-2"
                                 />
                                 Ayuda
                              </span>
                           </Link>
                           <div className="cursor-pointer" onClick={handleLogout}>
                              <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-">
                                 <MdLogout size={20} className="inline mr-2" />
                                 Cerrar Sesión
                              </span>
                           </div>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </header>
      </>
   );
};

export default Header;
