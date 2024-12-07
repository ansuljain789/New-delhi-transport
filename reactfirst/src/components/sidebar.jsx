


import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './dashboard';
import LinkedDutyScheduling from './LinkedDutyScheduling';


const Sidebar = () => {
  return (
    <Router>
      <div className="container">
        <aside className="sidebar">
          <div className="sidebar-header">
            <h2>DTC Dashboard</h2>
          </div>
          <nav>
            <ul className="menu">
              <li><Link to="/home" className="menu-link">Home</Link></li>
              <li><Link to="/linked-duty-scheduling" className="menu-link">Linked Duty Scheduling</Link></li>
          
            </ul>
          </nav>
        </aside>
        <div className="main-content">
          <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Dashboard />} />
            <Route path="/linked-duty-scheduling" element={<LinkedDutyScheduling />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Sidebar;

