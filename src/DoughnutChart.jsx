import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {
  const languageData = {
    "Python": 29.48,
    "Java": 17.18,
    "JavaScript": 9.14,
    "C#": 6.94,
    "PHP": 6.49,
    "C/C++": 6.49,
    "R": 3.59,
    "TypeScript": 2.18,
    "Swift": 2.1,
    "ObjectiveC": 2.06
  };

  return (
  <div>
    <Doughnut
    data={{
      labels: Object.keys(languageData),
      datasets: [{
        label: 'Most Popular Programming Languages',
        data: Object.values(languageData),
        backgroundColor: [
          'red', 'blue', 'yellow', 'orange', 'green', 'black',
          'lightskyblue', 'purple', 'pink', 'maroon'
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
            text: 'Programming Languages by Market Share'
        }
      }
    }}
    />
  </div>
  );
}

export default DoughnutChart;