import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import useCheckinsData from '../helpers/Activity/useCheckinsData';
import { format } from 'date-fns';

function DailyPeakHoursChart() {
  const data = useCheckinsData();
  const currentDayOfWeek = format(new Date(), 'EEEE'); // Get the current day of the week

  return (
    <div>
      <h2>Daily Peak Hours</h2>
      <p>{`Day of the Week: ${currentDayOfWeek}`}</p>
      <BarChart width={800} height={300} data={data}>
        <XAxis dataKey="hour" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default DailyPeakHoursChart;
