# Sales Dashboard

This is a Sales Dashboard, built with React, Chart.js, and Bootstrap. 
It provides various data visualizations such as line charts, bar charts, and pie charts to display sales data trends. 
The dashboard includes features like date range filtering, drill-down capabilities, and interactive tooltips.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Data](#data)

## Features

- **Dashboard Layout**: A clean and responsive dashboard layout with sections for different visualizations.
- **Line Chart**: Displays sales trends over time (e.g., monthly or quarterly).
- **Bar Chart**: Shows sales by product category or region with drill-down capabilities.
- **Pie Chart**: Illustrates market share breakdown with drill-down capabilities.
- **Date Range Filter**: Allows users to select a custom date range to update the visualizations.
- **Interactivity**: Includes tooltips for detailed information on hover.

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/KSagar1997/sales_dashboard
    checkout to master.
    cd sales-dashboard
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Start the development server**:
    ```sh
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

### Adding Sales Data

The sales data is provided in a static JSON format located in `public/salesData.json`. 
You can modify this file to update the data visualized by the dashboard.

### Customizing the Dashboard

To customize the dashboard, you can edit the React components located in the `src/components` `src/shared`directory. The main components include:

- `Navbar.jsx`: The navigation bar component.
- `Dashboard.jsx`: The main dashboard component containing the layout.
- `LineChartView.jsx`: Component for displaying the line chart.
- `BarChartView.jsx`: Component for displaying the bar chart with drill-down.
- `PieChartView.jsx`: Component for displaying the pie chart with drill-down.

### Importing Additional Fonts

The application uses the Poppins font imported from Google Fonts. To use a different font, update the link in `public/index.html` and modify the CSS files accordingly.

### Thank you :)

