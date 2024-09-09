import React from "react";
import MetricCard from "../components/charts/MetricCard";
import BarChart from "../components/charts/BarChart";
import PieChart from "../components/charts/PieChart";
import {
  UsersIcon,
  ShoppingCartIcon,
  CubeIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

const products = JSON.parse(localStorage.getItem("products"));
const numOfProducts = products?.length || 0;
const orders = JSON.parse(localStorage.getItem("orders"));
const numOfOrders = orders?.length || 0;
const users = JSON.parse(localStorage.getItem("users"));
const numOfUsers = users?.length || 0;
const totalSales = (
  orders?.reduce((total, order) => total + order.totalPrice, 0) || 0
).toFixed(2);

const DashboardPage = () => {
  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Business Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Users"
          value={numOfUsers}
          bgColor="bg-gradient-to-r from-blue-400 to-blue-600"
          textColor="text-white"
          icon={UsersIcon}
        />
        <MetricCard
          title="Orders"
          value={numOfOrders}
          bgColor="bg-gradient-to-r from-green-400 to-green-600"
          textColor="text-white"
          icon={ShoppingCartIcon}
        />
        <MetricCard
          title="Products"
          value={numOfProducts}
          bgColor="bg-gradient-to-r from-purple-400 to-purple-600"
          textColor="text-white"
          icon={CubeIcon}
        />
        <MetricCard
          title="Total Sales"
          value={`$ ${totalSales}`}
          bgColor="bg-gradient-to-r from-yellow-400 to-orange-600"
          textColor="text-white"
          icon={CurrencyDollarIcon}
        />
      </div>

      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-3">
          <BarChart />
        </div>
        <div className="col-span-3">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
