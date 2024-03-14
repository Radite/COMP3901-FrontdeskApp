// NotificationsTable.js
import React from 'react';

function NotificationsTable() {
  // You can replace this with your own data
  const notifications = [
    {id: 1, type: 'Checkout Alert', details: 'John Brown’s checkout is approaching at 11:25PM'},
    {id: 2, type: 'Capacity Alert', details: 'Gym is approaching capacity'},
    // ... more data
  ];

  return (
    <div className="NotificationsTable">
      <h2>Notifications</h2>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map((notification) => (
            <tr key={notification.id}>
              <td>{notification.type}</td>
              <td>{notification.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NotificationsTable;
