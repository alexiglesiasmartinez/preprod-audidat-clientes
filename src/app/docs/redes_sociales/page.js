import Image from "next/image";
import Link from "next/link";

export default function DocsRedesSociales() {
    return (
        <div className="pl-52 pr-52 py-7 flex flex-col justify-start items-center gap-5 min-h-[83vh] h-auto">
            <h1 className="text-2xl font-bold text-center">DOCUMENTACIÓN</h1>
            <p><Link href="/ndocs" className="italic underline">Documentación</Link> / <Link href="/docs" className="italic underline">Protección de datos</Link> / <Link href="/docs/protocolo_pagina_web" className="italic underline">Protocolo página web y redes sociales</Link> / <Link href="/docs/redes_sociales" className="italic underline">Redes sociales</Link></p>
            <h3 className="text-lg font-bold text-center">Redes sociales</h3>
            <div className="flex flex-col gap-5">
                <p className="text-justify">Un uso inadecuado de las redes sociales puede conllevar importantes riesgos para los derechos y libertades de las personas físicas. En su consecuencia, el objeto del presente documento es establecer una «Guía de uso y buenas prácticas de las redes sociales», a fin de garantizar un correcto cumplimiento de la normativa de protección de datos personales en relación con la utilización de las redes sociales de la entidad por parte del personal autorizado de la misma.</p>
                <p className="text-justify">A tal fin, se han seguido las orientaciones y directrices recogidas en los siguientes documentos:</p>
                <li className="text-justify">«Buenas prácticas en Redes Sociales». CCN-CERT BP/08. Centro Criptológico Nacional (CCN). Agosto 2018.</li>
                <li className="text-justify">Guía de Seguridad de las TIC. CCN-STIC 821. Apéndice V: Normas de Creación y Uso de Contraseñas NP40. Centro Criptológico Nacional (CCN).</li>
                <li className="text-justify">Consideraciones a tener en cuenta al publicar en redes sociales. Oficina de Seguridad del Internauta (OSI) del Instituto Nacional de Ciberseguridad de España (INCIBE).</li>
                <li className="text-justify">Recomendaciones de la Agencia Española de Protección de Datos (AEPD).</li>
                <p className="text-justify">La presente Política de cookies se elabora siguiendo las citadas directrices.</p>
            </div>
            <div className="grid grid-cols-4 justify-center items-center text-center gap-0">
                <Link href="/docs/redes_sociales">
                    <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                            <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} />
                        </div>
                        <h1 className="text-mainColor font-bold text-sm">Guía de uso y buenas prácticas de las redes sociales</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
};