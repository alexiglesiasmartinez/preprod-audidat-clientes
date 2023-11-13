import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DocsProtocoloPaginasWeb() {
    return (
        <>
            <Header />
            <div className="pl-52 pr-52 py-7 flex flex-col justify-start items-center gap-5 min-h-[83vh] h-auto">
                <h1 className="text-2xl font-bold text-center">DOCUMENTACIÓN</h1>
                <p><Link href="/ndocs" className="italic underline">Documentación</Link> / <Link href="/docs" className="italic underline">Protección de datos</Link> / <Link href="/docs/protocolo_pagina_web" className="italic underline">Protocolo página web y redes sociales</Link></p>
                <h3 className="text-lg font-bold text-center">Protocolo página web y redes sociales</h3>
                <div className="grid grid-cols-4 justify-center items-center text-center gap-0">
                    <Link href="/docs/web_politica_privacidad">
                        <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                                <Image src="/ndocs1_4_1.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
                            </div>
                            <h1 className="text-mainColor font-bold text-sm">Política de privacidad</h1>
                        </div>
                    </Link>
                    <Link href="/docs/web_politica_proteccion_datos">
                        <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                                <Image src="/ndocs1_4_2.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
                            </div>
                            <h1 className="text-mainColor font-bold text-sm">Compromiso con la protección de datos personales</h1>
                        </div>
                    </Link>
                    <Link href="/docs/web_politica_cookies">
                        <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                                <Image src="/ndocs1_4_3.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
                            </div>
                            <h1 className="text-mainColor font-bold text-sm">Política de cookies</h1>
                        </div>
                    </Link>
                    <Link href="/docs/redes_sociales">
                        <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                                <Image src="/ndocs1_4_4.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
                            </div>
                            <h1 className="text-mainColor font-bold text-sm">Redes sociales</h1>
                        </div>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};