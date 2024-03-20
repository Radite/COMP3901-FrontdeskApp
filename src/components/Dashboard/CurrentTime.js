import React from 'react';

const CurrentTime = ({ currentTime }) => (
  <section className="current-time">
    <div className="icon"><i className="fas fa-clock"></i></div>
    <h2>Current Time</h2>
    <p>{currentTime.toLocaleDateString()}</p>
    <p>{currentTime.toLocaleTimeString()}</p>
  </section>
);

export default CurrentTime;
