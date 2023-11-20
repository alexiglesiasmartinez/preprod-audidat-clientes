import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DocsFirmadosRrhh() {
    return (
        <>
            <Header />
            <div className="pl-16 pr-16 py-7 flex flex-col justify-start items-center gap-5 min-h-[83vh] h-auto">
                <h1 className="text-2xl font-bold text-center">DOCUMENTACIÓN</h1>
                <p><Link href="/ndocs" className="italic underline">Documentación</Link> / <Link href="/docs" className="italic underline">Protección de datos</Link> / <Link href="/docs/principios_root" className="italic underline">Cláusulas informativas y textos legales</Link> / <Link href="/docs/firmados_rrhh" className="italic underline">Archivo de documentos firmados</Link></p>
                <h3 className="text-lg font-bold text-center">Archivo de documentos firmados</h3>
                <div className="flex flex-col gap-5">
                    <p className="text-justify">En este espacio tiene la posibilidad de archivar, en formato PDF, la documentación firmada por cada uno de los trabajadores y usuarios del sistema de información, por ejemplo:</p>
                    <li className="text-justify">«Política de uso del sistema de información» de la entidad firmada por los usuarios.</li>
                    <li className="text-justify">Documentación firmada por los trabajadores sobre los aspectos relativos al tratamiento de sus datos personales.</li>
                    <li className="text-justify">Documentación firmada por los trabajadores afectados sobre el uso de dispositivos de videovigilancia en el lugar de trabajo.</li>
                    <li className="text-justify">Cualesquiera otros documentos firmados por los trabajadores con relevancia en materia de protección de datos personales.</li>
                    <p className="text-justify">Piense en las innumerables ventajas de disponer de toda la documentación firmada por sus trabajadores de manera organizada, en un entorno seguro y accesible 24/7/365 (24 horas al día, 7 días a la semana, 365 días al año) desde cualquier lugar del mundo.</p>
                    <p className="text-justify">Además, para una mayor comodidad, usted podrá adjuntar todos los documentos que desee en un único paso.</p>
                </div>
            </div>
            <Footer />
        </>
    );
};