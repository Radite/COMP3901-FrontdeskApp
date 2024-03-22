import React, { useState, useEffect } from 'react';

function NotificationsTable() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch the notifications from your API
    fetch('http://localhost:3001/api/notifications')
      .then(response => response.json())
      .then(data => setNotifications(data));
  }, []);

  return (
    <div className="NotificationsTable">
      <h2>Notifications</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map((notification) => (
            <tr key={notification._id}>
              <td>{new Date(notification.notification_time).toLocaleDateString()}</td>
              <td>{notification.notification_type}</td>
              <td>{notification.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NotificationsTable;
