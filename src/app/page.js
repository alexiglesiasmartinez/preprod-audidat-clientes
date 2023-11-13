import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen pl-52 pr-52 py-7 flex flex-col gap-5">
        <h1 className="text-2xl font-bold text-center">BIENVENIDO A AUDIDAT</h1>
        <Image src="/cumplimiento_normativo_360.png" className="mx-auto" width={150} height={150} alt="doc" />
        <div className="flex flex-col gap-2 text-justify">
          <p>Bienvenid@ a nuestra plataforma digital. Es un placer para AUDIDAT que hayas decidido acceder a este espacio virtual elaborado exclusivamente para ti, donde encontrarás todas las herramientas y recursos necesarios para gestionar un auténtico sistema de cumplimiento normativo integral.</p>
          <p>Queremos que tu experiencia con la plataforma digital sea lo más satisfactoria y útil posible, razón por la cual hemos generado una plataforma sencilla de utilizar, intuitiva, segura y confiable para que puedas disfrutar de una experiencia digital única.</p>
          <p>En tu plataforma dispondrás, en un entorno siempre accesible generado a través de procedimientos completamente seguros, de todos los instrumentos e instrucciones necesarios para cumplir con diversas obligaciones legales que te afectan en el normal desarrollo de tu actividad.</p>
          <p>Te recomendamos que no te limites a utilizar tu plataforma digital para cumplir de manera estricta con las distintas normativas, sino que aproveches las completas funcionalidades y servicios disponibles en este entorno para implantar un auténtico sistema de gestión de riesgos empresariales.</p>
          <p>Cuando hayas incorporado la utilización de la plataforma al normal desenvolvimiento de tu trabajo, te percatarás de la gran cantidad de beneficios que aporta a tu actividad diaria, como la optimización de los procesos organizativos, el exquisito cumplimiento normativo, el fomento de una cultura ética y responsable, la mejora en la calidad de la actividad desempeñada, el enriquecimiento reputacional o el mayor índice de satisfacción de tus stakeholders.</p>
          <p>Para ello, el equipo de más de 150 profesionales que conforman AUDIDAT estará siempre a tu disposición, actualizando constantemente tu plataforma digital e informándote de todos los cambios que pudieran afectarte. Además, podrás contactar con nosotros siempre que quieras a través de teléfono o correo electrónico, canales por los que estaremos encantados de atenderte para adoptar cualquier oportunidad de mejora o para resolver las dudas que puedan surgir.</p>
          <p>Para comenzar con este apasionante proceso en el que se encuentran inmersas más de 12.000 organizaciones a nivel nacional, únicamente debes acceder a tu plataforma y comenzar a explorar las distintas secciones, documentos y funcionalidades que ofrece. Te agradecemos sinceramente que hayas elegido a AUDIDAT como tu consultora de cumplimiento normativo y de gestión de riesgos empresariales.</p>
          <p>Inicie este proceso visitando el apartado de Documentación</p>
          <p>Un saludo.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
