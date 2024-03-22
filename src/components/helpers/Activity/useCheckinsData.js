import { useState, useEffect } from 'react';

function useCheckinsData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the data from your API
    fetch('http://localhost:3001/api/checkins')
      .then(response => response.json())
      .then(checkins => {
        console.log('Full checkin data:', checkins); // Log the full checkin data

        // Aggregate the data by hour and date
        const countsByHourAndDate = checkins.reduce((counts, checkin) => {
          const checkinDate = new Date(checkin.checkin_time);
          const hour = checkinDate.getHours();
          const date = checkinDate.toISOString().split('T')[0]; // Get the date part
          counts[hour] = counts[hour] || {};
          counts[hour][date] = (counts[hour][date] || 0) + 1;
          return counts;
        }, {});

        console.log('Counts by hour and date:', countsByHourAndDate); // Log how the data are split
  
        // Calculate the average number of visitors for each hour
        const averagesByHour = Object.entries(countsByHourAndDate).map(([hour, countsByDate]) => {
          const sum = Object.values(countsByDate).reduce((a, b) => a + b, 0);
          const count = Object.keys(countsByDate).length;
          return { hour: `${parseInt(hour)}-${parseInt(hour)+1}`, count: (sum / count).toFixed(2) };
        });
  
        setData(averagesByHour);
      });
  }, []);

  return data;
}

export default useCheckinsData;
