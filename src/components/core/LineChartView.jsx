import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const LineChartView = ({ data }) => {
  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  const lineData = {
    labels: data.map(item => formatDate(item.date)),
    datasets: [
      {
        label: 'Sales Trend',
        data: data.map(item => item.sales),
        fill: false,
        backgroundColor: '#5A6ACF',
        borderColor: '#5A6ACF'
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
        labels: { 
          boxWidth: 10
        }
      },
      title: {
        display: true,
        text: 'Sales Trend',
        font: { 
          family: 'Poppins',
          size: 16, 
          weight: 'bold',
          // color: '#000000'
        },
        color: '#000000'

      }
    },
    scales: {
      x: {
        grid: { 
          display: false,
          drawBorder: false,
          drawTicks: false
        },
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          font: { 
            family: 'Poppins',
            size: 10
          }
        }
      },
      y: {
        grace: '20%',
        grid: { 
          display: false
        },
        ticks: {
          font: { 
            family: 'Poppins',
            size: 10
          }
        }
      }
    }
  };

  return ( 
    <div className="d-flex col-lg-12 pt-2 pb-2 justify-content-around"> 
      <div className="chart card-section"> 
        <Line data={lineData} options={options} />
      </div>
    </div>
  );
};

export default LineChartView;
