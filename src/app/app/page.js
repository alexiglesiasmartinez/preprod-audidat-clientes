"use client";

import TareasSummary1 from "@/components/TareasSummary1";
import TareasSummary2 from "@/components/TareasSummary2";
import TareasSummary3 from "@/components/TareasSummary3";
import TareasSummary4 from "@/components/TareasSummary4";

import {
	MdShield,
	MdGroups2,
	MdOutlineTransgender,
	MdSpatialAudioOff
} from "react-icons/md";

export default function Home() {

	return (
		<>
			<div className="pl-16 pr-16 py-7 flex flex-col justify-start items-center gap-5 min-h-[83vh] h-auto">
				<h1 className="text-2xl font-bold text-center">INICIO</h1>
				<p className="text-center mb-4">Ten un control de las áreas clave de tu cumplimiento: Protección de Datos, Compliance, Igualdad y Canal Ético. Cada gráfico muestra el porcentaje de cumplimiento, proporcionándote una idea clara de tu progreso.</p>
				<div className="w-full">
					<div className='grid lg:grid-cols-2 grid-cols-1 gap-4 justify-center items-start h-fit w-full'>
						<div className="flex justify-between items-center gap-4 bg-white rounded-2xl p-12 shadow-md hover:shadow-lg transition duration-300">
							<div className="flex flex-col justify-center items-center gap-3 w-3/6">
								<div className="flex justify-center text-white bg-mainColor w-fit p-3 rounded-full">
									<MdShield size={25} />
								</div>
								<h1 className="w-full text-center text-lg font-light">Protección de datos</h1>
							</div>
							<TareasSummary1 />

						</div>
						<div className="flex justify-between items-center gap-4 bg-white rounded-2xl p-12 shadow-md hover:shadow-lg transition duration-300">
							<div className="flex flex-col justify-center items-center gap-3 w-3/6">
								<div className="flex justify-center text-white bg-mainColor w-fit p-3 rounded-full">
									<MdGroups2 size={25} />
								</div>
								<h1 className="w-full text-center text-lg font-light">Compliance</h1>
							</div>
							<TareasSummary2 />
						</div>
						<div className="flex justify-between items-center gap-4 bg-white rounded-2xl p-12 shadow-md hover:shadow-lg transition duration-300 w-full">
							<div className="flex flex-col justify-center items-center gap-3 w-3/6">
								<div className="flex justify-center text-white bg-mainColor w-fit p-3 rounded-full">
									<MdOutlineTransgender size={25} />
								</div>
								<h1 className="w-full text-center text-lg font-light">Igualdad</h1>
							</div>
							<TareasSummary3 />
						</div>
						<div className="flex justify-between items-center gap-4 bg-white rounded-2xl p-12 shadow-md hover:shadow-lg transition duration-300 w-full">
							<div className="flex flex-col justify-center items-center gap-3 w-3/6">
								<div className="flex justify-center text-white bg-mainColor w-fit p-3 rounded-full">
									<MdSpatialAudioOff size={25} />
								</div>
								<h1 className="w-full text-center text-lg font-light">Canal ético</h1>
							</div>
							<TareasSummary4 />
						</div>
					</div>
				</div>
				<div className="w-full">
					<div className="flex flex-col items-center gap-4 mt-4">
						<FaqItem
							question="¿Qué muestra el gráfico de Protección de Datos?"
							answer="El gráfico de Protección de Datos muestra el porcentaje de cumplimiento en relación con las normativas actuales de protección de datos. Te ayuda a entender qué tan bien está gestionando tu empresa la seguridad y el manejo de la información personal."
						/>

						<FaqItem
							question="¿Cómo se calcula el porcentaje en el gráfico de Compliance?"
							answer="El porcentaje en el gráfico de Compliance se calcula en base a varios factores, incluyendo la adhesión a las normativas legales y las políticas internas de la empresa. Refleja la efectividad de tus prácticas de cumplimiento normativo."
						/>

						<FaqItem
							question="¿Qué información proporciona el gráfico de Igualdad?"
							answer="Este gráfico muestra el progreso y la efectividad de las iniciativas de igualdad en tu organización. Incluye aspectos como la paridad de género, la inclusión y la diversidad en el ambiente laboral."
						/>

						<FaqItem
							question="¿Por qué es importante el gráfico de Canal Ético?"
							answer="El gráfico de Canal Ético indica la eficacia con la que se gestionan las denuncias y los reportes internos. Es fundamental para asegurar una comunicación transparente y la resolución efectiva de problemas éticos en la empresa."
						/>
					</div>
				</div>
			</div>
		</>
	);
}

function FaqItem({ question, answer }) {
	return (
		<div className="border border-gray-200 shadow p-5 rounded-lg w-4/4">
			<h3 className="font-semibold">{question}</h3>
			<p className="mt-2 ml-7">{answer}</p>
		</div>
	);
}