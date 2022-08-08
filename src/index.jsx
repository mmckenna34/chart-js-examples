import React from 'react';
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

import BarChart from './BarChart.jsx';
import DoughnutChart from './DoughnutChart.jsx';
import PolarAreaChart from './PolarAreaChart.jsx';
import LineChart from './LineChart.jsx';
import RadarChart from './RadarChart.jsx';

import Chart from 'chart.js/auto';
Chart.defaults.color = 'white';

// Huzzah for jsx!
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
    <div>Bar Chart</div>
    <BarChart/>
    <div>Doughnut Chart</div>
    <DoughnutChart/>
    <div>Polar Area Chart</div>
    <PolarAreaChart temperatureData={temperatureData}/>
    <div>Line Chart</div>
    <LineChart temperatureData={temperatureData}/>
    <div>Radar Chart</div>
    <RadarChart />
  </div>
  )
}

root.render(<App />);