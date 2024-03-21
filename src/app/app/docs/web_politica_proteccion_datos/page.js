import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function DocsWebPoliticaProteccionDatos() {
    return (
        <>
            <div className="pl-16 pr-16 py-7 flex flex-col justify-start items-center gap-5 min-h-[83vh] h-auto">
                <h1 className="text-2xl font-bold text-center">DOCUMENTACIÓN</h1>
                <p><Link href="/app/ndocs" className="italic underline">Documentación</Link> / <Link href="/app/docs" className="italic underline">Protección de datos</Link> / <Link href="/app/docs/protocolo_pagina_web" className="italic underline">Protocolo página web y redes sociales</Link> / <Link href="/app/docs/web_politica_proteccion_datos" className="italic underline">Compromiso con la protección de datos personales</Link></p>
                <h3 className="text-lg font-bold text-center">Compromiso con la protección de datos personales</h3>
                <div className="flex flex-col gap-5">
                    <p className="text-justify">Texto a través del cual la entidad informa a todas las personas (usuarias o no de la página web) de su compromiso con el cumplimiento de la normativa de protección de datos personales. Esta información deberá facilitarse a través de un enlace disponible en la página web, bajo la denominación COMPROMISO CON LA PROTECCIÓN DE DATOS PERSONALES. Dicho enlace deberá estar disponible, preferiblemente, en la parte de arriba de la página web, para facilitar su visibilidad y accesibilidad.</p>
                </div>
                <div className="grid grid-cols-3 justify-center items-center text-center gap-0">
                    <Link href="/app/docs/web_politica_proteccion_datos">
                        <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                                <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
                            </div>
                            <h1 className="text-mainColor font-bold text-sm">Compromiso con la protección de datos personales</h1>
                        </div>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};