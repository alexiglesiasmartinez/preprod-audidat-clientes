import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DocsPrincipiosRrhh() {
    return (
        <><Header />
            <div className="pl-52 pr-52 py-7 flex flex-col justify-start items-center gap-5 min-h-[83vh] h-auto">
                <h1 className="text-2xl font-bold text-center">DOCUMENTACIÓN</h1>
                <p><Link href="/ndocs" className="italic underline">Documentación</Link> / <Link href="/docs" className="italic underline">Protección de datos</Link> / <Link href="/docs/principios_root" className="italic underline">Cláusulas informativas y textos legales</Link> / <Link href="/docs/principios_rrhh" className="italic underline">Área de recursos humanos</Link></p>
                <h3 className="text-lg font-bold text-center">Área de recursos humanos</h3>
                <p className="text-justify">Este apartado contiene las cláusulas legales necesarias para que el tratamiento de datos por parte del Departamento de Recursos Humanos cumpla con los principios esenciales que recoge el RGPD, informando al interesado (empleado o solicitante de empleo, según el caso) de forma clara, sencilla y accesible y recabando su consentimiento de forma explícita en aquellos supuestos en que sea necesario.</p>
                <p className="text-justify">Así mismo, incluye un documento informativo para los empleados en el que se establecen sus obligaciones en relación con el uso de datos de carácter personal y otras informaciones protegidas por el deber de secreto responsabilidad de la entidad.</p>
                <div className="grid grid-cols-4 justify-center items-center text-center gap-0">
                    <Link href="/docs/principios_rrhh">
                        <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                                <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
                            </div>
                            <h1 className="text-mainColor font-bold text-sm">Información para los empleados en cumplimiento de la normativa de protección de datos personales</h1>
                        </div>
                    </Link>
                    <Link href="/docs/principios_rrhh">
                        <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                                <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
                            </div>
                            <h1 className="text-mainColor font-bold text-sm">Registro diario de jornada</h1>
                        </div>
                    </Link>
                    <Link href="/docs/principios_rrhh">
                        <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                                <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
                            </div>
                            <h1 className="text-mainColor font-bold text-sm">Protocolo de teletrabajo</h1>
                        </div>
                    </Link>
                    <Link href="/docs/principios_rrhh">
                        <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                                <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
                            </div>
                            <h1 className="text-mainColor font-bold text-sm">Política de uso del sistema de información</h1>
                        </div>
                    </Link>
                    <Link href="/docs/principios_rrhh">
                        <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                                <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
                            </div>
                            <h1 className="text-mainColor font-bold text-sm">Decálogo de protección de datos para el personal</h1>
                        </div>
                    </Link>
                    <Link href="/docs/principios_rrhh">
                        <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                                <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
                            </div>
                            <h1 className="text-mainColor font-bold text-sm">Política de mesas limpias</h1>
                        </div>
                    </Link>
                    <Link href="/docs/principios_rrhh">
                        <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                                <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
                            </div>
                            <h1 className="text-mainColor font-bold text-sm">Política de impresoras</h1>
                        </div>
                    </Link>
                    <Link href="/docs/principios_rrhh">
                        <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                                <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
                            </div>
                            <h1 className="text-mainColor font-bold text-sm">Política de destructoras</h1>
                        </div>
                    </Link>
                    <Link href="/docs/principios_rrhh">
                        <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                                <Image src="/ndocs1_3_1_1.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
                            </div>
                            <h1 className="text-mainColor font-bold text-sm">Cláusula informativa para los empleados (Videovigilancia con grabación)</h1>
                        </div>
                    </Link>
                    <Link href="/docs/principios_rrhh">
                        <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                                <Image src="/ndocs1_3_1_1.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
                            </div>
                            <h1 className="text-mainColor font-bold text-sm">Cláusula para solicitantes de empleo (entrega física)</h1>
                        </div>
                    </Link>
                    <Link href="/docs/principios_rrhh">
                        <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                                <Image src="/ndocs1_3_1_1.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
                            </div>
                            <h1 className="text-mainColor font-bold text-sm">Cláusula para solicitantes de empleo (vía electrónica)</h1>
                        </div>
                    </Link>
                    <Link href="/docs/principios_rrhh">
                        <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                                <Image src="/ndocs1_3_1_1.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
                            </div>
                            <h1 className="text-mainColor font-bold text-sm">Cláusula para solicitantes de empleo (entrevista)</h1>
                        </div>
                    </Link>
                    <Link href="/docs/principios_rrhh">
                        <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                                <Image src="/ndocs1_3_1_1.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
                            </div>
                            <h1 className="text-mainColor font-bold text-sm">Política interna de desconexión digital en el ámbito laboral</h1>
                        </div>
                    </Link>
                    <Link href="/docs/firmados_rrhh">
                        <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                                <Image src="/ndocs1_3_2_1.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
                            </div>
                            <h1 className="text-mainColor font-bold text-sm">Archivo de documentos firmados</h1>
                        </div>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};