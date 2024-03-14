// DailyPeakHoursChart.js
import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function DailyPeakHoursChart() {
  const data = [
    {hour: '8-9', visitors: 400},
    {hour: '9-10', visitors: 300},
    {hour: '10-11', visitors: 200},
  ];

  return (
    <div className="DailyPeakHoursChart">
      <h2>Daily Peak Hours</h2>
      {/*
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="hour" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="visitors" fill="#8884d8" />
      </BarChart>
      */}
    </div>
  );
}

export default DailyPeakHoursChart;
