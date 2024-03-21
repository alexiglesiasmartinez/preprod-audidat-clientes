import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function DocsPoliticaProteccionDatos() {
    return (
        <>
            <div className="pl-16 pr-16 py-7 flex flex-col justify-start items-center gap-5 min-h-[83vh] h-auto">
                <h1 className="text-2xl font-bold text-center">DOCUMENTACIÓN</h1>
                <p><Link href="/app/ndocs" className="italic underline">Documentación</Link> / <Link href="/app/docs" className="italic underline">Protección de datos</Link> / <Link href="/app/docs/politica_proteccion_datos" className="italic underline">Política de protección de datos</Link></p>
                <h3 className="text-lg font-bold text-center">Política de protección de datos</h3>
                <p className="text-justify">La Dirección u Órgano de Gobierno del responsable del tratamiento debe asumir la máxima responsabilidad y compromiso con el establecimiento, implementación y mantenimiento de una Política de Protección de Datos, garantizando la mejora continua del responsable del tratamiento con el objetivo de alcanzar la excelencia en relación con el cumplimiento del Reglamento general de protección de datos (Reglamento (UE) 2016/679), y de la Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales (Ley Orgánica 3/2018).

                </p>
                <div className="grid grid-cols-3 justify-center items-center text-center gap-0">
                    <Link href="/app/docs/politica_proteccion_datos">
                        <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                                <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
                            </div>
                            <h1 className="text-mainColor font-bold text-sm">Documento de política de protección de datos (documento original)</h1>
                        </div>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};