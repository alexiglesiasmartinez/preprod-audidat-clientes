import React from "react";
import { MdOutlineArrowCircleLeft, MdOutlinePassword, MdSettingsBackupRestore, MdInfo } from "react-icons/md";
import Link from "next/link";

export default function Perfil_Datos() {
    // Datos de ejemplo, reemplazar con datos reales del usuario
    const usuario = {
        nombre: "Juan Pérez",
        cif: "B12345678",
        telefono: "600123456",
        email: "juan.perez@example.com",
        direccion: "Calle Falsa 123, Madrid",
        codigoPostal: "28080",
        provincia: "Madrid"
    };

    return (
        <>
            <div className="pl-16 pr-16 py-7 flex flex-col justify-start items-center gap-5 min-h-[83vh]">
                <h1 className="text-2xl font-bold text-center">Mi Perfil</h1>
                <Link className="hover:scale-125 transition-transform duration-300 ease-in-out" href="/app/">
                    <MdOutlineArrowCircleLeft size={40} />
                </Link>

                <div className="w-full max-w-lg">
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="text-black font-bold">Nombre:</label>
                            <p className="text-black">{usuario.nombre}</p>
                        </div>
                        <div className="mb-4">
                            <label className="text-black font-bold">CIF:</label>
                            <p className="text-black">{usuario.cif}</p>
                        </div>
                        <div className="mb-4">
                            <label className="text-black font-bold">Teléfono:</label>
                            <p className="text-black">{usuario.telefono}</p>
                        </div>
                        <div className="mb-4">
                            <label className="text-black font-bold">Email:</label>
                            <p className="text-black">{usuario.email}</p>
                        </div>
                        <div className="mb-4">
                            <label className="text-black font-bold">Dirección:</label>
                            <p className="text-black">{usuario.direccion}</p>
                        </div>
                        <div className="mb-4">
                            <label className="text-black font-bold">Código Postal:</label>
                            <p className="text-black">{usuario.codigoPostal}</p>
                        </div>
                        <div className="mb-4">
                            <label className="text-black font-bold">Provincia:</label>
                            <p className="text-black">{usuario.provincia}</p>
                        </div>

                        <div className="flex items-start justify-between flex-col mt-6 gap-2">
                            <button className="flex items-center gap-2 bg-mainColor hover:bg-mainColor2 text-white font-bold text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                <MdInfo />
                                <span>Solicitar Cambio de Datos</span>
                            </button>
                            <button className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                <MdOutlinePassword />
                                <span>Cambiar Contraseña</span>
                            </button>
                            <button className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white font-bold text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                <MdSettingsBackupRestore />
                                <span>Recuperar Contraseña</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
