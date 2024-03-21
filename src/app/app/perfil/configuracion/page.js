"use client";
import React, { useState, useEffect } from "react";
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import Link from "next/link";
import dynamic from "next/dynamic";
const Tour = dynamic(() => import("reactour"), { ssr: false });

export default function Perfil_Configuracion() {

    const [isTourOpen, setIsTourOpen] = useState(true);

    useEffect(() => {
        if (window.location.pathname === "/perfil/configuracion") {
            setIsTourOpen(true);
        }
        return () => setIsTourOpen(false);
    }, []);

    const steps = [
        {
            selector: ".div2",
            content:
                "Para que podamos ayudarte a cumplir con tu cumplimiento, activa los avisos para que podamos tenerte informado sobre tu cumplimiento sin correr peligro de sanciones.",
        },
        {
            selector: ".div3",
            content:
                "En esta sección encontrarás toda la información necesaria de tu gestor personal, horario y formas de contactar con él.",
        },
        {
            selector: ".div4",
            content:
                "Aquí podrás ver la última tarea que has realizado.",
        },
        {
            selector: ".div5",
            content:
                "Y aquí el último fichero que has descargado.",
        },
    ];

    return (
        <>
            <Tour
                steps={steps}
                isOpen={isTourOpen}
                onRequestClose={() => setIsTourOpen(false)}
                accentColor="#00375e"
                rounded={5}
            />
            <div className="pl-16 pr-16 py-7 flex flex-col justify-start items-center gap-5 min-h-[83vh]">
                <h1 className="text-2xl font-bold text-center">Configuración</h1>
                <Link className="hover:scale-125 transition-transform duration-300 ease-in-out" href="/app/">
                    <MdOutlineArrowCircleLeft size={40} />
                </Link>

                <div className="w-full max-w-lg">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="div2">
                            <div className="mb-4">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="notificaciones">
                                    Notificaciones
                                </label>
                                <select className="shadow border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="notificaciones">
                                    <option>Desactivadas</option>
                                    <option>Activadas</option>

                                    <option>Solo importantes</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2" htmlFor="idioma">
                                Idioma
                            </label>
                            <select className="shadow border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="idioma">
                                <option>Español</option>
                                <option>Inglés</option>
                                <option>Francés</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2">
                                Opciones de Privacidad
                            </label>
                            <div>
                                <input type="checkbox" id="privacidad1" name="privacidad1" />
                                <label htmlFor="privacidad1" className="ml-2">Ocultar mi perfil</label>
                            </div>
                            <div>
                                <input type="checkbox" id="privacidad2" name="privacidad2" />
                                <label htmlFor="privacidad2" className="ml-2">Deshabilitar seguimiento en línea</label>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <button className="bg-mainColor hover:bg-mainColor2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Guardar Cambios
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
