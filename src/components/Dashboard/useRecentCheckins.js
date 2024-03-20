// useRecentCheckins.js
import { useState, useEffect } from 'react';
import { fetchUserDetails } from '../../components/helpers/Dashboard//fetchUserDetails'; 
export const useRecentCheckins = (currentTime) => {
  const [recentCheckins, setRecentCheckins] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/checkins')
      .then(response => response.json())
      .then(async data => {
        const filteredCheckins = data.filter(checkin => new Date(checkin.checkin_time) < currentTime);
        const updatedCheckins = [];
        for (const checkin of filteredCheckins) {
          const userDetails = await fetchUserDetails(checkin.user_id);
          updatedCheckins.push({ ...checkin, ...userDetails });
        }
        setRecentCheckins(updatedCheckins);
      })
      .catch(error => console.error('Error fetching checkins:', error));
  }, [currentTime]);

  return recentCheckins;
};
