import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Ndocs() {
  return (
    <>
      <div className="pl-16 pr-16 py-7 flex flex-col justify-start items-center gap-5 h-fit">
        <h1 className="text-2xl font-bold text-center">DOCUMENTACIÓN</h1>
        <Link href="/app/ndocs" className="italic underline">Documentación</Link>
        <h3 className="text-lg font-bold text-center">Sistema de Cumplimiento Normativo</h3>
        <div className="grid grid-cols-2 justify-center items-center text-center gap-0">
          <Link href="/app/docs">
            <div className="flex flex-col justify-center gap-3 h-72 w-72 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                <Image src="/ndocs1.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
              </div>
              <h1 className="text-mainColor font-bold text-lg">Protección de datos</h1>
              <p className="text-sm">En este apartado podrás gestionar tu sistema de protección de datos personales.</p>
            </div>
          </Link>
          <div className="flex flex-col justify-center gap-3 h-72 w-72 rounded-3xl border border-gray-200 shadow-lg p-5 m-5">
            <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
              <Image src="/ndocs2.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
            </div>
            <h1 className="text-gray-600 font-bold text-lg">Compliance</h1>
            <p className="text-sm text-gray-600">Esta sección aglutina todas las políticas y prácticas relacionadas con el sistema de compliance de tu organización.</p>
          </div>
          <div className="flex flex-col justify-center gap-3 h-72 w-72 rounded-3xl border border-gray-200 shadow-lg p-5 m-5">
            <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
              <Image src="/ndocs3.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
            </div>
            <h1 className="text-gray-600 font-bold text-lg">Igualdad</h1>
            <p className="text-sm text-gray-600">Aquí encontrarás todos los protocolos y planes relacionados con la igualdad de todos los miembros de la organización.</p>
          </div>
          <div className="flex flex-col justify-center gap-3 h-72 w-72 rounded-3xl border border-gray-200 shadow-lg p-5 m-5">
            <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
              <Image src="/ndocs4.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} alt="doc" />
            </div>
            <h1 className="text-gray-600 font-bold text-lg">Canal ético</h1>
            <p className="text-sm text-gray-600">Enlace a tu canal ético y a los documentos pertinentes para gestionarlo y difundirlo.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
