import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation hooks from React Router
import '../styles/SidePanel.css'; // Import the CSS file for styling


const SidePanel = ({ isOpen, toggleSidePanel }) => {
  const [expanded, setExpanded] = useState(isOpen);
  const location = useLocation();

   // Close the side panel when navigating to a new page
   useEffect(() => {
    setExpanded(false);
  }, [location]);

  const togglePanel = () => {
    setExpanded(!expanded);
    toggleSidePanel();
  };

    // Check if the current route is the login or forgot password page
    const isLoginPage = location.pathname === '/login';
    const isForgotPasswordPage = location.pathname === '/forgot-password';
  
    // Render the side panel only if the current route is not the login or forgot password page
    if (isLoginPage || isForgotPasswordPage) {
      return null;
    }

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
