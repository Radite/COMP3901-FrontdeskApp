import '../styles/TopBar.css'; 
import React from 'react';
import { useLocation } from 'react-router-dom';


const TopBar = () => {
    const location = useLocation();

    // Check if the current page is an authentication page
    const isAuthPage = location.pathname === '/login' || location.pathname === '/forgot-password';

    return (
        <div id="top-bar" className={isAuthPage ? 'auth-page' : ''}> {/* Apply the CSS class conditionally */}
            <div className="left-section">
                <span>@UWIGym</span>
            </div>
            <div className="right-section">
                <div className="notification">
                    <i className="fas fa-bell"></i>
                    <span className="badge">0</span> {/* Initial notification count */}
                </div>
                <span className="user-name">John Doe</span> {/* Replace with actual user name */}
            </div>
        </div>
    );
}

export default TopBar;
