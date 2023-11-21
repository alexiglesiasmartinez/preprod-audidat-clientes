import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";


export default function AudidatCumple_1_cuestionario() {
    return (
        <>
            <Header />
            <div className="pl-16 pr-16 py-7 flex flex-col justify-start items-center gap-5 min-h-[83vh] h-auto">
                <div className="flex items-center justify-center shadow-lg p-10 mb-6 rounded-xl">
                    <Link href="/acc">Presentación</Link>
                    <Link href="/acc/1_politica_proteccion_datos_inst">
                        <Image src="/acc_paso1.png" width={60} height={60} alt="doc" />
                    </Link>
                    <Image src="/acc_paso2.png" width={60} height={60} alt="doc" />
                    <Image src="/acc_paso3.png" width={60} height={60} alt="doc" />
                    <Image src="/acc_paso4.png" width={60} height={60} alt="doc" />
                    <Image src="/acc_paso5.png" width={60} height={60} alt="doc" />
                    <Image src="/acc_paso6.png" width={60} height={60} alt="doc" />
                    <Image src="/acc_paso7.png" width={60} height={60} alt="doc" />
                    <Image src="/acc_paso8.png" width={60} height={60} alt="doc" />
                    <Image src="/acc_paso9.png" width={60} height={60} alt="doc" />
                    <Image src="/acc_paso10.png" width={60} height={60} alt="doc" />
                    <Image src="/acc_paso11.png" width={60} height={60} alt="doc" />
                    <Image src="/acc_paso12.png" width={60} height={60} alt="doc" />
                </div>
                <h3 className="text-lg font-bold">PROGRAMA DE CUMPLIMIENTO NORMATIVO</h3>
                <h1 className="text-2xl font-bold">AUDIDAT CUMPLE</h1>
                <h3 className="text-lg font-bold">LOGRO DE CUMPLIMIENTO NORMATIVO N.º 1</h3>
                <h4 className="text-base font-bold">POLÍTICA DE PROTECCIÓN DE DATOS</h4>
                <Image src="/logo_completo.png" width={150} height={150} alt="doc" />

                <div className="container">

                    <div id="pregunta1" className="mb-6 bg-white p-6 shadow rounded-3xl">
                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2">1. ¿Se ha aprobado en el seno de su entidad una «Política de Protección de Datos»?</label>
                            <div className="mt-2">
                                <label className="inline-flex items-center">
                                    <input id="politicaAprobada" type="radio" name="politicaAprobada" value="SI" className="form-radio text-indigo-600" />
                                    <span className="ml-2">Sí</span>
                                </label>
                                <label className="inline-flex items-center ml-6">
                                    <input type="radio" name="politicaAprobada" value="NO" id="politicaAprobada1" className="form-radio text-indigo-600" />
                                    <span className="ml-2">No</span>
                                </label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2">Observaciones</label>
                            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="obsPoliticaAprobada" name="obsPoliticaAprobada"></textarea>
                        </div>
                    </div>

                    <div id="pregunta2" className="mb-6 bg-white p-6 shadow rounded-3xl">
                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2">2. ¿El contenido de la «Política de Protección de Datos» de su entidad hace referencia expresa al Reglamento General de Protección de Datos (Reglamento (UE) 2016/679)?</label>
                            <div className="mt-2">
                                <label className="inline-flex items-center">
                                    <input id="contenidoReferenciaReglamento" type="radio" name="contenidoReferenciaReglamento" value="SI" className="form-radio text-indigo-600" />
                                    <span className="ml-2">Sí</span>
                                </label>
                                <label className="inline-flex items-center ml-6">
                                    <input type="radio" name="contenidoReferenciaReglamento" value="NO" id="contenidoReferenciaReglamento1" className="form-radio text-indigo-600" />
                                    <span className="ml-2">No</span>
                                </label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2">Observaciones</label>
                            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="obsContenidoReferenciaReglamento" name="obsContenidoReferenciaReglamento"></textarea>
                        </div>
                    </div>

                    <div id="pregunta3" className="mb-6 bg-white p-6 shadow rounded-3xl">
                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2">3. Su «Política de Protección de Datos», ¿ha sido firmada por la Dirección o el Órgano de Gobierno de su entidad?</label>
                            <div className="mt-2">
                                <label className="inline-flex items-center">
                                    <input id="politicaFirmada" type="radio" name="politicaFirmada" value="SI" className="form-radio text-indigo-600" />
                                    <span className="ml-2">Sí</span>
                                </label>
                                <label className="inline-flex items-center ml-6">
                                    <input type="radio" name="politicaFirmada" value="NO" id="politicaFirmada1" className="form-radio text-indigo-600" />
                                    <span className="ml-2">No</span>
                                </label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2">Observaciones</label>
                            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="obsPoliticaFirmada" name="obsPoliticaFirmada"></textarea>
                        </div>
                    </div>

                    <div id="pregunta4" className="mb-6 bg-white p-6 shadow rounded-3xl">
                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2">4. ¿Se encuentra la «Política de Protección de Datos» de su entidad archivada y disponible para el caso de que sea requerida por la autoridad de protección de datos competente?</label>
                            <div className="mt-2">
                                <label className="inline-flex items-center">
                                    <input id="politicaArchivada" type="radio" name="politicaArchivada" value="SI" className="form-radio text-indigo-600" />
                                    <span className="ml-2">Sí</span>
                                </label>
                                <label className="inline-flex items-center ml-6">
                                    <input type="radio" name="politicaArchivada" value="NO" id="politicaArchivada1" className="form-radio text-indigo-600" />
                                    <span className="ml-2">No</span>
                                </label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2">Observaciones</label>
                            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="obsPoliticaArchivada" name="obsPoliticaArchivada"></textarea>
                        </div>
                    </div>

                    <div id="pregunta5" className="mb-6 bg-white p-6 shadow rounded-3xl">
                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2">5. ¿Se ha publicado la «Política de Protección de Datos» de su entidad en su página web, a fin de que sea conocida por todo el mundo? (Marcar &quot;No aplica&quot; si su entidad no dispone de página web)</label>
                            <div className="mt-2">
                                <label className="inline-flex items-center">
                                    <input id="politicaPublicada" type="radio" name="politicaPublicada" value="SI" className="form-radio text-indigo-600" />
                                    <span className="ml-2">Sí</span>
                                </label>
                                <label className="inline-flex items-center ml-6">
                                    <input type="radio" name="politicaPublicada" value="NO" id="politicaPublicada1" className="form-radio text-indigo-600" />
                                    <span className="ml-2">No</span>
                                </label>
                                <label className="inline-flex items-center ml-6">
                                    <input type="radio" name="politicaPublicada" value="NO_APLICA" id="politicaPublicada2" className="form-radio text-indigo-600" />
                                    <span className="ml-2">No aplica</span>
                                </label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2">Observaciones</label>
                            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="obsPoliticaPublicada" name="obsPoliticaPublicada"></textarea>
                        </div>
                    </div>

                    <div className="mb-6 bg-white p-6 shadow rounded-3xl">
                        <div className="box mb-4">
                            <label className="block text-black text-sm font-bold mb-2">Adjuntar documentación</label>
                            <p className="text-black text-sm mb-4">Finalmente, debe adjuntar al presente cuestionario el documento en el que se aprueba la «Política de Protección de Datos» de su entidad, debidamente firmado por la Dirección o el Órgano de Gobierno de la misma, en formato PDF.</p>
                            <div className="field">
                                <div className="flex flex-wrap">
                                    <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
                                        <article className="box bg-white p-4 shadow rounded-3xl  w-full">
                                            <div className="media">
                                                <div className="media-content">
                                                    <div id="panelIconodoc_politica_proteccion_datos" className="content is-small text-center">
                                                        <div className="rounded-full bg-gray-300 p-3 inline-block">
                                                            <Image src="/cumplimiento_normativo_360.png" width={50} height={50} alt="Imagen" />
                                                        </div>
                                                        <p id="panelAntiguodoc_politica_proteccion_datos" className="text-sm text-center font-bold mt-2 mb-4">
                                                            Documento de política de protección de datos (documento original)
                                                        </p>
                                                        <div id="componentedoc_politica_proteccion_datos">
                                                            <div className="file is-small">
                                                                <label className="file-label flex flex-col gap-3">
                                                                    <input id="doc_politica_proteccion_datos" className="file-input  text-sm" type="file" accept="application/pdf" />
                                                                    <span className="file-cta">
                                                                        <span className="file-label text-sm">
                                                                            Elige un archivo ...
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div id="enlacedoc_politica_proteccion_datos" className="control hidden">
                                                            <p className="title is-5 text-center font-bold mt-2">
                                                                Documento de política de protección de datos (firmado)
                                                                {/* Botón de eliminar */}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="field">
                            <div className="control buttons is-pulled-right flex justify-center align-middle cursor-pointer">
                                <input title="Podrá guardar sus progresos en este cuestionario tantas veces como necesite, haciendo clic sobre este botón, para retomarlo cuando estime oportuno." className="button is-link bg-secondaryGradient text-white rounded-3xl py-2 px-5 cursor-pointer" type="submit" name="guardar" value="Guardar" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
};