import React from 'react';
import WeeklyVisitorsChart from './WeeklyVisitorsChart';
import DailyPeakHoursChart from './DailyPeakHoursChart';
import NotificationsTable from './NotificationsTable';
import '../styles/GymActivity.css';

function GymActivity() {
  return (
    <div className="GymActivity">
      <div className="top-section">
        {/* Bubble with new notifications */}
        <div className="notification-bubble">
          <div className="notification-text">New Notifications</div>
          <div className="notification-count">5</div> {/* Placeholder number */}
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
