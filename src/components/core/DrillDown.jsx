// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const DrillDownChart = ({ data, category }) => {
//   const filteredData = data.filter(item => item.category === category);
//   const labels = filteredData.map(item => item.date);
//   const salesData = filteredData.map(item => item.sales);

//   const barData = {
//     labels,
//     datasets: [
//       {
//         label: `Sales for ${category}`,
//         data: salesData,
//         backgroundColor: 'rgba(153, 102, 255, 0.2)',
//         borderColor: 'rgba(153, 102, 255, 1)',
//         borderWidth: 1
//       }
//     ]
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top'
//       },
//       title: {
//         display: true,
//         text: `Sales Details for ${category}`
//       }
//     }
//   };

//   return <Bar data={barData} options={options} />;
// };

// export default DrillDownChart;
