import '../styles/TopBar.css'; 
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const TopBar = () => {
    const location = useLocation();
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Fetch the notifications from your API
        fetch('http://localhost:3001/api/notifications')
          .then(response => response.json())
          .then(data => setNotifications(data));
    }, []);

    // Check if the current page is an authentication page
    const isAuthPage = location.pathname === '/login' || location.pathname === '/forgot-password';

    return (
        <div id="top-bar" className={isAuthPage ? 'auth-page' : ''}>
            <div className="left-section">
                <span>@UWIGym</span>
            </div>
            <div className="right-section">
                <a href="/activity" className="notification"> {/* Updated to use <a> tag */}
                    <i className="fas fa-bell"></i>
                    <span className="badge">{notifications.length}</span>
                </a>
                <span className="user-name">John Doe</span>
            </div>
        </div>
    );
}

export default TopBar;
