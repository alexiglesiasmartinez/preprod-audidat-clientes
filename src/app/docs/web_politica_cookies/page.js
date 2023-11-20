import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DocsWebPoliticaDeCookies() {
    return (
        <><Header />
            <div className="pl-16 pr-16 py-7 flex flex-col justify-start items-center gap-5 min-h-[83vh] h-auto">
                <h1 className="text-2xl font-bold text-center">DOCUMENTACIÓN</h1>
                <p><Link href="/ndocs" className="italic underline">Documentación</Link> / <Link href="/docs" className="italic underline">Protección de datos</Link> / <Link href="/docs/protocolo_pagina_web" className="italic underline">Protocolo página web y redes sociales</Link> / <Link href="/docs/web_politica_cookies" className="italic underline">Política de cookies</Link></p>
                <h3 className="text-lg font-bold text-center">Política de cookies</h3>
                <div className="flex flex-col gap-5">
                    <p className="text-justify">Información sobre las cookies empleadas en la página web, con la finalidad de dar cumplimiento con el artículo 22 de la Ley de Servicios de la Sociedad de la Información, así como con los principios de información y consentimiento recogidos en el Reglamento general de protección de datos.</p>
                    <p className="text-justify">Para hacer compatible la mayor exigencia de información que introduce el RGPD y la concisión y comprensión en la forma de presentarla, desde las Autoridades de Protección de Datos se recomienda adoptar un modelo de información por capas o niveles. El enfoque de información multinivel consiste en lo siguiente:</p>
                    <li className="text-justify">Presentar una información básica en un primer nivel, de forma resumida, en el mismo momento y en el mismo medio en que se recojan los datos.</li>
                    <li className="text-justify">Remitir a la información adicional en un segundo nivel, donde se presentarán detalladamente el resto de las informaciones, en un medio más adecuado para su presentación, comprensión y, si se desea, archivo.</li>
                    <p className="text-justify">La presente Política de cookies se elabora siguiendo las citadas directrices.</p>
                </div>
                <div className="grid grid-cols-3 justify-center items-center text-center gap-0">
                    <Link href="/docs/web_politica_cookies">
                        <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                                <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
                            </div>
                            <h1 className="text-mainColor font-bold text-sm">Ventana información básica sobre cookies técnicas</h1>
                        </div>
                    </Link>
                    <Link href="/docs/web_politica_cookies">
                        <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                                <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
                            </div>
                            <h1 className="text-mainColor font-bold text-sm">Política de cookies técnicas</h1>
                        </div>
                    </Link>
                    <Link href="/docs/web_politica_cookies">
                        <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                                <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
                            </div>
                            <h1 className="text-mainColor font-bold text-sm">Ventana y cuadro de configuración de cookies</h1>
                        </div>
                    </Link>
                    <Link href="/docs/web_politica_cookies">
                        <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                                <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
                            </div>
                            <h1 className="text-mainColor font-bold text-sm">Política de cookies</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};