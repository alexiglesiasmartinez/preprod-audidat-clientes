import React from "react";
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import Link from "next/link";

export default function Perfil_Ayuda() {
    return (
        <>
            <div className="pl-16 pr-16 py-7 flex flex-col justify-start items-center gap-5 min-h-[83vh]">
                <h1 className="text-2xl font-bold text-center">Ayuda y Soporte</h1>
                <Link className="hover:scale-125 transition-transform duration-300 ease-in-out" href="/">
                    <MdOutlineArrowCircleLeft size={40} />
                </Link>

                <div className="w-full max-w-2xl">
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h2 className="text-xl font-bold mb-4">Preguntas Frecuentes</h2>
                        <p className="mb-2"><strong>¿Cómo puedo cambiar mi contraseña?</strong></p>
                        <p className="mb-4 ml-5">Para cambiar tu contraseña, ve a la configuración de tu perfil y selecciona 'Cambiar contraseña'.</p>

                        <p className="mb-2"><strong>¿Dónde puedo ver mi documentación?</strong></p>
                        <p className="mb-4 ml-5">Puedes encontrar toda tu documentación en la sección 'Audidat 360'.</p>

                        <h2 className="text-xl font-bold mt-6 mb-4">Soporte Técnico</h2>
                        <p className="mb-2">Si tienes problemas técnicos o preguntas, no dudes en contactarnos:</p>
                        <ul className="list-disc list-inside mb-4 ml-5">
                            <li>Email: ayuda@audidat.com</li>
                            <li>Teléfono: +34 900 568 885</li>
                        </ul>

                        <h2 className="text-xl font-bold mt-6 mb-4">Formulario de Contacto</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="asunto">
                                    Asunto
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="asunto" type="text" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="mensaje">
                                    Mensaje
                                </label>
                                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" id="mensaje"></textarea>
                            </div>
                            <button className="bg-mainColor hover:bg-mainColor2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
