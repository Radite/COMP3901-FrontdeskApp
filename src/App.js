import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import './App.css';
import TopBar from './components/TopBar';
import SidePanel from './components/SidePanel';
import UserTable from './components/UserTable';
import GymActivity from './components/GymActivity';

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
          <TopBar toggleSidePanel={toggleSidePanel} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<UserTable />} />
            <Route path="/activity" element = {<GymActivity/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
