import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

interface StockDataPoint {
    date: string; 
    price: number; 
  }
  
  interface LineChartProps {
    stockData: StockDataPoint[];
  }
const LineChart = ({ stockData }: LineChartProps) => {
  const data = {
    labels: stockData.map(data => data.date), 
    datasets: [
      {
        label: 'Stock Price',
        data: stockData.map(data => data.price), 
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChart;
