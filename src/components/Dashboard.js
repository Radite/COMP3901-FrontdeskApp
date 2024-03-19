import React, { useState, useEffect } from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [gymCapacity, setGymCapacity] = useState(null);
  const [upcomingCheckouts, setUpcomingCheckouts] = useState([]);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  
  useEffect(() => {
    // Fetch gym capacity from backend
    fetch('http://localhost:3001/api/checkins/count')
      .then(response => response.json())
      .then(data => setGymCapacity(data.count))
      .catch(error => console.error('Error fetching gym capacity:', error));
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
  
      // Fetch gym capacity from backend
      fetch('http://localhost:3001/api/checkins')
        .then(response => response.json())
        .then(data => {
          const filteredCheckouts = data.filter(checkin => {
            const expirationTimeUTC = new Date(checkin.expiration_time); // Parse ISO 8601 string to Date object
            return expirationTimeUTC > new Date(); // Compare with current time
          });
          setUpcomingCheckouts(filteredCheckouts);
        })
        .catch(error => console.error('Error fetching checkins:', error));
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);
  
  
  // Function to format date and calculate time left
  const formatDate = dateString => {
    const date = new Date(dateString);
    return `${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  };

  const calculateTimeLeft = expirationTime => {
    const expirationDate = new Date(expirationTime);
    const timeLeftMs = expirationDate - currentTime;
    const timeLeftMinutes = Math.floor(timeLeftMs / (1000 * 60));
    return `${timeLeftMinutes} minutes`;
  };

  // Mock data for recent check-ins
  const recentCheckins = [
    { id: 1, name: "John Doe", idNumber: "123456", checkinTime: "2024-03-13T10:15:00" },
    { id: 2, name: "Jane Smith", idNumber: "789012", checkinTime: "2024-03-13T10:20:00" },
    { id: 3, name: "Alice Johnson", idNumber: "345678", checkinTime: "2024-03-13T10:25:00" },
    { id: 4, name: "Bob Brown", idNumber: "901234", checkinTime: "2024-03-13T10:30:00" },
    { id: 5, name: "Eve White", idNumber: "567890", checkinTime: "2024-03-13T10:35:00" }
  ];


  return (
    <div className="dashboard">
      <header>
        <section className="current-time">
          <div className="icon"><i className="fas fa-clock"></i></div>
          <h2>Current Time</h2>
          <p>{currentTime.toLocaleDateString()}</p>
          <p>{currentTime.toLocaleTimeString()}</p>
        </section>

        <section className="gym-capacity">
          <div className="icon"><i className="fas fa-user"></i></div>
          <h2>Gym Capacity</h2>
          <p>{gymCapacity !== null ? gymCapacity : 'Loading...'}</p>
        </section>
      </header>

      <section className="checkouts">
        <h2 style={{ textAlign: 'left' }}>Upcoming Checkouts</h2>
        <table className="checkouts-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID Number</th>
              <th>Checkin Time</th>
              <th>Time Left</th>
              <th></th> {/* Empty column for checkout button */}
            </tr>
          </thead>
          <tbody>
            {upcomingCheckouts.map(checkout => (
              <tr key={checkout.id}>
                <td>{checkout.user.username}</td>
                <td>{checkout.user.ID_number}</td>
                <td>{formatDate(checkout.checkin_time)}</td>
                <td>{calculateTimeLeft(checkout.expiration_time)}</td>
                <td><button disabled>Checkout</button></td> {/* Disabled button as placeholder */}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="check-ins">
        <h2 style={{ textAlign: 'left' }}>Recent Check ins</h2>
        <table className="checkins-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID Number</th>
              <th>Checkin Time</th>
            </tr>
          </thead>
          <tbody>
            {recentCheckins.map(checkin => (
              <tr key={checkin.id}>
                <td>{checkin.name}</td>
                <td>{checkin.idNumber}</td>
                <td>{new Date(checkin.checkinTime).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Dashboard;
