import { useState, useEffect } from 'react';
import { fetchUserDetails } from './fetchUserDetails';

export const useUpcomingCheckouts = (currentTime) => {
  const [upcomingCheckouts, setUpcomingCheckouts] = useState([]);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('http://localhost:3001/api/checkins')
        .then(response => response.json())
        .then(data => {
          const filteredCheckouts = data.filter(checkin => {
            const expirationTimeUTC = new Date(checkin.expiration_time);
            return expirationTimeUTC > currentTime;
          });

          const userIds = filteredCheckouts.map(checkout => checkout.user_id);
          userIds.forEach(async (userId) => {
            const userDetails = await fetchUserDetails(userId);
            setUserDetails(prevState => ({
              ...prevState,
              [userId]: userDetails
            }));
          });

          setUpcomingCheckouts(filteredCheckouts);
        })
        .catch(error => console.error('Error fetching checkins:', error));
    }, 1000);

    return () => clearInterval(interval);
  }, [currentTime]);

  return { upcomingCheckouts, userDetails };
};
