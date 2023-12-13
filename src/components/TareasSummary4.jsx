"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

const TareasSummary4 = () => {
   const data = {
      labels: ["Relleno", "Vacío"],
      datasets: [
         {
            data: [77, 23],
            backgroundColor: ["#020024", "transparent"],
            borderWidth: 0,
            borderRadius: 10,
         },
      ],
   };

   const options = {
      cutout: "60%",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
         legend: {
            display: false,
         },
         tooltip: {
            enabled: false,
         },
      },
   };

   return (
      <div className="flex flex-col w-3/6 h-32 relative">
         <Doughnut data={data} options={options} chart={Chart} />
         <p className="text-xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {data.datasets[0].data[0]}
         </p>
      </div>
   );
};

export default TareasSummary4;
