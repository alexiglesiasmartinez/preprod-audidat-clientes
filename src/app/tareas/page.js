import React from "react";
import TareasList from "@/components/TareasList";
import TareasSummary from "@/components/TareasSummary";
import Footer from "@/components/Footer";

import {
   MdDashboard,
   MdCheckCircle,
   MdClose
} from "react-icons/md";

export default function Tareas() {
   return (
      <>
         <div className="pl-16 pr-16 py-7 flex flex-col justify-start items-center gap-5 min-h-[83vh] h-auto">
            <h1 className="text-2xl font-bold text-center">TAREAS</h1>
            <div>
               <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 justify-center items-start mb-4 ml-4 mr-4 h-fit'>
                  <div className="flex justify-between items-center gap-4 bg-white rounded-lg p-12 shadow-md hover:shadow-lg transition duration-300">
                     <div className="flex flex-col justify-center items-center gap-3 w-3/6">
                        <div className="flex justify-center text-white bg-mainColor w-fit p-2 rounded-full">
                           <MdCheckCircle />
                        </div>
                        <h1 className="w-full text-center">Completas</h1>
                        <h1 className="text-5xl font-black w-full text-center">14</h1>
                     </div>
                     <TareasSummary />
                  </div>
                  <div className="flex justify-between items-center gap-4 bg-white rounded-lg p-12 shadow-md hover:shadow-lg transition duration-300">
                     <div className="flex flex-col justify-center items-center gap-3 w-3/6">
                        <div className="flex justify-center text-white bg-mainColor w-fit p-2 rounded-full">
                           <MdClose />
                        </div>
                        <h1 className="w-full text-center">Incompletas</h1>
                        <h1 className="text-5xl font-black w-full text-center">5</h1>
                     </div>
                     <TareasSummary />
                  </div>
               </div>
               <TareasList />
               <TareasList />
            </div>
         </div>
         {/*<Footer />*/}
      </>
   );
};