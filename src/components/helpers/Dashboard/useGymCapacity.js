import { useState, useEffect } from 'react';
import { fetchGymCapacity } from './GymCapacity'; 
export const useGymCapacity = () => {
  const [gymCapacity, setGymCapacity] = useState(null);

  useEffect(() => {
    fetchGymCapacity()
      .then(setGymCapacity)
      .catch(error => console.error('Error fetching gym capacity:', error));
  }, []);

  return gymCapacity;
};
