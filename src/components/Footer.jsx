import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
   return (
      <footer className="w-full h-full bg-secondaryGradient text-white text-center sticky top-0 z-10 pl-40 pr-40 shadow-2xl">
         <div className="grid grid-cols-3 justify-center align-middle h-full">
            <div className="flex items-center gap-3">
               <Image
                  src="/logo-audidat-clientes.png"
                  width={150}
                  height={75}
                  alt="Footer"
               />
            </div>
            <div className="flex items-center justify-center gap-4">
               <Link href="/aviso-legal" className="font-light">
                  Aviso Legal
               </Link>
            </div>
            <div className="flex items-center justify-end gap-3">
               <Link
                  href="/normas-uso-archivo-documentos"
                  className="font-light"
               >
                  Normas de uso de archivo de documentos
               </Link>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
