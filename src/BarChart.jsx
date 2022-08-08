import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  return (
  <div>
    <Bar
      data={{
        labels: ['Dodgers', 'Yankees', 'Mets', 'Astros', 'Braves',
        'Cardinals', 'Blue Jays', 'Phillies', 'Padres', 'Rays'],
        datasets: [{
          label: 'Winning Percentage',
          data: [69.4, 64.2, 64.2, 63.6, 58.2, 55.6, 55.6, 55.6, 55.0, 53.7],
          backgroundColor: [
            'dodgerblue', 'navy', 'darkorange', 'black', 'red',
            'darkred', 'lightskyblue', 'indianred', 'sienna', 'slateblue'
          ],
          borderColor: 'white',
          borderWidth: 1,
        },
        {
          label: 'Payroll (in millions)',
          data: [265, 252, 261, 183, 181, 161, 175, 242, 220, 90],
          backgroundColor: 'green',
          borderColor: 'white',
          borderWidth: 1,
        }
        ],
      }}
      height={500}
      width={400}
      options={{
        maintainAspectRatio: false,
        hoverBorderWidth: 5,
        plugins: {
          title: {
              display: true,
              text: 'Winning % + Payroll for MLB'
          }
        }
      }}
    />
  </div>
  );
}

export default BarChart;