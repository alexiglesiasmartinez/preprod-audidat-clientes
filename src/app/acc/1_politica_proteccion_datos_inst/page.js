import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";


export default function AudidatCumple_1() {
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
                <h3 className="text-lg font-bold">PROGRAMA DE CUMPLIMIENTO NORMATIVO</h3>
                <h1 className="text-2xl font-bold">AUDIDAT CUMPLE</h1>
                <h3 className="text-lg font-bold">LOGRO DE CUMPLIMIENTO NORMATIVO N.º 1</h3>
                <h4 className="text-base font-bold">POLÍTICA DE PROTECCIÓN DE DATOS</h4>
                <div className="flex flex-col gap-5">
                    <p className="text-justify">Falta añadir el contenido ...</p>
                    <button>Link al formulario</button>
                </div>
            </div>
            <Footer />
        </>
    );
};