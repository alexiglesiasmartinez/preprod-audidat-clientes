import React from "react";
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import Link from "next/link";

export default function Perfil_Configuracion() {
    return (
        <>
            <div className="pl-16 pr-16 py-7 flex flex-col justify-start items-center gap-5 min-h-[83vh]">
                <h1 className="text-2xl font-bold text-center">Configuración</h1>
                <Link className="hover:scale-125 transition-transform duration-300 ease-in-out" href="/">
                    <MdOutlineArrowCircleLeft size={40} />
                </Link>

                <div className="w-full max-w-lg">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2" htmlFor="notificaciones">
                                Notificaciones
                            </label>
                            <select className="shadow border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="notificaciones">
                                <option>Activadas</option>
                                <option>Desactivadas</option>
                                <option>Solo importantes</option>
                            </select>
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
