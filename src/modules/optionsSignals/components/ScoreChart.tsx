import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import { computeAverageScoresByScenario } from '../utils/scoreUtils';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ScoreChartProps {
  data: any[];
}

const ScoreChart: React.FC<ScoreChartProps> = ({ data }) => {
  const avg = computeAverageScoresByScenario(data);
  const scenarios = Object.keys(avg);
  const scores = scenarios.map(s => avg[s]);

  if (scenarios.length === 0) return null;

  const chartData = {
    labels: scenarios,
    datasets: [{
      label: 'Average Score by Scenario',
      data: scores,
      backgroundColor: 'rgba(54,162,235,0.6)'
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Average Scores by Scenario',
      },
    },
  };

  return (
    <div className="my-6 bg-white p-4 rounded shadow">
      <h3 className="font-bold text-gray-700 mb-2">Scenario Averages</h3>
      <Bar data={chartData} options={options}/>
    </div>
  );
};

export default ScoreChart;
