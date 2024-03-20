import React from 'react';

const GymCapacity = ({ gymCapacity }) => (
  <section className="gym-capacity">
    <div className="icon"><i className="fas fa-user"></i></div>
    <h2>Gym Capacity</h2>
    <p>{gymCapacity !== null ? gymCapacity : 'Loading...'}</p>
  </section>
);

export default GymCapacity;
