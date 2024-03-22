import React, { useState, useEffect } from 'react';
import WeeklyVisitorsChart from './WeeklyVisitorsChart';
import DailyPeakHoursChart from './DailyPeakHoursChart';
import NotificationsTable from './NotificationsTable';
import '../../styles/GymActivity.css';
import { useFetchNotifications } from '../helpers/Activity/useFetchNotifications';


function GymActivity() {
  const [notificationCount, setNotificationCount] = useState(0);

  useFetchNotifications(setNotificationCount);
  
  return (
    <div className="GymActivity">
      <div className="top-section">
        {/* Bubble with new notifications */}
        <div className="notification-bubble">
          <div className="notification-text">New Notifications</div>
          <div className="notification-count">{notificationCount}</div>
        </div>
        {/* WeeklyVisitorsChart with square frame */}
        <div className="chart-wrapper-weekly">
          <WeeklyVisitorsChart />
        </div>
      </div>
      {/* DailyPeakHoursChart with square frame */}
      <div className="chart-wrapper-daily">
        <DailyPeakHoursChart />
      </div>
      <NotificationsTable />
    </div>
  );
}

export default GymActivity;
