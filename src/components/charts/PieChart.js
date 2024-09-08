import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { pieData, pieOptions } from "./data";

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const PieChart = () => (
  <div className="border rounded-lg p-6 shadow-lg bg-white">
    <h2 className="text-xl font-semibold mb-4 text-gray-800">
      Product Distribution (Pie)
    </h2>
    <div
      style={{
        width: "100%",
        height: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Pie data={pieData} options={pieOptions} />
    </div>
  </div>
);

export default PieChart;