import React from "react";
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import Link from "next/link";

export default function TicketView() {
    return (
        <>
            <div className="pl-16 pr-16 py-7 flex flex-col justify-start items-center gap-5 min-h-[83vh]">
                <h1 className="text-2xl font-bold text-center">DETALLE DEL TICKET</h1>
                <Link className="hover:scale-125 transition-transform duration-300 ease-in-out" href="/tickets">
                    <MdOutlineArrowCircleLeft size={40} />
                </Link>
                <div className="w-4/6">
                    <div className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4">
                        <h2 className="text-lg font-bold mb-4">Ticket 1</h2>
                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2">Nombre:</label>
                            <p className="bg-gray-100 rounded w-full py-2 px-3 text-black">Alex Iglesias</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2">Asunto:</label>
                            <p className="bg-gray-100 rounded w-full py-4 px-4 text-black">Consulta sobre Consentimiento de Datos bajo RGPD</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2">Mensaje:</label>
                            <p className="rounded w-full py-2 px-3 text-black">¡Buenos días!<br /><br /> Me gustaría obtener más claridad sobre cómo nuestra organización está manejando el consentimiento de los datos personales en conformidad con el RGPD. <br /><br />Específicamente, necesito saber si los procedimientos actuales para obtener, registrar y almacenar el consentimiento de los usuarios cumplen con las últimas regulaciones del RGPD. <br /><br />Además, ¿podrían proporcionar ejemplos de cómo se presenta el consentimiento en nuestros formularios web y si estos están actualizados según los requisitos legales más recientes?
                                <br /><br />Gracias por su asistencia en este asunto vital para asegurar nuestra conformidad con el RGPD. <br /><br />Saludos</p>
                        </div>
                    </div>
                    <div className="bg-gray-100 shadow-md rounded-2xl pl-10 px-8 pt-6 pb-8 mb-4">
                        <h2 className="text-base font-bold mb-4">Manuel Pérez</h2>


                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2">Mensaje:</label>
                            <p className="bg-white rounded w-full py-4 px-4 text-black">
                                Estimado Alex Iglesias,
                                <br /><br />
                                Gracias por ponerse en contacto con nosotros y por su compromiso con el cumplimiento del RGPD. Con respecto a su consulta sobre los procedimientos de consentimiento de datos, puedo confirmar que nuestra organización ha implementado prácticas rigurosas para cumplir con los estándares del RGPD.
                                <br /><br />
                                1. <strong>Obtención de Consentimiento</strong>: Nos aseguramos de que el consentimiento sea explícito y claro. Nuestros formularios web incluyen casillas de verificación no pre-marcadas y declaraciones claras que explican para qué se están recogiendo los datos.
                                <br /><br />
                                2. <strong>Registro y Almacenamiento del Consentimiento</strong>: Cada instancia de consentimiento otorgado por los usuarios es registrada y almacenada de forma segura en nuestra base de datos, con detalles como fecha, hora y naturaleza exacta del consentimiento.
                                <br /><br />
                                3. <strong>Ejemplos de Formularios Web</strong>: Adjunto a este correo encontrará capturas de pantalla de nuestros formularios web actuales, donde podrá ver cómo se presenta el consentimiento. Estos formularios se actualizan regularmente para reflejar cualquier cambio en la legislación del RGPD.
                                <br /><br />
                                Le recomiendo que revise estos materiales y no dude en contactarnos si necesita aclaraciones adicionales o si tiene alguna preocupación específica. Nuestro equipo está comprometido a garantizar que todas nuestras operaciones se alineen estrictamente con el RGPD y estamos aquí para apoyar en cualquier aspecto relacionado.
                                <br /><br />
                                Saludos cordiales,
                                <br />
                                Manuel Pérez
                            </p>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-2xl pl-10 px-8 pt-6 pb-8 mb-4">
                        <h2 className="text-base font-bold mb-4">Alex Iglesias</h2>
                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2">Respuesta:</label>
                            <p className="bg-white rounded w-full py-4 px-4 text-black">
                                Estimado Manuel Pérez,
                                <br /><br />
                                Agradezco enormemente la rápida y detallada respuesta a mi consulta sobre el manejo del consentimiento de datos bajo el RGPD en nuestra organización. Estoy impresionado por las medidas implementadas y me siento más confiado sabiendo que estamos cumpliendo adecuadamente con las regulaciones.
                                <br /><br />
                                Los ejemplos de los formularios web adjuntos son particularmente útiles y proporcionan una clara comprensión de cómo se está manejando el consentimiento. Esto también servirá como una excelente referencia para nuestra comunicación futura con los usuarios.
                                <br /><br />
                                Si surgen más preguntas o necesito asistencia adicional, me pondré en contacto. Gracias nuevamente por su apoyo y dedicación para asegurar que nuestra organización se mantenga en conformidad con el RGPD.
                                <br /><br />
                                Saludos cordiales,
                                <br />
                                Alex Iglesias
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};
