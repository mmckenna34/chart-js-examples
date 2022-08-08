import React from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Line } from 'react-chartjs-2';

const LineChart = ({temperatureData}) => {
  return (
  <div>
    <Line
    data={{
      labels: Object.keys(temperatureData),
      datasets: [{
        label: 'Average Low Temps in F',
        data: Object.values(temperatureData),
        pointRadius: 10,
        backgroundColor: 'blue',
        borderColor: 'white',
        borderWidth: 1,
      },
      {
        label: 'Average High Temps in F',
        data: [39, 42, 51, 62, 72, 82, 86, 84, 77, 65, 55, 44],
        pointRadius: 10,
        backgroundColor: 'red',
        borderColor: 'white',
        borderWidth: 1,
      }
    ]
    }}
    height={500}
    width={400}
    plugins={[ChartDataLabels]}
    options={{
      maintainAspectRatio: false,
      hoverBorderWidth: 5,
      plugins: {
        title: {
            display: true,
            text: 'Average Temps in NJ by Month, Fahrenheit'
        }
      }
    }}
    />
  </div>
  );
}

export default LineChart;