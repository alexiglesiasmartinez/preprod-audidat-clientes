import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
   return (
      <header className="w-full h-full bg-secondaryGradient text-white text-center sticky top-0 z-10 pl-5 pr-5 shadow-2xl">
         <div className="grid grid-cols-3 align-middle">
            <div className="flex items-center gap-3">
               <Link href="/" className="font-light">
                  <Image
                     src="/logo-audidat-clientes.png"
                     width={100}
                     height={50}
                  />
               </Link>
               <Link href="/" className="font-light">
                  <p className="font-bold">AUDIDAT 3.0, S.L.</p>
               </Link>
            </div>
            <div className="flex items-center justify-center gap-4">
               <Link href="/" className="font-light">
                  Inicio
               </Link>
               <Link href="/ndocs" className="font-light">
                  Documentación
               </Link>
            </div>
            <div className="flex items-center justify-end gap-3">Logout</div>
         </div>
      </header>
   );
};

export default Header;
