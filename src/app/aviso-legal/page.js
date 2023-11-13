import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AvisoLegal() {
  return (
    <>
      <Header />
      <div className="pl-52 pr-52 py-7 flex flex-col gap-5 h-screen">
        <h1 className="text-2xl font-bold text-center">AVISO LEGAL</h1>
        <Image src="/cumplimiento_normativo_360.png" className="mx-auto" width={150} height={150} alt="doc" />
        <div className="flex flex-col gap-2 text-justify">
          <p>Información en cumplimiento de lo establecido en la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico.</p>
          <p>En cumplimiento de lo establecido en el artículo 10 de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico, se informa de modo expreso, preciso e inequívoco, tanto a los destinatarios del servicio como a los órganos competentes, de los siguientes datos relativos al prestador de servicios de la sociedad de la información:</p>
          <ul>
            <li>Denominación social: Audidat 3.0, S.L.U.</li>
            <li>Número de Identificación Fiscal: B02482545.</li>
            <li>Domicilio social: Calle Martínez Villena, 14, 3ª Planta, 02001 Albacete.</li>
            <li>Inscripción en el Registro Mercantil: Audidat está inscrita en el registro mercantil de Albacete a 19 de noviembre de 2004, Tomo 786, Libro 550, Folio 127, Sección 8, Hoja AB 14068.</li>
            <li>Email de contacto: Para cualquier consulta, el usuario puede ponerse en contacto con Audidat a través de la dirección de email info@audidat.com.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
