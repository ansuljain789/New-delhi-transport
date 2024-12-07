import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './dashboard';
import LinkedDutyScheduling from './LinkedDutyScheduling';
import UnlinkedDutyScheduling from './UnlinkedDutyScheduling';
import RouteManagement from './RouteManagment'
import Emergency from './EmergencyResponce'
import Passenger from './PassengerAlert';

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
              <li><Link to="/unlinked-duty-sheduling" className="menu-link">Unlinked Duty Scheduling</Link></li>
              <li><Link to="/route-managment" className="menu-link">Route Managment</Link></li>
              <li><Link to="/emergency-responce" className="menu-link">Emergency Responce</Link></li>
              <li><Link to="/passenger-alert" className="menu-link">Passenger Alert</Link></li>
              
            </ul>
          </nav>
        </aside>
        <div className="main-content">
          <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Dashboard />} />
            <Route path="/linked-duty-scheduling" element={<LinkedDutyScheduling />} />
            <Route path="/unlinked-duty-sheduling" element={<UnlinkedDutyScheduling />} />
            <Route path="/route-managment" element={<RouteManagement />} />
            <Route path="/emergency-responce" element={<Emergency />} />
            <Route path="/passenger-alert" element={<Passenger />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Sidebar;