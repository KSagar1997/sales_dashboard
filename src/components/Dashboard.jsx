// import React, { useState, useEffect } from 'react';
// import LineChartView from './core/LineChartView';
// import BarChartView from './core/BarChartView';
// import PieChartView from './core/PieChartView';
// // import DateRangeFilter from './DateRangeFilter';

// const Dashboard = () => {
//   const [salesData, setSalesData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [drillDownData, setDrillDownData] = useState(null);

//   useEffect(() => {
//     fetch('/salesData.json')
//       .then(response => response.json())
//       .then(data => {
//         setSalesData(data);
//         setFilteredData(data);
//       });
//   }, []);

//   const handleFilter = (startDate, endDate) => {
//     const filtered = salesData.filter(item =>
//       (!startDate || new Date(item.date) >= new Date(startDate)) &&
//       (!endDate || new Date(item.date) <= new Date(endDate))
//     );
//     setFilteredData(filtered);
//   };

//   const handleDrillDown = (data) => {
//     setDrillDownData(data);
//   };

//   const dataToDisplay = drillDownData || filteredData;

//   return (
//     <div className="dashboard">
//       <h1>Sales Dashboard</h1>
//       {/* <DateRangeFilter onFilter={handleFilter} /> */}
//       <div className="charts">
//         <div className="chart">
//           <LineChartView data={dataToDisplay} onDrillDown={handleDrillDown} />
//         </div>
//         <div className="chart">
//           <BarChartView data={dataToDisplay} onDrillDown={handleDrillDown} />
//         </div>
//         <div className="chart">
//           <PieChartView data={dataToDisplay} onDrillDown={handleDrillDown} />
//         </div>
//       </div>
//       {drillDownData && <button onClick={() => setDrillDownData(null)}>Back to Overview</button>}
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useState, useEffect } from 'react';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
// import { Bar, Line, Pie } from 'react-chartjs-2';

// ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ArcElement);

// const Dashboard = () => {
//   const [salesData, setSalesData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     fetch('/salesData.json')
//       .then(response => response.json())
//       .then(data => {
//         setSalesData(data);
//         setFilteredData(data);
//       });
//   }, []);

//   const handleFilter = (startDate, endDate) => {
//     const filtered = salesData.filter(item =>
//       (!startDate || new Date(item.date) >= new Date(startDate)) &&
//       (!endDate || new Date(item.date) <= new Date(endDate))
//     );
//     setFilteredData(filtered);
//   };

//   const barData = {
//     labels: filteredData.map(item => item.date),
//     datasets: [
//       {
//         label: 'Sales',
//         data: filteredData.map(item => item.sales),
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1
//       }
//     ]
//   };

//   // Correct the pieData structure
//   const categories = [...new Set(filteredData.map(item => item.category))];
//   const categorySales = categories.map(category =>
//     filteredData
//       .filter(item => item.category === category)
//       .reduce((total, item) => total + item.sales, 0)
//   );

//   const pieData = {
//     labels: categories,
//     datasets: [
//       {
//         label: 'Sales by Category',
//         data: categorySales,
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)'
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)'
//         ],
//         borderWidth: 1
//       }
//     ]
//   };

//   const lineData = {
//     labels: filteredData.map(item => item.date),
//     datasets: [
//       {
//         label: 'Sales Trend',
//         data: filteredData.map(item => item.sales),
//         fill: false,
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//       }
//     ]
//   };

//   return (
//     <div className="dashboard">
//       <h1>Sales Dashboard</h1>
//       <div className="charts">
//         <div className="chart">
//           <Bar data={barData} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Sales by Date' }}}}/>
//         </div>
//         <div className="chart">
//           <Pie data={pieData} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Sales by Category' }}}}/>
//         </div>
//         <div className="chart">
//           <Line data={lineData} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Sales Trend' }}}}/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from 'react';
import BarChartView from './core/BarChartView';
// import LineChartView from './components/core/LineChartView';
import LineChartView from './core/LineChartView';
import PieChartView from './core/PieChartView';
import DateFilter from './DateFilter';
import Navbar from '../shared/Navbar';

const Dashboard = () => {
  const [salesData, setSalesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch('/salesData.json')
      .then(response => response.json())
      .then(data => {
        setSalesData(data);
        setFilteredData(data);
      });
  }, []);

  const handleFilter = (startDate, endDate) => {
    const filtered = salesData.filter(item =>
      (!startDate || new Date(item.date) >= new Date(startDate)) &&
      (!endDate || new Date(item.date) <= new Date(endDate))
    );
    setFilteredData(filtered);
  };

  return (
    <div className="container head-container m-0 p-0 vh-100">
      <Navbar />
      <div className="col-lg-12 d-flex justify-content-between main-section p-2 ps-2 pe-2" >
        <div className="d-flex flex-column col-lg-6 justify-content-start pe-2">
          <DateFilter onFilter = {handleFilter} />
          <div className="col-lg-12 d-flex card-section">
            <BarChartView data={filteredData} />
          </div>
        </div>
        <div className="d-flex flex-column col-lg-6 justify-content-start">
          <div className='mb-2 card-section'>
            <PieChartView data={filteredData} />
          </div>
          <div>
            <LineChartView data={filteredData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
 