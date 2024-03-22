import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { formatDay, getWeekDates } from '../helpers/Activity/DateUtils';
import { handlePrevWeek, handleNextWeek } from '../helpers/Activity/handleWeek';
import { useFetchVisitorData } from '../helpers/Activity/fetchVisitorData';


function WeeklyVisitorsChart() {
  const [data, setData] = useState([]);
  const [weekOffset, setWeekOffset] = useState(0);
  const [dateRange, setDateRange] = useState('');
  const [prevWeekHasData, setPrevWeekHasData] = useState(true);

  useFetchVisitorData(weekOffset, setData, setDateRange);


  return (
    <div className="WeeklyVisitorsChart">
      <h2>Weekly Visitors</h2>
      <p>Date Range: {dateRange}</p>
      <button onClick={() => handlePrevWeek(weekOffset, setWeekOffset, setPrevWeekHasData)} disabled={!prevWeekHasData}>←</button>
      <button onClick={() => handleNextWeek(weekOffset, setWeekOffset, setPrevWeekHasData)} disabled={new Date(getWeekDates(weekOffset - 1).startOfWeek) > new Date()}>→</button>
      <BarChart
        width={800}
        height={230}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" tickFormatter={formatDay} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="visitor_count" name="Visitors" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default WeeklyVisitorsChart;
