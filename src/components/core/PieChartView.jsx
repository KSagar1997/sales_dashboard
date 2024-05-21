import React, { useState, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartView = ({ data }) => {
  const [drillDownData, setDrillDownData] = useState(null);
  const [drillDownCategory, setDrillDownCategory] = useState(null);
  const categoryRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(0);
  
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
  const categories = [...new Set(data.map(item => item.category))];
  const categorySales = categories.map(category =>
    data.filter(item => item.category === category).reduce((total, item) => total + item.sales, 0)
  );
  
  const pieData = {
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
        borderColor: '#FFFFFF',
        borderWidth: 0.3,
        cutout: '50%'
      }
    ]
  };

  const handleSegmentClick = (event, elements) => {
    if (elements.length > 0) {
      const index = elements[0].index;
      // console.log(index)
      const prevCategory = categoryRef.current;
      const category = categories[index];
      categoryRef.current = category;
      const filteredData = data.filter(item => item.category === category);
      console.log(prevCategory, category);
      // to check if the selected category is same as previous
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
  console.log(drillDownData);
  const drillDownPieData = drillDownData ? {
    labels: drillDownData.map(item => item.product),
    datasets: [
      {
        label: `Sales for ${drillDownCategory}`,
        data: drillDownData.map(item => item.sales),
        backgroundColor: chartColors[selectedCategory],
        borderColor: '#FFFFFF',
        borderWidth: 0
      }
    ]
  } : null;

  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: true,
        position: 'right',
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
        text: 'Sales by Category',
        font: { 
          family: 'Poppins',
          size: 16, 
          weight: 'bold',
          // color: '#000000'
          
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
      }
    },
    onClick: handleSegmentClick
  };

  const drillDownOptions = {
    responsive: true,
    layout: { 
      padding:10,
      top: -5
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: `Sales Details for ${drillDownCategory}`,
        font: { 
          family: 'Poppins',
          size: 16, 
          weight: 'bold',
          // color: '#000000'
        },
        color: '#000000'

      }
    }
  };

  return (
    <div className="d-flex col-lg-12 pt-2 justify-content-around">
      <div className='chart1' >
        <Pie data={pieData} options={options} />
      </div>
      {drillDownData && (
        <div className='chart1'>
          <Pie data={drillDownPieData} options={drillDownOptions} />
        </div>
      )}

    </div>
  );
};

export default PieChartView;
