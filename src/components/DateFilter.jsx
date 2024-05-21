import React, { useState } from 'react';

const DateFilter = ({ onFilter }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleFilter = () => {
    onFilter(startDate, endDate);
  };

  return (
    <div className="d-flex col-lg-12 p-2 justify-content-center card-section mb-2">
      <div className="filterPanel d-flex col-8 justify-content-between">
        <input
          type="date"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
          placeholder="Start Date"
        />
        <input
          type="date"
          value={endDate}
          onChange={e => setEndDate(e.target.value)}
          placeholder="End Date"
        />
        <button onClick={handleFilter}>Filter</button>
      </div>
    </div>
  );
};

export default DateFilter;
