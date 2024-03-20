export const fetchGymCapacity = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/checkins/count');
    const data = await response.json();
    return data.count;
  } catch (error) {
    console.error('Error fetching gym capacity:', error);
  }
};
