import { useEffect } from 'react';

export function useFetchNotifications(setNotificationCount) {
  useEffect(() => {
    fetch('http://localhost:3001/api/notifications')
      .then(response => response.json())
      .then(data => {
        console.log('Notifications:', data); // Log the notifications
        setNotificationCount(data.length); // Set the count to the length of the array
      });
  }, [setNotificationCount]);
}
