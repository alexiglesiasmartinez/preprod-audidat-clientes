import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function AudidatCumple() {
    return (
        <><Header />
            <div className="pl-16 pr-16 py-7 flex flex-col justify-start items-center gap-5 min-h-[83vh] h-auto">
                <div className="flex items-center justify-center shadow-lg p-10 mb-6 rounded-xl">
                    <Link href="/acc">Presentación</Link>
                    <Image src="/acc_paso1.png" width={60} height={60} alt="doc" />
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
                <h1 className="text-2xl font-bold">AUDIDAT CUMPLE</h1>
                <h3 className="text-lg font-bold">INSTRUCCIONES DEL PROGRAMA</h3>
                <div className="flex flex-col gap-5">
                    <p className="text-justify">Mediante la contratación de nuestros servicios, la entidad que usted representa ha asumido un compromiso de cumplimiento activo de las obligaciones establecidas en la normativa de protección de datos personales, acorde con el principio de «responsabilidad proactiva» recogido en el artículo 5, apartado 2, del Reglamento (UE) 2016/679 (Reglamento general de protección de datos).</p>
                    <p className="text-justify">En tal sentido, el nivel de compromiso diario del responsable del tratamiento es muy importante para alcanzar el objetivo de la excelencia en relación con el cumplimiento de la normativa de protección de datos personales.</p>
                    <p className="text-justify">A tal fin, hemos diseñado para usted el denominado «Programa de cumplimiento normativo - Audidat CUMPLE », al cual tendrá acceso exclusivo a través de nuestra plataforma digital de cliente, y que está basado en la consecución de distintos logros de cumplimiento, que deberá ir alcanzando a lo largo del año.</p>
                    <p className="text-justify">En concreto, usted deberá alcanzar once (11) logros de cumplimiento distintos, uno por cada mes del año, excluyendo el mes de agosto, que se reserva al descanso y a repasar todo lo realizado durante los meses precedentes.</p>
                    <p className="text-justify">Con la consecución de cada logro mensual, usted recibirá una «Medalla virtual Audidat», expedida por nuestra Dirección Técnico-Jurídica, y cuyo valor no es económico, sino que supone un paso más en el camino de su entidad hacia un correcto cumplimiento de la normativa de protección de datos.</p>
                    <p className="text-justify">La consecución de todos estos logros se traducirá en los siguientes beneficios prácticos para su entidad:</p>
                    <li className="text-justify">Un mejor cumplimiento normativo y respeto del derecho fundamental a la protección de datos en el seno de su entidad.</li>
                    <li className="text-justify">Minimizar riesgos económicos (multas), legales y reputacionales.</li>
                    <li className="text-justify">Una mejora de la seguridad y el control de la información tratada en su entidad.</li>
                    <li className="text-justify">Una mejora de la calidad y de la competitividad de su entidad.</li>
                    <li className="text-justify">Un valor diferencial y factor de confianza para los interesados.</li>

                    <h3 className="text-lg font-bold">PREGUNTAS FRECUENTES</h3>
                    <h4 className="text-base font-bold">¿Recibiré algún premio si consigo los once (11) logros de cumplimiento anuales?</h4>
                    <p className="text-justify">Si usted realiza todas las tareas correctamente y consigue los once (11) logros de cumplimiento anuales, como recompensa final tendrá disponible en nuestra plataforma digital de cliente un documento de «Entidad responsable», suscrito por nuestro Director Técnico-Jurídico, declarativo del compromiso diario de su entidad con la protección de datos personales.</p>
                    <p className="text-justify">Los clientes que obtengan el documento de «Entidad responsable» durante tres (3) o más años consecutivos, podrán figurar, si así lo desean, en un apartado específico de la página web pública de Audidat (www.audidat.com), destinado a reconocer los méritos de nuestros clientes más comprometidos con el cumplimiento de la normativa de protección de datos personales en el día a día de su entidad.</p>
                    <h4 className="text-base font-bold">¿Recibiré algún recordatorio en mi dirección de correo electrónico?</h4>
                    <p className="text-justify">Sí. Usted recibirá, en la dirección de correo electrónico que designe, recordatorios trimestrales relacionados con sus logros de cumplimiento pendientes.</p>
                    <p className="text-justify">En caso de que no desee recibir periódicamente dichos recordatorios en su dirección de correo electrónico, simplemente deberá marcarlo en la casilla habilitada al efecto en la propia plataforma digital de cliente.</p>
                    <h4 className="text-base font-bold">¿Cómo podré verificar el estado de mis progresos en relación con la consecución de los once (11) logros de cumplimiento anuales?</h4>
                    <Image src="/acc.png" width={900} height={100} alt="doc" />
                    <p className="text-justify">Usted podrá verificar el estado de sus logros de cumplimiento anuales a través de su barra personalizada de progresos, que encontrará en la propia plataforma digital de cliente.</p>
                    <h4 className="text-base font-bold">¿Qué ocurre si un mes concreto no he podido conseguir mi logro de cumplimiento?</h4>
                    <p className="text-justify">El itinerario recomendado por Audidat para la consecución de los once (11) logros de cumplimiento anuales es la realización de un logro de cumplimiento por cada mes del año, excluyendo el mes de agosto, que se reserva al descanso y a repasar todo lo realizado durante los meses precedentes. No obstante, y a fin de posibilitar la consecución de los once (11) logros de cumplimiento anuales en función de las circunstancias particulares y concretas de cada cliente, se ha optado por el criterio de «flexibilidad total», pudiendo realizar los logros de cumplimiento a lo largo del año al ritmo que mejor se acomode a su tiempo. Así mismo, no es requisito imprescindible realizar cada uno de los logros de cumplimiento de manera consecutiva, dejando flexibilidad también a este respecto.</p>
                    <h4 className="text-base font-bold">¿Por qué algunas preguntas de los cuestionarios y apartados para adjuntar documentación están marcados con un asterisco ()?</h4>
                    <p className="text-justify">En aquellas preguntas marcadas con un asterisco (), la respuesta deberá ser «sí» o, en su caso, «no aplica» (si no se da esa circunstancia), para poder finalizar el cuestionario y superar el logro de cumplimiento, ya que una respuesta negativa («no») no garantiza los estándares mínimos de cumplimiento exigidos por el «Programa de cumplimiento normativo - Audidat CUMPLE ». Así mismo, en aquellos apartados para adjuntar documentación marcados con un asterisco (), será requisito imprescindible adjuntar los documentos que, en su caso, correspondan, para poder finalizar el cuestionario y superar el logro de cumplimiento (salvo que se indique expresamente lo contrario). Si no dispongo de página web o de un sistema de videovigilancia, ¿debo realizar los logros de cumplimiento relativos a dichos aspectos? Si usted no dispone de página web, está exento de la realización del «Logro de Cumplimiento Normativo N.º 5: PÁGINA WEB». Si usted no dispone de un sistema de videovigilancia, está exento de la realización del «Logro de Cumplimiento Normativo N.º 6: VIDEOVIGILANCIA». Si no dispongo de recursos humanos, ¿cómo afecta dicha circunstancia a mis logros de cumplimiento? Si usted no dispone de recursos humanos, está exento de la realización de los siguientes logros de cumplimiento: </p>
                    <li className="text-justify">«Logro de Cumplimiento Normativo N.º 3: RECURSOS HUMANOS».</li>
                    <li className="text-justify">«Logro de Cumplimiento Normativo N.º 11: CAPACITACIÓN Y EDUCACIÓN DE LOS USUARIOS EN PROTECCIÓN DE DATOS».</li>
                    <h4 className="text-base font-bold">¿Qué ocurre si no consigo varios o incluso ninguno de mis logros de cumplimiento anuales?</h4>
                    <p className="text-justify">El «Programa de cumplimiento normativo - Audidat CUMPLE » tiene carácter voluntario. En tal sentido, la finalidad principal de dicho programa es promover un cumplimiento activo por parte de nuestros clientes de las obligaciones establecidas en la normativa de protección de datos personales, de manera fácil y organizada, en el día a día de su entidad. Ello se traduce, al margen de nuestro sistema de recompensas, en una serie de indudables beneficios prácticos para su entidad. De tal modo, no es requisito inexcusable para poder ser cliente de Audidat obtener los once (11) logros de cumplimiento anuales de nuestro programa de cumplimiento normativo, si bien consideramos que es una práctica más que recomendable atendiendo al principio de «responsabilidad proactiva» recogido en el artículo 5, apartado 2, del Reglamento (UE) 2016/679 (Reglamento general de protección de datos). Piense, por ejemplo, que nadie le obliga a llevar una alimentación saludable, pero convendrá con nosotros en los indudables beneficios directos para su salud, en contraposición a una mala alimentación. Con este paralelismo, queremos ilustrarle sobre lo beneficioso que puede ser para su entidad un correcto seguimiento de nuestro programa de cumplimiento normativo.</p>
                    <h4 className="text-base font-bold">Confiamos en usted</h4>
                    <p className="text-justify">Al contratar nuestros servicios, la entidad que usted representa ha demostrado una sensibilidad extraordinaria por la protección de datos personales. Es por ello que, el equipo de más de 150 profesionales de la protección de datos y la privacidad que integra Audidat, confía en que seguirá diligentemente nuestro programa de cumplimiento normativo, especialmente diseñado para usted. Un cordial saludo,</p>
                    <Image src="/acc_firma.png" width={120} height={100} alt="doc" />
                    <p className="text-justify">Manuel F. Perezagua Naharro</p>
                    <p className="text-justify">Director Técnico-Jurídico</p>
                    <p className="text-justify">Hemos elaborado un documento que presenta esta información en formato PDF a fin de que usted pueda descargarla, archivarla y, si lo estima oportuno, imprimirla para su lectura y comprensión en formato de papel.</p>
                    <p className="text-justify">Puede descargarla aquí.</p>
                    <div className="border p-8 flex flex-col items-center justify-center gap-2">
                        <p>Pulse el botón  para empezar con el logro de cumplimiento N.º 1</p>
                        <Link href="/acc/1_politica_proteccion_datos_inst">
                            <button className="bg-secondaryGradient text-white py-2 px-4 rounded-full">Empezar</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};