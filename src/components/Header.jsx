import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
   MdOutlineSearch,
   MdOutlineMessage,
   MdOutlineNotificationsNone,
   MdLogout,
} from "react-icons/md";

const Header = () => {
   return (
      <header className="bg-secondaryGradient text-white text-center sticky z-10 p-5 shadow-2xl rounded-md">
         <div className="grid grid-cols-2 align-middle">
            <div className="flex items-center gap-3">
               <Link href="/">
                  <p className="font-bold">AUDIDAT 3.0, S.L.</p>
               </Link>
            </div>
            <div className="flex items-center justify-end gap-6">
               <div className="flex items-center bg-mainColor2 w-2/4 shadow-2xl rounded-lg overflow-hidden">
                  <div className="px-4 text-white">
                     <MdOutlineSearch size="18" />
                  </div>
                  <input
                     type="text"
                     placeholder="Buscar ..."
                     className="w-full bg-inherit py-2 text-white focus:outline-none"
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
               <div className="transition transform hover:scale-125">
                  <Link href="#">
                     <MdLogout size={20} />
                  </Link>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
