"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import {
   MdOutlineNotificationsNone,
   MdLogout,
   MdHelpOutline,
   MdPersonOutline,
   MdOutlineSettings,
   MdOutlineMessage,
} from "react-icons/md";

const Header = () => {
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

   return (
      <>
         <div className="fixed flex items-center justify-center bg-gray-50 text-mainColor text-center top-0 left-0 h-10 w-full z-20 py-2 px-5 shadow bg-mainGradient">
            <div className="flex gap-2 justify-center items-center text-white">
               <MdOutlineMessage size={20} />
               <span className="flex justify-center items-center text-base text-white font-light">
                  Recuerda revisar y actualizar regularmente tus políticas de
                  privacidad para garantizar el pleno cumplimiento con el RGPD y
                  la protección óptima de los datos personales.
               </span>
            </div>
         </div>
         <header className="fixed flex items-center bg-gray-50 text-mainColor text-center top-10 left-0 h-14 w-full z-20 py-2 px-5 shadow">
            <div className="grid grid-cols-2 align-middle w-full">
               <div className="flex items-center gap-3">
                  <Link href="/">
                     <Image
                        src="/logo-audidat-clientes.png"
                        width={130}
                        height={40}
                        alt="Logo audidat"
                     />
                  </Link>
               </div>
               <div className="flex items-center justify-end gap-6">
                  <div className="transition transform hover:scale-125">
                     <Link href="#">
                        <MdOutlineMessage size={20} />
                     </Link>
                  </div>
                  <div className="transition transform hover:scale-125">
                     <Link href="#">
                        <MdOutlineNotificationsNone size={20} />
                     </Link>
                  </div>
                  <div
                     ref={dropdownRef}
                     className="flex justify-start items-start gap-2 flex-col"
                  >
                     <div className="grid grid-cols-1 justify-center items-center">
                        <div className="flex justify-center items-center gap-4">
                           <div className="flex flex-col w-fit">
                              <span className="text-base font-light">
                                 José Ramos
                              </span>
                           </div>
                           <div
                              className="rounded-full bg-secondaryGradient w-fit text-mainColor p-2 cursor-pointer"
                              onClick={toggleDropdown}
                           >
                              <MdPersonOutline className="text-2xl text-white" />
                           </div>
                        </div>
                     </div>

                     {dropdownVisible && (
                        <div className="text-left text-sm absolute right-5 mt-14 w-48 bg-white rounded-lg shadow-xl z-20">
                           <Link
                              href="/perfil/configuracion"
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
                           <Link href="/perfil/datos">
                              <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                 <MdPersonOutline
                                    size={20}
                                    className="inline mr-2"
                                 />
                                 Perfil
                              </span>
                           </Link>
                           <Link href="/perfil/ayuda">
                              <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                 <MdHelpOutline
                                    size={20}
                                    className="inline mr-2"
                                 />
                                 Ayuda
                              </span>
                           </Link>
                           <Link href="#">
                              <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-">
                                 <MdLogout size={20} className="inline mr-2" />
                                 Cerrar Sesión
                              </span>
                           </Link>
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
