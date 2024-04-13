"use client";

import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import '@/app/globals.css';

export default function LoginPage() {
   const [loading, setLoading] = useState(false);
   const router = useRouter();

   const handleSubmit = async (event) => {
      event.preventDefault();
      setLoading(true);
      const email = event.target.email.value;
      const password = event.target.password.value;

      const response = await fetch('/api/login', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
         toast.success('¡Bienvenido! Has iniciado sesión.');
         router.push('/app');
      } else {
         setLoading(false);
         try {
            const data = await response.json();
            if (response.status === 401) {
               toast.error(data.error || "Credenciales inválidas.");
            } else if (response.status === 500) {
               toast.error(data.error || "Error interno del servidor. Por favor, inténtalo más tarde.");
            } else {
               toast.error("Error al iniciar sesión.");
            }
         } catch (error) {
            toast.error("Error al iniciar sesión. Por favor, verifica tu conexión a Internet.");
         }
      }
   };

   return (
      <>
         <Toaster />
         <div className="min-h-screen flex transition-opacity duration-1000 ease-out">
            <div className="w-2/3 bg-cover bg-no-repeat bg-center shadow-lg filter brightness-90 bg-[url('/audidat-login.jpg')]"></div>
            <div className="w-1/3 flex justify-center items-center flex-col">
               <div className="flex justify-center items-center flex-col border border-gray-100 rounded-2xl shadow-lg md:w-3/4 md:h-2/3 lg:w-2/3 lg:h-3/5">
                  {loading ? (
                     <span>Autenticando ...</span>
                  ) : (
                     <>
                        <Image src="/logo-audidat-clientes.png" width={200} height={100} alt="Audidat logo" className="mb-6" />
                        <h1 className="text-2xl font-bold">Audidat Clientes</h1>
                        <h1 className="text-lg font-medium mb-5">Iniciar sesión</h1>
                        <form onSubmit={handleSubmit} className="flex flex-col items-start w-3/4">
                           <input
                              className="p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-gray-600 text-black w-full text-center"
                              id="email"
                              name="email"
                              type="text"
                              placeholder="Correo electrónico"
                           />
                           <input
                              className="p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-gray-600 text-black w-full text-center"
                              id="password"
                              name="password"
                              type="password"
                              placeholder="Contraseña"
                           />
                           <button
                              type="submit"
                              className="py-2 px-4 border border-mainColor text-white rounded-lg focus:outline-none focus:border-gray-600 bg-mainGradient uppercase font-bold w-full">
                              <span className="text-left">Iniciar sesión</span>
                           </button>
                           <Link className="mt-4 text-gray-500 text-sm font-light hover:underline text-center w-full" href="/app" prefetch={false}>¿Has olvidado tu contraseña?</Link>
                        </form>
                     </>
                  )}
               </div>
            </div>
         </div>
      </>
   );
}