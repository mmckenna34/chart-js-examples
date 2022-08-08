import React from 'react';
import { Radar } from 'react-chartjs-2';

const RadarChart = () => {
  return (
  <div>
    <Radar
    data={{
      labels: ['HP', 'Attack', 'Defense', 'Speed', 'Special Attack', 'Special Defense'],
      datasets: [{
        label: 'Bulbasaur',
        data: [45, 49, 49, 45, 65, 65],
        pointRadius: 5,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'white',
        borderWidth: 1,
      },
      {
        label: 'Ivysaur',
        data: [60, 62, 63, 60, 80, 80],
        pointRadius: 5,
        backgroundColor: 'rgba(0, 128, 0, 0.5)',
        borderColor: 'white',
        borderWidth: 1,
      },
      {
        label: 'Venusaur',
        data: [80, 82, 83, 80, 100, 100],
        pointRadius: 5,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'white',
        borderWidth: 1,
      }
    ]
    }}
    height={500}
    width={400}
    options={{
      maintainAspectRatio: false,
      hoverBorderWidth: 5,
      plugins: {
        title: {
            display: true,
            text: 'Bulbasaur Stats Through Evolution'
        }
      }
    }}
    />
  </div>
  );
}

export default RadarChart;