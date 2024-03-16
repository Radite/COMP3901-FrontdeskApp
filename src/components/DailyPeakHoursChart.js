// DailyPeakHoursChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function DailyPeakHoursChart() {
  // Data for all hour intervals up to 5pm
  const data = [
    { hour: '8-9', visitors: 400 },
    { hour: '9-10', visitors: 300 },
    { hour: '10-11', visitors: 200 },
    { hour: '11-12', visitors: 400 },
    { hour: '12-13', visitors: 300 },
    { hour: '13-14', visitors: 200 },
    { hour: '14-15', visitors: 400 },
    { hour: '15-16', visitors: 300 },
    { hour: '16-17', visitors: 200 },
  ];

  return (
    <div className="DailyPeakHoursChart">
      <h2>Daily Peak Hours</h2>
      <BarChart
        width={1000}
        height={250}
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
    </div>
  );
}

export default DailyPeakHoursChart;
