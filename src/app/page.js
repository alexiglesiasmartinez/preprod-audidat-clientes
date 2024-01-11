"use client";

import TareasSummary1 from "@/components/TareasSummary1";
import TareasSummary2 from "@/components/TareasSummary2";
import TareasSummary3 from "@/components/TareasSummary3";
import TareasSummary4 from "@/components/TareasSummary4";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const Tour = dynamic(() => import('reactour'), { ssr: false });

import {
  MdShield,
  MdGroups2,
  MdOutlineTransgender,
  MdSpatialAudioOff
} from "react-icons/md";

export default function Home() {

  const [isTourOpen, setIsTourOpen] = useState(true);

  useEffect(() => {
    if (window.location.pathname === "/") {
      setIsTourOpen(true);
    }
    return () => setIsTourOpen(false);
  }, []);

  const steps = [
    {
      selector: '.div1',
      content: 'Aquí puedes ver información sobre la Protección de datos.'
    },
    {
      selector: '.div2',
      content: 'Esta sección es para el Compliance.'
    },
    {
      selector: '.div3',
      content: 'Aquí se muestra información sobre Igualdad.'
    },
    {
      selector: '.div4',
      content: 'Y finalmente, esta parte es para el Canal ético.'
    },
  ];

  return (
    <>
      <Tour
        steps={steps}
        isOpen={isTourOpen}
        onRequestClose={() => setIsTourOpen(false)}
        accentColor="#031835"
        rounded={5}
      />
      <div className="pl-16 pr-16 py-7 flex flex-col justify-start items-center gap-5 min-h-[83vh] h-auto">
        <h1 className="text-2xl font-bold text-center">INICIO</h1>
        <p className="text-center mb-4">Ten un control de las áreas clave de tu cumplimiento: Protección de Datos, Compliance, Igualdad y Canal Ético. Cada gráfico muestra el porcentaje de cumplimiento, proporcionándote una idea clara de tu progreso.</p>
        <div className="w-full">
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 justify-center items-start mb-4 ml-4 mr-4 h-fit w-full'>
            <div className="div1">
              <div className="flex justify-between items-center gap-4 bg-white rounded-2xl p-12 shadow-md hover:shadow-lg transition duration-300">
                <div className="flex flex-col justify-center items-center gap-3 w-3/6">
                  <div className="flex justify-center text-white bg-mainColor w-fit p-3 rounded-full">
                    <MdShield size={25} />
                  </div>
                  <h1 className="w-full text-center text-lg font-light">Protección de datos</h1>
                </div>
                <TareasSummary1 />
              </div>
            </div>
            <div className="div2">
              <div className="flex justify-between items-center gap-4 bg-white rounded-2xl p-12 shadow-md hover:shadow-lg transition duration-300">
                <div className="flex flex-col justify-center items-center gap-3 w-3/6">
                  <div className="flex justify-center text-white bg-mainColor w-fit p-3 rounded-full">
                    <MdGroups2 size={25} />
                  </div>
                  <h1 className="w-full text-center text-lg font-light">Compliance</h1>
                </div>
                <TareasSummary2 />
              </div>
            </div>
            <div className="div3">
              <div className="flex justify-between items-center gap-4 bg-white rounded-2xl p-12 shadow-md hover:shadow-lg transition duration-300 w-full">
                <div className="flex flex-col justify-center items-center gap-3 w-3/6">
                  <div className="flex justify-center text-white bg-mainColor w-fit p-3 rounded-full">
                    <MdOutlineTransgender size={25} />
                  </div>
                  <h1 className="w-full text-center text-lg font-light">Igualdad</h1>
                </div>
                <TareasSummary3 />
              </div>
            </div>
            <div className="div4">
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
        </div>
      </div>
    </>
  );
}
