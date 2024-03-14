// TopBar.js

import React from 'react';

const TopBar = () => {
    return (
        <div id="top-bar">
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
