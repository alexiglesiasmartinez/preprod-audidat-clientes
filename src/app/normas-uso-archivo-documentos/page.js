import Image from "next/image";

export default function NormasUsoArchivoDocumentos() {
  return (
    <div className="pl-52 pr-52 py-7 flex flex-col gap-5 h-max">
      <h1 className="text-2xl font-bold text-center">NORMAS DE USO DE ARCHIVO DE DOCUMENTOS</h1>
      <Image src="/cumplimiento_normativo_360.png" className="mx-auto" width={150} height={150} />
      <div className="flex flex-col gap-2 text-justify">
        <p>NORMAS DE UTILIZACIÓN DE LA UTILIDAD DE ARCHIVO DE DOCUMENTOS DE LA «PLATAFORMA DIGITAL DE CLIENTE - AUDIDAT»</p>
        <p>Normas de utilización de la utilidad de archivo de documentos de la «Plataforma digital de cliente - Audidat», aprobadas por la Dirección de Audidat 3.0, S.L.U. y emitidas en fecha jueves día 30 de abril de 2020, a las 23:59:59 de sus horas (Edición 1.ª).</p>
        <ol>
          <li>La función de archivo de documentos de la «Plataforma digital de cliente - Audidat» es una utilidad informática de utilización exclusivamente voluntaria para el cliente, consistente en la posibilidad de sustituir determinada documentación original que le ha sido facilitada por Audidat 3.0, S.L.U. por la misma documentación una vez que ha sido firmada.</li>
          <li>De acuerdo con lo señalado en el apartado anterior, la utilidad de archivo de documentos de la «Plataforma digital de cliente - Audidat» no tiene como finalidad la prestación de servicios de computación en nube, sino facilitar al cliente una mejor gestión y control interno de su documentación en materia de protección de datos personales, motivo por el cual Audidat 3.0, S.L.U. hace constar expresamente al cliente que el único uso aceptable de dicha utilidad informática es la de sustituir la documentación original facilitada por Audidat 3.0, S.L.U. por la misma documentación firmada, aspecto que el cliente conoce y acepta con carácter previo a la utilización de la utilidad de archivo de documentos de la «Plataforma digital de cliente - Audidat». Si, por cualquier motivo o circunstancia, el cliente sustituyese, de manera libre, unilateral y voluntaria, el documento original por otro documento firmado que se haya elaborado con idéntica finalidad pero que no haya sido facilitado por Audidat 3.0, S.L.U. (por ejemplo, un contrato de encargo de tratamiento firmado que no haya sido facilitado por Audidat 3.0, S.L.U.), será el único responsable en exclusiva de cualquier eventual contravención de los derechos de propiedad intelectual de terceros que hubiera podido tener lugar como consecuencia de la incorporación del referido documento en la «Plataforma digital de cliente - Audidat» sin la autorización de su autor o autores.</li>
          <li>La documentación incorporada por parte del cliente a través de la utilidad de archivo de documentos de la «Plataforma digital de cliente - Audidat», será almacenada en los servidores de la entidad Amazon Web Services, Inc. (AWS), a través de su servicio denominado «Amazon Simple Storage Service (Amazon S3)». Todos los servicios de AWS garantizan su cumplimiento con el Reglamento (UE) 2016/679 (Reglamento General de Protección de Datos), pudiendo acceder el cliente a la política pública de dicha entidad en relación con el cumplimiento de la normativa europea de protección de datos personales, haciendo clic en la siguiente dirección de Internet: https://aws.amazon.com/es/compliance/gdpr-center/</li>
          <li>El cliente garantiza y responde en exclusiva, siempre y en todo caso, de los aspectos relativos a la legalidad, veracidad, exactitud, vigencia y autenticidad de toda la documentación incorporada a través de la utilidad de archivo de documentos de la «Plataforma digital de cliente - Audidat», sin que Audidat 3.0, S.L.U. prejuzgue, en ningún caso y bajo ninguna circunstancia, la corrección de los referidos aspectos por la mera incorporación del cliente de dicha documentación en la «Plataforma digital de cliente - Audidat».</li>
          <li>En directa conexión con lo señalado en el apartado anterior, Audidat 3.0, S.L.U. no asume, en ningún caso y bajo ninguna circunstancia, la obligación de supervisar y/o controlar la documentación incorporada por parte del cliente a través de la utilidad de archivo de documentos de la «Plataforma digital de cliente - Audidat», motivo por el cual el cliente es el único y exclusivo responsable de las consecuencias jurídicas derivadas de la incorporación documentación en la «Plataforma digital de cliente - Audidat» que pudiera vulnerar cualesquiera normas jurídicas y/o lesionar bienes o derechos de terceros, aspecto que el cliente conoce y acepta con carácter previo a la utilización de la utilidad de archivo de documentos de la «Plataforma digital de cliente - Audidat».</li>
          <li>En cualquier caso, Audidat 3.0, S.L.U. se reserva el derecho a aplicar posibles medidas de carácter preventivo, como la limitación del tamaño de cada uno de los archivos a incorporar por parte del cliente en la «Plataforma digital de cliente - Audidat», o la de imposibilitar la incorporación de archivos que contengan una extensión insegura o inapropiada, así como la eventual eliminación de los mismos. De igual modo, Audidat 3.0, S.L.U. hace constar expresamente al cliente que, en el caso de que tuviese conocimiento efectivo de que la documentación incorporada por parte del cliente es ilícita o lesiona bienes o derechos de un tercero susceptibles de indemnización (art. 16.1 LSSICE), procederá de manera inmediata a su retirada o, en su defecto, a hacer imposible el acceso a la misma.</li>
          <li>Audidat 3.0, S.L.U. hace constar expresamente al cliente que la utilidad de archivo de documentos de la «Plataforma digital de cliente - Audidat» no es, en ningún caso y bajo ninguna circunstancia, un servicio de realización de copias de respaldo y recuperación de información y/o documentación. En su consecuencia, el cliente es el único responsable de realizar sus propias copias de respaldo y recuperación en relación con la información y/o documentación que incorpore en la «Plataforma digital de cliente - Audidat», eximiendo de manera expresa a Audidat 3.0, S.L.U. de cualquier responsabilidad en lo tocante al particular. Así mismo, el cliente es el único y exclusivo responsable de la necesaria conservación de la documentación original en soporte papel y/o en soporte electrónico (por ej. documento firmado con certificado digital) cuya copia o reproducción introduzca en la «Plataforma digital de cliente - Audidat», advirtiendo Audidat 3.0, S.L.U. de manera expresa al cliente que la citada documentación original es necesaria para probar el cumplimiento de las obligaciones establecidas en la normativa de protección de datos personales.</li>
          <li>El cliente conoce y acepta todas y cada una de las normas de utilización de la utilidad de archivo de documentos de la «Plataforma digital de cliente - Audidat», sin excepción alguna y de manera libre, con carácter previo a la utilización voluntaria de dicha utilidad.</li>
        </ol>
      </div>
    </div>
  );
}
