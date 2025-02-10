"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StockMarketGraph = () => {
  // Sample data for demonstration purposes
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // x-axis labels
    datasets: [
      {
        label: "Coal Price",
        data: [150, 152, 148, 155, 160, 158], // stock price data points
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Coal Market Graph",
      },
    },
  };

  return (
    <div className="p-4 bg-gray-900 rounded-xl shadow-lg">
      <Line data={data} options={options} />
    </div>
  );
};

export default StockMarketGraph;
