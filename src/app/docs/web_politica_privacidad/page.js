import Image from "next/image";
import Link from "next/link";

export default function DocsWebPoliticaDePrivacidad() {
    return (
        <div className="pl-52 pr-52 py-7 flex flex-col justify-start items-center gap-5 min-h-[83vh] h-auto">
            <h1 className="text-2xl font-bold text-center">DOCUMENTACIÓN</h1>
            <p><Link href="/ndocs" className="italic underline">Documentación</Link> / <Link href="/docs" className="italic underline">Protección de datos</Link> / <Link href="/docs/protocolo_pagina_web" className="italic underline">Protocolo página web y redes sociales</Link> / <Link href="/docs/web_politica_privacidad" className="italic underline">Política de privacidad</Link></p>
            <h3 className="text-lg font-bold text-center">Política de privacidad</h3>
            <div className="flex flex-col gap-5">
                <p className="text-justify">El Reglamento general de protección de datos proporciona un marco modernizado y basado en la rendición de cuentas para la protección de los datos en Europa.</p>
                <p className="text-justify">En tal sentido, el artículo 12 del RGPD, bajo el epígrafe 'Transparencia de la información, comunicación y modalidades de ejercicio de los derechos del interesado', establece lo siguiente en su apartado 1:</p>
                <p className="text-justify">El responsable del tratamiento tomará las medidas oportunas para facilitar al interesado toda información indicada en los artículos 13 y 14, así como cualquier comunicación con arreglo a los artículos 15 a 22 y 34 relativa al tratamiento, en forma concisa, transparente, inteligible y de fácil acceso, con un lenguaje claro y sencillo, en particular cualquier información dirigida específicamente a un niño. La información será facilitada por escrito o por otros medios, inclusive, si procede, por medios electrónicos. Cuando lo solicite el interesado, la información podrá facilitarse verbalmente siempre que se demuestre la identidad del interesado por otros medios.</p>
                <p className="text-justify">Para hacer compatible la mayor exigencia de información que introduce el RGPD y la concisión y comprensión en la forma de presentarla, desde las Autoridades de Protección de Datos se recomienda adoptar un modelo de información por capas o niveles. El enfoque de información multinivel consiste en lo siguiente:</p>
                <li className="text-justify">Presentar una información básica en un primer nivel, de forma resumida, en el mismo momento y en el mismo medio en que se recojan los datos.</li>
                <li className="text-justify">Remitir a la información adicional en un segundo nivel, donde se presentarán detalladamente el resto de las informaciones, en un medio más adecuado para su presentación, comprensión y, si se desea, archivo.</li>
                <p className="text-justify">La presente Política de Privacidad se elabora siguiendo las citadas directrices.</p>
            </div>
            <div className="grid grid-cols-4 justify-center items-center text-center gap-0">
                <Link href="/docs/web_politica_privacidad">
                    <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                            <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} />
                        </div>
                        <h1 className="text-mainColor font-bold text-sm">Información básica</h1>
                    </div>
                </Link>
                <Link href="/docs/web_politica_privacidad">
                    <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                            <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} />
                        </div>
                        <h1 className="text-mainColor font-bold text-sm">Política de privacidad</h1>
                    </div>
                </Link>
                <Link href="/docs/web_politica_privacidad">
                    <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                            <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} />
                        </div>
                        <h1 className="text-mainColor font-bold text-sm">Casillas de obtención del consentimiento</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
};