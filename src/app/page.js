import Image from "next/image";
import TareasList from "@/components/TareasList";
import TareasSummary from "@/components/TareasSummary";
import DashboardLinealGraph from "@/components/DashboardLinealGraph";
import Footer from "@/components/Footer";

import {
  MdDashboard,
  MdCheckCircle,
  MdClose
} from "react-icons/md";

export default function Home() {
  return (
    <>

      <div className="pl-16 pr-16 py-7 flex flex-col justify-start items-center gap-5 min-h-[83vh] h-auto">
        <h1 className="text-2xl font-bold text-center">INICIO</h1>
        <div className="w-full">
          <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 justify-center items-start mb-4 ml-4 mr-4 h-fit w-full'>
            <div className="flex justify-between items-center gap-4 bg-white rounded-2xl p-12 shadow-md hover:shadow-lg transition duration-300">
              <div className="flex flex-col justify-center items-center gap-3 w-3/6">
                <div className="flex justify-center text-white bg-mainColor w-fit p-2 rounded-full">
                  <MdCheckCircle />
                </div>
                <h1 className="w-full text-center">Dato 1</h1>
                <h1 className="text-5xl font-black w-full text-center">14</h1>
              </div>
              <TareasSummary />
            </div>
            <div className="flex justify-between items-center gap-4 bg-white rounded-2xl p-12 shadow-md hover:shadow-lg transition duration-300">
              <div className="flex flex-col justify-center items-center gap-3 w-3/6">
                <div className="flex justify-center text-white bg-mainColor w-fit p-2 rounded-full">
                  <MdCheckCircle />
                </div>
                <h1 className="w-full text-center">Dato 2</h1>
                <h1 className="text-5xl font-black w-full text-center">14</h1>
              </div>
              <TareasSummary />
            </div>
            <div className="flex justify-between items-center gap-4 bg-white rounded-2xl p-12 shadow-md hover:shadow-lg transition duration-300 w-full">
              <div className="flex flex-col justify-center items-center gap-3 w-3/6">
                <div className="flex justify-center text-white bg-mainColor w-fit p-2 rounded-full">
                  <MdClose />
                </div>
                <h1 className="w-full text-center">Dato 3</h1>
                <h1 className="text-5xl font-black w-full text-center">5</h1>
              </div>
              <TareasSummary />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-6">
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
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

          <div>
            <DashboardLinealGraph />
          </div>
        </div>
      </div>
    </>
  );
}
