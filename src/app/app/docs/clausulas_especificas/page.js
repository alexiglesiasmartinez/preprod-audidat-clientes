import Link from "next/link";
import Footer from "@/components/Footer";

export default function DocsClausulasEspecificas() {
    return (
        <>
            <div className="pl-16 pr-16 py-7 flex flex-col justify-start items-center gap-5 min-h-[83vh] h-auto">
                <h1 className="text-2xl font-bold text-center">DOCUMENTACIÓN</h1>
                <p><Link href="/app/ndocs" className="italic underline">Documentación</Link> / <Link href="/app/docs" className="italic underline">Protección de datos</Link> / <Link href="/app/docs/principios_root" className="italic underline">Cláusulas informativas y textos legales</Link> / <Link href="/app/docs/clausulas_especificas" className="italic underline">Cláusulas específicas</Link></p>
                <h3 className="text-lg font-bold text-center">Cláusulas específicas</h3>
                <div className="flex flex-col gap-5">
                    <p className="text-justify">El cumplimiento de las obligaciones impuestas por la normativa de protección de datos no puede consistir en una mera adaptación epidérmica a los principios y garantías que la misma establece, debiendo realizarse una adaptación integral, basada en una visión transversal 360 º, que tenga en cuenta las actividades y circunstancias concretas del responsable del tratamiento. En tal sentido, el presente apartado contiene las cláusulas específicas para el cumplimiento de los principios relativos a la licitud del tratamiento, información y transparencia, en el marco de las actividades concretas desarrolladas por el responsable del tratamiento.</p>
                </div>
                <div className="grid grid-cols-3 justify-center items-center text-center gap-0">
                </div>
            </div>
            <Footer />
        </>
    );
};