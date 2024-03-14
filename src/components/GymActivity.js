import React from 'react';
import GymNotifications from './GymNotifications';
import WeeklyVisitorsChart from './WeeklyVisitorsChart';
import DailyPeakHoursChart from './DailyPeakHoursChart';
import NotificationsTable from './NotificationsTable';

function GymActivity() {
  return (
    <div className="GymActivity">
      <div className="top-section">
        <GymNotifications />
        <WeeklyVisitorsChart />
      </div>
      <DailyPeakHoursChart />
      <NotificationsTable />
    </div>
  );
}

export default GymActivity;
