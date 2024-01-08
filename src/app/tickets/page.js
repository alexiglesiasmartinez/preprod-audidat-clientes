import React from "react";
import { MdAddCircleOutline, MdPendingActions, MdCheckCircle } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";


export default function Tickets() {
   return (
      <>
         <div className="pl-16 pr-16 py-7 flex flex-col justify-start items-center gap-5 min-h-[83vh]">
            <h1 className="text-2xl font-bold text-center">SISTEMA DE REPORTES</h1>
            <div className="flex items-center gap-3">
               <Link href="/tickets/nueva">
                  <div className="flex flex-col justify-center items-center gap-4 h-52 w-60 rounded-3xl border border-gray-200 shadow-lg p-4 m-2 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                     <Image src="/ticketSystemAdd.png" width={80} height={80} alt="doc" />
                     <span className="text-lg">Nueva consulta</span>
                  </div>
               </Link>
               <Link href="/tickets/pendientes">
                  <div className="flex flex-col justify-center items-center gap-4 h-52 w-60 rounded-3xl border border-gray-200 shadow-lg p-4 m-2 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                     <Image src="/ticketSystemPending.png" width={80} height={80} alt="doc" />
                     <span className="text-lg text-center">Consultas pendientes</span>
                  </div>
               </Link>
               <Link href="/tickets/cerrados">
                  <div className="flex flex-col justify-center items-center gap-4 h-52 w-60 rounded-3xl border border-gray-200 shadow-lg p-4 m-2 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                     <Image src="/ticketSystemClosed.png" width={80} height={80} alt="doc" />
                     <span className="text-lg">Consultas cerradas</span>
                  </div>
               </Link>
            </div>
            <div className="w-full mt-5">
               <h2 className="text-xl font-semibold text-center mb-5">Preguntas Frecuentes</h2>
               <div className="flex flex-col items-center gap-4">
                  <FaqItem
                     question="¿Cómo puedo crear una nueva consulta?"
                     answer="Para crear una nueva consulta, haz clic en 'Nueva consulta' y sigue las instrucciones."
                  />
                  <FaqItem
                     question="¿Cómo puedo ver el estado de mis consultas pendientes?"
                     answer="En la sección 'Consultas pendientes' podrás ver todas tus consultas en curso."
                  />
                  <FaqItem
                     question="¿Qué sucede cuando una consulta se cierra?"
                     answer="Una consulta se considera cerrada cuando se ha resuelto tu problema o duda. Puedes revisarlas en 'Consultas cerradas'."
                  />
               </div>
            </div>
         </div>
      </>
   );
};

function FaqItem({ question, answer }) {
   return (
      <div className="border border-gray-200 shadow p-5 rounded-lg w-3/4">
         <h3 className="font-semibold">{question}</h3>
         <p className="mt-2 ml-7">{answer}</p>
      </div>
   );
}