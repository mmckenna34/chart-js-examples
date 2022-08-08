import React from 'react';
import { PolarArea } from 'react-chartjs-2';

const PolarAreaChart = ({temperatureData}) => {
  return (
  <div>
    <PolarArea
    data={{
      labels: Object.keys(temperatureData),
      datasets: [{
        label: 'Average Low Temps in F',
        data: Object.values(temperatureData),
        backgroundColor: [
          'red', 'blue', 'yellow', 'orange', 'green', 'black',
          'lightskyblue', 'purple', 'pink', 'maroon', 'lightblue', 'navy'
        ],
        borderColor: 'white',
        borderWidth: 1,
      }]
    }}
    height={500}
    width={400}
    options={{
      maintainAspectRatio: false,
      hoverBorderWidth: 5,
      plugins: {
        title: {
            display: true,
            text: 'Average Low Temps in NJ, Fahrenheit'
        }
      }
    }}
    />
  </div>
  );
}

export default PolarAreaChart;