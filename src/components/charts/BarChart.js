import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { barData, options } from "./data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  return (
    <div className="border rounded-lg p-6 shadow-lg bg-white">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Sales Overview (Bar)
      </h2>
      <div className="w-full h-[300px]">
        <Bar data={barData} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
