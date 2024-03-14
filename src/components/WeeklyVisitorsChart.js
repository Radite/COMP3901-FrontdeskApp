// WeeklyVisitorsChart.js
import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function WeeklyVisitorsChart() {
  const data = [
    {name: 'Mon', visitors: 4000},
    {name: 'Tue', visitors: 3000},
    {name: 'Wed', visitors: 2000},
    {name: 'Thu', visitors: 2780},
    {name: 'Fri', visitors: 1890},
    {name: 'Sat', visitors: 2390},
    {name: 'Sun', visitors: 3490},
  ];

  return (
    <div className="WeeklyVisitorsChart">
      <h2>Weekly Visitors</h2>
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
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="visitors" fill="#8884d8" />
      </BarChart>
      */}
    </div>
  );
}

export default WeeklyVisitorsChart;
