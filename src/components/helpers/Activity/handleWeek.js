import { getWeekDates } from './DateUtils';

export function handlePrevWeek(weekOffset, setWeekOffset, setPrevWeekHasData) {
  const { startOfWeek, endOfWeek } = getWeekDates(weekOffset + 1);
  const formattedStartDate = startOfWeek.toISOString().split('T')[0];
  const formattedEndDate = endOfWeek.toISOString().split('T')[0];

  fetch(`http://localhost:3001/api/visitors/dateRange?startDate=${formattedStartDate}&endDate=${formattedEndDate}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.json();
    })
    .then(prevWeekData => {
      console.log('Previous week data:', prevWeekData);
      if (prevWeekData.length > 0) {
        setWeekOffset(weekOffset + 1);
        setPrevWeekHasData(true);
      } else {
        setPrevWeekHasData(false);
      }
    })
    .catch(error => {
      console.error('Error:', error.message);
      setPrevWeekHasData(false);
    });
}

export function handleNextWeek(weekOffset, setWeekOffset, setPrevWeekHasData) {
  const nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate() - nextWeek.getDay() + 7);
  const { startOfWeek } = getWeekDates(weekOffset - 1);
  if (startOfWeek < nextWeek) {
    setWeekOffset(weekOffset - 1);
    setPrevWeekHasData(true);
  }
}
