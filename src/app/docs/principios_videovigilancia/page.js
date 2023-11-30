import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function DocsPrincipiosVideovigilancia() {
    return (
        <>
            <div className="pl-16 pr-16 py-7 flex flex-col justify-start items-center gap-5 min-h-[83vh] h-auto">
                <h1 className="text-2xl font-bold text-center">DOCUMENTACIÓN</h1>
                <p><Link href="/ndocs" className="italic underline">Documentación</Link> / <Link href="/docs" className="italic underline">Protección de datos</Link> / <Link href="/docs/principios_root" className="italic underline">Cláusulas informativas y textos legales</Link> / <Link href="/docs/principios_videovigilancia" className="italic underline">Videovigilancia</Link></p>
                <h3 className="text-lg font-bold text-center">Videovigilancia</h3>
                <p className="text-justify">Distintivos e impresos para dar cumplimiento con los principios de transparencia e información recogidos en el Reglamento general de protección de datos, así como con lo establecido en el artículo 22 de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, en relación con la utilización de sistemas de videovigilancia.</p>
                <div className="grid grid-cols-3 justify-center items-center text-center gap-0">
                    <Link href="/docs/principios_videovigilancia">
                        <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                                <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
                            </div>
                            <h1 className="text-mainColor font-bold text-sm">Instrucciones y recomendaciones sobre videovigilancia</h1>
                        </div>
                    </Link>
                    <Link href="/docs/principios_videovigilancia">
                        <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                                <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
                            </div>
                            <h1 className="text-mainColor font-bold text-sm">Cartel videovigilancia (con grabación)</h1>
                        </div>
                    </Link>
                    <Link href="/docs/principios_videovigilancia">
                        <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                                <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
                            </div>
                            <h1 className="text-mainColor font-bold text-sm">Información videovigilancia (con grabación)</h1>
                        </div>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};