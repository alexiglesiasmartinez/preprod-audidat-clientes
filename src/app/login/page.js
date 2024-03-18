"use client";

import '../globals.css';
import './temporal.css';
import { useEffect, useState } from 'react';

export default function Login() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className={`min-h-screen flex ${isMounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ease-out`}>
            <div className={`w-2/3 bg-cover bg-no-repeat bg-center shadow-lg filter brightness-90`} style={{ backgroundImage: 'url("https://audidat.comply360.eu/wp-content/uploads/2024/02/OFI2.jpg")' }}></div>

            <div className={`w-1/3 flex justify-center items-center`}>
                <form className="w-full max-w-md">
                    <div className="mb-6">
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Usuario</label>
                        <input type="text" id="username" name="username"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mainColor focus:border-mainColor block w-full p-2.5" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Contraseña</label>
                        <input type="password" id="password" name="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mainColor focus:border-mainColor block w-full p-2.5" />
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <a href="#" className="text-sm text-mainColor2 hover:underline">¿Olvidaste tu contraseña?</a>
                    </div>
                    <button type="button" className="text-white bg-mainColor hover:bg-mainColor2 focus:ring-4 focus:outline-none focus:ring-mainColor2 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Iniciar sesión</button>
                </form>
            </div>
        </div>
    );
}
