import Image from "next/image";
import TareasList from "@/components/TareasList";
import TareasSummary1 from "@/components/TareasSummary1";
import TareasSummary2 from "@/components/TareasSummary2";
import TareasSummary3 from "@/components/TareasSummary3";
import TareasSummary4 from "@/components/TareasSummary4";
import DashboardLinealGraph from "@/components/DashboardLinealGraph";

import {
  MdShield,
  MdGroups2,
  MdOutlineTransgender,
  MdSpatialAudioOff
} from "react-icons/md";

export default function Home() {
  return (
    <>
      <div className="pl-16 pr-16 py-7 flex flex-col justify-start items-center gap-5 min-h-[83vh] h-auto">
        <h1 className="text-2xl font-bold text-center">INICIO</h1>
        <p className="text-center mb-4">Ten un control de las áreas clave de tu cumplimiento: Protección de Datos, Compliance, Igualdad y Canal Ético. Cada gráfico muestra el porcentaje de cumplimiento, proporcionándote una idea clara de tu progreso.</p>
        <div className="w-full">
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 justify-center items-start mb-4 ml-4 mr-4 h-fit w-full'>
            <div className="flex justify-between items-center gap-4 bg-white rounded-2xl p-12 shadow-md hover:shadow-lg transition duration-300">
              <div className="flex flex-col justify-center items-center gap-3 w-3/6">
                <div className="flex justify-center text-white bg-mainColor w-fit p-3 rounded-full">
                  <MdShield size={25} />
                </div>
                <h1 className="w-full text-center text-lg font-light">Protección de datos</h1>
              </div>
              <TareasSummary1 />
            </div>
            <div className="flex justify-between items-center gap-4 bg-white rounded-2xl p-12 shadow-md hover:shadow-lg transition duration-300">
              <div className="flex flex-col justify-center items-center gap-3 w-3/6">
                <div className="flex justify-center text-white bg-mainColor w-fit p-3 rounded-full">
                  <MdGroups2 size={25} />
                </div>
                <h1 className="w-full text-center text-lg font-light">Compliance</h1>
              </div>
              <TareasSummary2 />
            </div>
            <div className="flex justify-between items-center gap-4 bg-white rounded-2xl p-12 shadow-md hover:shadow-lg transition duration-300 w-full">
              <div className="flex flex-col justify-center items-center gap-3 w-3/6">
                <div className="flex justify-center text-white bg-mainColor w-fit p-3 rounded-full">
                  <MdOutlineTransgender size={25} />
                </div>
                <h1 className="w-full text-center text-lg font-light">Igualdad</h1>
              </div>
              <TareasSummary3 />
            </div>
            <div className="flex justify-between items-center gap-4 bg-white rounded-2xl p-12 shadow-md hover:shadow-lg transition duration-300 w-full">
              <div className="flex flex-col justify-center items-center gap-3 w-3/6">
                <div className="flex justify-center text-white bg-mainColor w-fit p-3 rounded-full">
                  <MdSpatialAudioOff size={25} />
                </div>
                <h1 className="w-full text-center text-lg font-light">Canal ético</h1>
              </div>
              <TareasSummary4 />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-6 w-full p-4">
          {/*<div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">Columna 1</th>
                  <th scope="col" className="py-3 px-6">Columna 2</th>
                  <th scope="col" className="py-3 px-6">Columna 3</th>
                  <th scope="col" className="py-3 px-6">Columna 4</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(6)].map((_, index) => (
                  <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">Dato 1</td>
                    <td className="py-4 px-6">Dato 2</td>
                    <td className="py-4 px-6">Dato 3</td>
                    <td className="py-4 px-6">Dato 4</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-full">
            <DashboardLinealGraph />
          </div>*/}
        </div>
      </div>
    </>
  );
}
