"use client";
import "../../../globals.css";
import { SignUp } from "@clerk/nextjs";

export default function Registro_Page() {
   return (
      <div className="min-h-screen flex transition-opacity duration-1000 ease-out">
         <div
            className={`w-2/3 bg-cover bg-no-repeat bg-center shadow-lg filter brightness-90`}
            style={{
               backgroundImage:
                  'url("https://audidat.comply360.eu/wp-content/uploads/2024/02/OFI2.jpg")',
            }}
         ></div>

         <div className="w-1/3 flex justify-center items-center flex-col gap-5">
            <h1 className="text-2xl font-bold">Regístrate</h1>
            <h1 className="text-lg font-medium -mt-6">Audidat Clientes</h1>
            <SignUp />
         </div>
      </div>
   );
}
