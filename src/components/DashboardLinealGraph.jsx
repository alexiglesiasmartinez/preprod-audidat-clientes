// Importa las dependencias necesarias
"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const DashboardLinealGraph = () => {
   // Datos para el gráfico de líneas
   const data = {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
      datasets: [
         {
            label: "Ventas 2023",
            data: [65, 59, 80, 81, 56],
            fill: false,
            backgroundColor: "#031835",
            borderColor: "#031835",
            tension: 0.1,
         },
      ],
   };

   // Opciones para el gráfico de líneas
   const options = {
      responsive: true,
      scales: {
         y: {
            beginAtZero: true,
         },
      },
   };

   return (
      <div>
         <Line data={data} options={options} />
      </div>
   );
};

export default DashboardLinealGraph;
