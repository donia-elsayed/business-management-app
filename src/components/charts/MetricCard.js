import React from "react";

const MetricCard = ({ title, value, bgColor, textColor, icon: Icon }) => {
  return (
    <div
      className={`border rounded-lg p-6 shadow-lg ${bgColor} ${textColor} transition-transform transform hover:scale-105`}
    >
      <div className="flex flex-row items-center justify-between mb-3">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold">{title}</h2>
          <div className="text-xl font-bold">{value}</div>
        </div>
        <Icon className="h-10 w-10 text-white" />
      </div>
    </div>
  );
};

export default MetricCard;
