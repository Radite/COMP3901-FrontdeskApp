// GymNotifications.js
import React from 'react';

function GymNotifications() {
  // You can replace this with your own logic
  const notifications = ['Notification 1', 'Notification 2', 'Notification 3'];

  return (
    <div className="GymNotifications">
      <h2>Gym Notifications</h2>
      {notifications.map((notification, index) => (
        <p key={index}>{notification}</p>
      ))}
    </div>
  );
}

export default GymNotifications;
