import { useEffect } from 'react';
import { getWeekDates, formatDate } from './DateUtils';

export function useFetchVisitorData(weekOffset, setData, setDateRange) {
  useEffect(() => {
    const { startOfWeek, endOfWeek } = getWeekDates(weekOffset);
    setDateRange(`${formatDate(startOfWeek)} - ${formatDate(endOfWeek)}`);
    const formattedStartDate = startOfWeek.toISOString().split('T')[0];
    const formattedEndDate = endOfWeek.toISOString().split('T')[0];
  
    console.log('Requesting data for date range:', formattedStartDate, 'to', formattedEndDate);
  
    fetch(`http://localhost:3001/api/visitors/dateRange?startDate=${formattedStartDate}&endDate=${formattedEndDate}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => console.error('Error:', error.message));
  }, [weekOffset, setData, setDateRange]);
}
