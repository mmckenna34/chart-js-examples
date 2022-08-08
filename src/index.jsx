import React from 'react';
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

import BarChart from './BarChart.jsx';
import DoughnutChart from './DoughnutChart.jsx';
import PolarAreaChart from './PolarAreaChart.jsx';
import LineChart from './LineChart.jsx';
import RadarChart from './RadarChart.jsx';

// Quickest way to deal with tree-shaking of Chart.js 3++
import Chart from 'chart.js/auto';
Chart.defaults.color = 'white';

const App = () => {
  const temperatureData = {
    'JAN': 24,
    'FEB': 27,
    'MAR': 34,
    'APR': 44,
    'MAY': 53,
    'JUN': 63,
    'JUL': 69,
    'AUG': 67,
    'SEP': 60,
    'OCT': 48,
    'NOV': 39,
    'DEC': 30
  };
  return (
  <div>
    <h2>Chart.js</h2>
    <BarChart/>
    <DoughnutChart/>
    <PolarAreaChart temperatureData={temperatureData}/>
    <LineChart temperatureData={temperatureData}/>
    <RadarChart />
  </div>
  )
}

root.render(<App />);