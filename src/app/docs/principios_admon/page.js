import Image from "next/image";
import Link from "next/link";

export default function DocsPrincipiosAdmon() {
    return (
        <div className="pl-52 pr-52 py-7 flex flex-col justify-start items-center gap-5 min-h-[83vh] h-auto">
            <h1 className="text-2xl font-bold text-center">DOCUMENTACIÓN</h1>
            <p><Link href="/ndocs" className="italic underline">Documentación</Link> / <Link href="/docs" className="italic underline">Protección de datos</Link> / <Link href="/docs/principios_root" className="italic underline">Cláusulas informativas y textos legales</Link> / <Link href="/docs/principios_admon" className="italic underline">Área de administración</Link></p>
            <h3 className="text-lg font-bold text-center">Área de administración</h3>
            <p className="text-justify">Este apartado contiene las cláusulas legales necesarias para que el tratamiento de datos por parte del Departamento de Administración cumpla con los principios esenciales que recoge el RGPD, informando al interesado de forma clara, sencilla y accesible y recabando su consentimiento de forma explícita en aquellos supuestos en que sea necesario. Se proporciona un sistema de información por capas, tal y como recomienda la Agencia Española de Protección de Datos, comenzando con mensajes muy básicos y ampliando la información de manera gradual. Debe hacerse así debido a que la información que obliga a proporcionar el RGPD es muy amplia, y no sería práctico entregar una cláusula tan extensa en todas las situaciones.</p>
            <div className="grid grid-cols-4 justify-center items-center text-center gap-0">
                <Link href="/docs/principios_admon">
                    <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                            <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} />
                        </div>
                        <h1 className="text-mainColor font-bold text-sm">Cartel informativo</h1>
                    </div>
                </Link>
                <Link href="/docs/principios_admon">
                    <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                            <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} />
                        </div>
                        <h1 className="text-mainColor font-bold text-sm">Cláusula informativa (formato estándar)</h1>
                    </div>
                </Link>
                <Link href="/docs/principios_admon">
                    <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                            <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} />
                        </div>
                        <h1 className="text-mainColor font-bold text-sm">Cláusula informativa básica (formato reducido)</h1>
                    </div>
                </Link>
                <Link href="/docs/principios_admon">
                    <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                            <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} />
                        </div>
                        <h1 className="text-mainColor font-bold text-sm">Cláusula informativa detallada (formato ampliado)</h1>
                    </div>
                </Link>
                <Link href="/docs/principios_admon">
                    <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                            <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} />
                        </div>
                        <h1 className="text-mainColor font-bold text-sm">Pie correo electrónico</h1>
                    </div>
                </Link>
                <Link href="/docs/principios_admon">
                    <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                            <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} />
                        </div>
                        <h1 className="text-mainColor font-bold text-sm">Cláusula contratos</h1>
                    </div>
                </Link>
                <Link href="/docs/principios_admon">
                    <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                            <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} />
                        </div>
                        <h1 className="text-mainColor font-bold text-sm">Cláusula para proveedores</h1>
                    </div>
                </Link>
                <Link href="/docs/principios_admon">
                    <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                            <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} />
                        </div>
                        <h1 className="text-mainColor font-bold text-sm">Pie de correo de comunicaciones comerciales</h1>
                    </div>
                </Link>
                <Link href="/docs/firmados_clausulas_clientes">
                    <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                            <Image src="/ndocs1_3_1_1.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} />
                        </div>
                        <h1 className="text-mainColor font-bold text-sm">Archivo de documentos firmados</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
};