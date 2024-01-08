import React from "react";
import { MdOutlineArrowCircleLeft, MdDeleteForever, MdRemoveRedEye } from "react-icons/md";
import Link from "next/link";

export default function Tickets_Cerrados() {

   // Datos de ejemplo para los tickets
   const tickets = [
      { id: 1, nombre: "Ticket 1", asunto: "Asunto 1", descripcion: "Descripción del ticket 1", estado: "Cerrado" },
      { id: 2, nombre: "Ticket 2", asunto: "Asunto 2", descripcion: "Descripción del ticket 2", estado: "Cerrado" },
      { id: 2, nombre: "Ticket 3", asunto: "Asunto 3", descripcion: "Descripción del ticket 3", estado: "Cerrado" },
      { id: 2, nombre: "Ticket 4", asunto: "Asunto 4", descripcion: "Descripción del ticket 4", estado: "Cerrado" },
      { id: 2, nombre: "Ticket 5", asunto: "Asunto 5", descripcion: "Descripción del ticket 5", estado: "Cerrado" },
   ];

   return (
      <>
         <div className="pl-16 pr-16 py-7 flex flex-col justify-start items-center gap-5 min-h-[83vh]">
            <h1 className="text-2xl font-bold text-center">REPORTES CERRADOS</h1>
            <Link className="hover:scale-125 transition-transform duration-300 ease-in-out" href="/tickets">
               <MdOutlineArrowCircleLeft size={40} />
            </Link>
            <div className="w-full">
               <div className="p-8">
                  <div className="overflow-x-auto">
                     <table className="min-w-full table-auto bg-white shadow-md rounded">
                        <thead className="bg-gray-200">
                           <tr>
                              <th className="px-4 py-2 text-left text-black font-bold">ID</th>
                              <th className="px-4 py-2 text-left text-black font-bold">Nombre</th>
                              <th className="px-4 py-2 text-left text-black font-bold">Asunto</th>
                              <th className="px-4 py-2 text-left text-black font-bold">Descripción</th>
                              <th className="px-4 py-2 text-left text-black font-bold">Estado</th>
                              <th className="px-4 py-2 text-left text-black font-bold">Acciones</th>

                           </tr>
                        </thead>
                        <tbody>
                           {tickets.map((ticket) => (
                              <tr key={ticket.id} className="border-b">
                                 <td className="px-4 py-2">{ticket.id}</td>
                                 <td className="px-4 py-2">{ticket.nombre}</td>
                                 <td className="px-4 py-2">{ticket.asunto}</td>
                                 <td className="px-4 py-2">{ticket.descripcion}</td>
                                 <td className="px-4 py-2">{ticket.estado}</td>
                                 <td className="px-4 py-2 text-center flex items-center">
                                    <Link className="text-mainColor text-2xl mr-2" href="/tickets/ver"><MdRemoveRedEye className="hover:scale-125 transition-transform duration-300 ease-in-out" /></Link>
                                    <Link className="text-mainColor text-2xl" href="/tickets/cerrados"><MdDeleteForever className="hover:scale-125 transition-transform duration-300 ease-in-out text-red-900" /></Link>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};