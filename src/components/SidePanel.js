import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component from React Router
import '../styles/SidePanel.css'; // Import the CSS file for styling

const SidePanel = ({ isOpen, toggleSidePanel }) => {
  const [expanded, setExpanded] = useState(isOpen);

  const togglePanel = () => {
    setExpanded(!expanded);
    toggleSidePanel();
  };

  return (
    <div className={`side-panel ${expanded ? 'expanded' : 'collapsed'}`}>
      <div className="toggle-btn" onClick={togglePanel}>
        <i className={`fas ${expanded ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
      <div className="items-wrapper">
        <div className="items">
          <Link to="/" className="item">
            <i className="fas fa-home" style={{ color: 'white' }}></i>
            {expanded && <span style={{ color: 'white' }}>Dashboard</span>}
          </Link>
          <Link to="/users" className="item">
            <i className="fas fa-user" style={{ color: 'white' }}></i>
            {expanded && <span style={{ color: 'white' }}>Users</span>}
          </Link>
          <Link to="/activity" className="item">
            <i className="fas fa-bell" style={{ color: 'white' }}></i>
            {expanded && <span style={{ color: 'white' }}>Activity</span>}
          </Link>
          <div className="item">
            <i className="fas fa-cog" style={{ color: 'white' }}></i>
            {expanded && <span style={{ color: 'white' }}>Settings</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
