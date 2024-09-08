import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales',
      data: [4000, 3000, 5000, 4500, 6000, 5500],
      backgroundColor: '#8884d8',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Sales Overview',
    },
  },
};

const MetricCard = ({ title, value }) => (
  <div className="border rounded-lg p-4 shadow-md">
    <div className="flex flex-row items-center justify-between mb-2">
      <h2 className="text-sm font-medium">{title}</h2>
    </div>
    <div className="text-2xl font-bold">{value}</div>
  </div>
);

const DashboardPage = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Business Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Users" value="1,234" />
        <MetricCard title="Orders" value="567" />
        <MetricCard title="Products" value="89" />
        <MetricCard title="Total Sales" value="$123,456" />
      </div>
      
      <div className="border rounded-lg p-4 shadow-md">
        <h2 className="text-lg font-medium mb-4">Sales Overview</h2>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default DashboardPage;
