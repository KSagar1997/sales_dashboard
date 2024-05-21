import React, { useState, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { color } from 'chart.js/helpers';
import BarChartPlugin from '../../shared/barChartPlugin'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChartView = ({ data }) => {
  const [drillDownData, setDrillDownData] = useState(null);
  const [drillDownCategory, setDrillDownCategory] = useState(null);
  const categoryRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(0);

  const categories = [...new Set(data.map(item => item.category))];
  const categorySales = categories.map(category =>
    data.filter(item => item.category === category).reduce((total, item) => total + item.sales, 0)
  );
  // All Bar colors for the Drill down chart
  const chartColors = [
    [
      '#8BC1F7',
      '#519DE9',
      '#06C',
      '#004B95',
      '#002F5D',
    ],
    [
      '#A2D9D9',
      '#73C5C5',
      '#009596',
      '#005F60',
      '#003737'
    ],
    [
      '#BDE2B9',
      '#7CC674',
      '#4CB140',
      '#38812F',
      '#23511E',
    ],
    [
      '#B2B0EA',
      '#8481DD',
      '#5752D1',
      '#3C3D99',
      '#2A265F',
    ],
    [
      // '#F0F0F0',
      '#D2D2D2',
      '#B8BBBE',
      '#8A8D90',
      '#6A6E73',
    ],
    // [
    //   '#F4B678',
    //   '#EF9234',
    //   '#EC7A08',
    //   '#C46100',
    //   '#8F4700'
    // ],
    [
      '#F9E0A2',
      '#F6D173',
      '#F4C145',
      '#F0AB00',
      '#C58C00',
    ],
    [
      '#C9190B',
      '#A30000',
      '#7D1007',
      '#470000',
      '#2C0000',
    ],
    [
      '#F0F0F0',
      '#D2D2D2',
      '#B8BBBE',
      '#8A8D90',
      '#6A6E73',
    ]

  ];
  // Chart initiling for main chart
  const barData = {
    labels: categories,
    datasets: [
      {
        label: 'Sales by Category',
        data: categorySales,
        backgroundColor: [
          '#004B95',
          '#005F60',
          '#38812F',
          '#2A265F',
          '#8A8D90',
          '#EC7A08',
        ],
        borderColor: [
          '#004B95',
          '#005F60',
          '#38812F',
          '#2A265F',
          '#8A8D90',
          '#EC7A08', 
        ],
        borderWidth: 1,
        borderRadius: 6
      }
    ]
  };

  let category;
  const handleBarClick = (event, elements) => {
    if (elements.length > 0) {
      const index = elements[0].index;
      const prevCategory = categoryRef.current;
      category = categories[index];
      categoryRef.current = category;
      const filteredData = data.filter(item => item.category === category);
      // To check if the slected category is the same as the previous
      if (prevCategory && prevCategory === category) {
        setDrillDownCategory(null);
        setDrillDownData(null);
        categoryRef.current = null;
      } else {
        setDrillDownCategory(category);
        setDrillDownData(filteredData);
        setSelectedCategory(index);
      }
    }
  };

  const drillDownBarData = drillDownData ? {
    labels: drillDownData.map(item => item.date),
    datasets: [
      {
        label: `Sales for ${drillDownCategory}`,
        data: drillDownData.map(item => item.sales),
        backgroundColor: chartColors[selectedCategory],
        borderColor: chartColors[selectedCategory],
        borderWidth: 1,
        borderRadius: 6
      }
    ]
  } : null;

  // Chart Option for maIn chart
  const options = {
    responsive: true,
    plugins: {
      // beforeDraw: BarChartPlugin,
      legend: {
        display: false,
        bottom: 'top',
        labels: {
          boxWidth: 12
        }
      },
      title: {
        display: true,
        text: 'Sales by Category',
        font: {
          family: 'Poppins',
          size: 16,
          weight: 'bold'
        },
        color: '#000000'
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}`;
          }
        }
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          borderDash: [6, 4],
          color: '#707fdd73'
        },
        ticks: {
          // color:'red'
          beginAtZero: true,
        },
        color: 'red',
      },
      y: {
        grid: {
          display: false,
          color: 'red'
        },

      }
    },
    onClick: handleBarClick
  };

  // Chart Option for Detail chart
  const options2 = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 10,
          font: {
            family: 'Poppins',
            size: 10,
            weight: 'bold'
          }
        }
      },
      title: {
        display: true,
        text: `Sales Details for ${drillDownCategory}`,
        font: {
          family: 'Poppins',
          size: 16,
          // weight: 'bold',
        },
        color: '#5A6ACF'
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}`;
          }
        }
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          borderDash: [6, 4],
          color: '#c8c4c4'
        },

      },
      y: {
        grid: {
          display: false,
        },

      }
    },
  };

  return (
    <div className="d-flex flex-column col-lg-12 ps-2 justify-content-between h-100">
      <div className="chart3" style={{ width: '100%' }}>
        <Bar data={barData} options={options} />
      </div>
      {drillDownData && (
        <div className="chart3">
          <Bar data={drillDownBarData} options={options2}
          // options={{ responsive: true,plugins: { legend: { position: 'top' },title: { display: false, text: `Sales Details for ${drillDownCategory}` } } }} 
          />
        </div>
      )}
    </div>
  );
};

export default BarChartView;
