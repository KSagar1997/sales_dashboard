const BarChartPlugin = {
    id: 'axisLineColorPlugin',
    beforeDraw: (chart) => {
      const ctx = chart.ctx;
      const xAxis = chart.scales['x'];
      const yAxis = chart.scales['y'];
  
      ctx.strokeStyle = 'red';
  
      // Draw x-axis line
      ctx.beginPath();
      ctx.moveTo(xAxis.left, xAxis.top);
      ctx.lineTo(xAxis.right, xAxis.bottom);
      ctx.stroke();
  
      // Draw y-axis line
      ctx.beginPath();
      ctx.moveTo(yAxis.left, yAxis.top);
      ctx.lineTo(yAxis.right, yAxis.bottom);
      ctx.stroke();
    }
  };
  
  export default BarChartPlugin;
  