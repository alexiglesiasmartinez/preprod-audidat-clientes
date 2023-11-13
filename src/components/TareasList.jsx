"use client";

import React, { useState } from "react";
//import { data } from "@/data/tareasList.js";

export const data = [
   {
      id: 1,
      description:
         "Comprueba que todos los datos de la “Identidad del responsable del tratamiento” son correctos, incluyendo aquellos que puedan faltar.",
   },
   {
      id: 2,
      description:
         "Comprueba que el correo electrónico que aparece en el apartado “Derechos” es una dirección de email válida y que será atendida por una persona que tratará las cuestiones de protección de datos con urgencia.",
   },
   {
      id: 3,
      description:
         "Revisa el apartado “Cesiones de datos”, por si fuera necesario incluir alguna cesión de datos adicional que se realice con los datos de los usuarios de la página web.",
   },
   {
      id: 4,
      description:
         "Incluye el contenido de este documento en un enlace de tu web que se llame “Política de Privacidad”.",
   },
   {
      id: 5,
      description:
         "Configura tu web para que el usuario deba marcar obligatoriamente la casilla “Acepto las condiciones de la Política de Privacidad” si quiere continuar con su solicitud",
   },
   {
      id: 6,
      description:
         "En caso de que pretendas usar los datos de los usuarios de tu web para finalidades distintas de la de atender su solicitud, ¿has insertado las correspondientes casillas de marcación obligatoria?",
   },
   {
      id: 7,
      description:
         "Configura la ventana emergente para que aparezca a todos los usuarios que accedan a tu web por primera vez.",
   },
   {
      id: 8,
      description:
         "Procura que la ventana emergente de cookies no entorpezca el normal uso de tu web.",
   },
   {
      id: 9,
      description:
         "La ventana de configuración de cookies deberá permitir a los usuarios aceptar unas cookies y rechazar otras.",
   },
   {
      id: 10,
      description:
         "Comprueba que todos los datos del apartado “Identificación de quién utiliza las cookies” son correctos.",
   },
   {
      id: 11,
      description:
         "Cumplimenta el apartado “Información concreta sobre las cookies utilizadas en este sitio web”.",
   },
   {
      id: 12,
      description:
         "Incluye el contenido de este documento en un enlace de tu web que se llame “Política de Cookies”.",
   },
];

const TareasList = () => {
   const [checkedItems, setCheckedItems] = useState(
      Array(data.length).fill(false)
   );

   const handleLabelClick = (index, event) => {
      event.stopPropagation();
      const newCheckedItems = [...checkedItems];
      newCheckedItems[index] = !newCheckedItems[index];
      setCheckedItems(newCheckedItems);
   };

   return (
      <div className="flex flex-col w-full">
         <ul>
            {data.map((el, index) => (
               <li key={el.id} className="w-full my-4">
                  <label
                     htmlFor={`tareasList-${el.id}`}
                     className={`flex gap-4 py-4 px-8 rounded-full cursor-pointer border hover:shadow-lg transition duration-300 ${
                        checkedItems[index]
                           ? "bg-mainColor text-white"
                           : "bg-white"
                     }`}
                  >
                     <input
                        type="checkbox"
                        id={`tareasList-${el.id}`}
                        onClick={(event) => handleLabelClick(index, event)}
                     />
                     <p>{el.description}</p>
                  </label>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default TareasList;
