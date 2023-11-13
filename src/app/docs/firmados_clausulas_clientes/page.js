import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DocsFirmadosClausulasClientes() {
    return (
        <>
            <Header />
            <div className="pl-52 pr-52 py-7 flex flex-col justify-start items-center gap-5 min-h-[83vh] h-auto">
                <h1 className="text-2xl font-bold text-center">DOCUMENTACIÓN</h1>
                <p><Link href="/ndocs" className="italic underline">Documentación</Link> / <Link href="/docs" className="italic underline">Protección de datos</Link> / <Link href="/docs/principios_root" className="italic underline">Cláusulas informativas y textos legales</Link> / <Link href="/docs/principios_admon" className="italic underline">Área de administración</Link> / <Link href="/docs/firmados_clausulas_clientes" className="italic underline">Archivo de documentos firmados</Link></p>
                <h3 className="text-lg font-bold text-center">Archivo de documentos firmados</h3>
                <div className="flex flex-col gap-5">
                    <p className="text-justify">En este espacio tiene la posibilidad de archivar, en formato PDF, la documentación firmada por cada uno de los interesados, por ejemplo:</p>
                    <li className="text-justify">Cláusula informativa (formato estándar)</li>
                    <li className="text-justify">Permisos específicos en relación con el tratamiento de los datos de los interesados (por ejemplo, para la publicación de su imagen).</li>
                    <li className="text-justify">Cualesquiera otros documentos firmados por los interesados con relevancia en materia de protección de datos personales.</li>
                    <p className="text-justify">Piense en las innumerables ventajas de disponer de dicha documentación firmada por los interesados de manera organizada, en un entorno seguro y accesible 24/7/365 (24 horas al día, 7 días a la semana, 365 días al año) desde cualquier lugar del mundo.</p>
                    <p className="text-justify">Además, para una mayor comodidad, usted podrá adjuntar todos los documentos que desee en un único paso.</p>
                </div>
                <div className="grid grid-cols-4 justify-center items-center text-center gap-0">
                </div>
            </div>
            <Footer />
        </>
    );
};