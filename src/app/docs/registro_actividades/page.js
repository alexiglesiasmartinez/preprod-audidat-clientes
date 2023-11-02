import Image from "next/image";
import Link from "next/link";

export default function DocsRegistroActividades() {
    return (
        <div className="pl-52 pr-52 py-7 flex flex-col justify-start items-center gap-5 min-h-[83vh] h-auto">
            <h1 className="text-2xl font-bold text-center">DOCUMENTACIÓN</h1>
            <p><Link href="/ndocs" className="italic underline">Documentación</Link> / <Link href="/docs" className="italic underline">Protección de datos</Link> / <Link href="/docs/registro_actividades" className="italic underline">Registro de actividades de tratamiento</Link></p>
            <h3 className="text-lg font-bold text-center">Registro de actividades de tratamiento</h3>
            <p className="text-justify">De conformidad con lo establecido en el artículo 30 del Reglamento general de protección de datos (Reglamento (UE) 2016/679), así como en el artículo 31 de la Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales (Ley Orgánica 3/2018), los responsables deben llevar un registro de las actividades de tratamiento efectuadas bajo su responsabilidad. En dicho documento, queda, por tanto, detallada toda la información relativa a cada uno de los tratamientos de datos personales que realice el responsable (clientes, proveedores, videovigilancia, etc.).</p>
            <p className="text-justify">Al existir obligación de mantenerlo actualizado en todo momento, y dado que la Subdirección General de Inspección de Datos puede solicitarlo, Audidat otorga al registro de actividades de tratamiento una vigencia temporal de un año, debiendo el cliente renovar este documento una vez haya transcurrido ese periodo de tiempo si quiere acreditar la diligencia que exige la normativa de protección de datos.</p>
            <p className="text-justify">En el supuesto de tratarse de uno de los sujetos obligados a ello en virtud de la normativa vigente de protección datos (art. 77.1 LOPDGDD), el responsable del tratamiento deberá hacer público y accesible por medios electrónicos un inventario de sus actividades de tratamiento (por ej., a través de su página de Internet).</p>
            <p className="text-justify">De otro lado, el propio artículo 30 del Reglamento (UE) 2016/679 también obliga a los encargados del tratamiento a llevar un registro de todas las categorías de actividades de tratamiento efectuadas por cuenta de responsables, facilitándose en esta sección el modelo correspondiente a los citados efectos.</p>
            <div className="grid grid-cols-4 justify-center align-middle text-center gap-0">
                <Link href="/docs/registro_actividades">
                    <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                            <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} />
                        </div>
                        <h1 className="text-mainColor font-bold text-sm">Registro de las actividades de tratamiento efectuadas bajo su responsabilidad</h1>
                    </div>
                </Link>
                <Link href="/docs/registro_actividades">
                    <div className="flex flex-col justify-center gap-3 h-60 w-60 rounded-3xl border border-gray-200 shadow-lg p-5 m-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="border-8 rounded-full border-gray-500 w-[100px] mx-auto">
                            <Image src="/docs_file.png" className="mx-auto border-8 rounded-full border-mainColor p-2" width={100} height={100} />
                        </div>
                        <h1 className="text-mainColor font-bold text-sm">Registro de las actividades de tratamiento efectuadas por cuenta del responsable</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
};