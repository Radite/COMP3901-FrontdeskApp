import React from 'react';
import '../../styles/Dashboard.css';
import { useGymCapacity } from '../../components/helpers/Dashboard/useGymCapacity';
import { useCurrentTime } from '../../components/helpers/Dashboard/useCurrentTime';
import { useUpcomingCheckouts } from '../../components/helpers/Dashboard/useUpcomingCheckouts';
import UpcomingCheckoutsTable from './UpcomingCheckoutsTable'; 
import { useRecentCheckins } from './useRecentCheckins'; 
import RecentCheckinsTable from './recentCheckinsTable'; 
import CurrentTime from './CurrentTime'; 
import GymCapacity from './GymCapacity'; 


const Dashboard = () => {
  const gymCapacity = useGymCapacity();
  const currentTime = useCurrentTime();
  const { upcomingCheckouts, userDetails } = useUpcomingCheckouts(currentTime);
  const recentCheckins = useRecentCheckins(currentTime); 


  return (
    <div className="dashboard">
      <header>
      <CurrentTime currentTime={currentTime} />
      <GymCapacity gymCapacity={gymCapacity} />
      </header>
      <UpcomingCheckoutsTable upcomingCheckouts={upcomingCheckouts} userDetails={userDetails} currentTime={currentTime} />



      <RecentCheckinsTable recentCheckins={recentCheckins} />

    </div>
  );
};

export default Dashboard;
