"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import {
   MdOutlineSearch,
   MdOutlineMessage,
   MdOutlineNotificationsNone,
   MdLogout,
   MdHelpOutline,
   MdPersonOutline,
   MdOutlineSettings,
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
      <header className="fixed flex items-center bg-gray-50 text-mainColor text-center top-0 left-0 h-14 w-full z-20 py-2 px-5 shadow">
         <div className="grid grid-cols-2 align-middle w-full">
            <div className="flex items-center gap-3">
               <Link href="/">
                  <Image
                     src="/logo-audidat-clientes.png"
                     width={100}
                     height={40}
                     alt="Logo audidat"
                  />
               </Link>
            </div>
            <div className="flex items-center justify-end gap-6">
               <div className="flex items-center w-2/4 shadow-2xl rounded-lg overflow-hidden bg-white">
                  <div className="px-4 text-black">
                     <MdOutlineSearch size="18" />
                  </div>
                  <input
                     type="text"
                     placeholder="Buscar ..."
                     className="w-full py-2 text-black focus:outline-none"
                  />
               </div>
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
                        <Link href="#" className="rounded-lg">
                           <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-t-lg">
                              <MdOutlineSettings
                                 size={20}
                                 className="inline mr-2"
                              />
                              Configuración
                           </span>
                        </Link>
                        <Link href="#">
                           <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                              <MdPersonOutline
                                 size={20}
                                 className="inline mr-2"
                              />
                              Perfil
                           </span>
                        </Link>
                        <Link href="#">
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
   );
};

export default Header;
