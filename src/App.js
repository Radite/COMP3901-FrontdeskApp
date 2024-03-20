import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import TopBar from './components/TopBar';
import SidePanel from './components/SidePanel';
import UserTable from './components/Users/UserTable';
import GymActivity from './components/GymActivity';
import LoginPage from './components/LoginPage';
import ForgotPassword from './components/ForgotPassword';

function App() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };

  return (
    <Router>
      <div className={`App ${isSidePanelOpen ? 'side-panel-opened' : ''}`}>
        <SidePanel isOpen={isSidePanelOpen} toggleSidePanel={toggleSidePanel} />

        <main className="main-content">
        <TopBar toggleSidePanel={toggleSidePanel} isSidePanelOpen={isSidePanelOpen} />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<UserTable />} />
            <Route path="/activity" element={<GymActivity />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Render ForgotPassword for /forgot-password route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
