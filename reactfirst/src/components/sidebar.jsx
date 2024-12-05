import React from 'react';
import '../App.css'; // Shared styles

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>DTC Dashboard</h2>
      </div>
      <nav>
        <ul className="menu">
          <li><a href="#!" className="menu-link">Home</a></li>
          <li><a href="#!" className="menu-link">Linked Duty Scheduling</a></li>
          <li><a href="#!" className="menu-link">Unlinked Duty Scheduling</a></li>
          <li><a href="#!" className="menu-link">Route Management</a></li>
          <li><a href="#!" className="menu-link">Bus Stop Management</a></li>
          <li><a href="#!" className="menu-link">Data Analytics</a></li>
          <li><a href="#!" className="menu-link">Resource Optimization</a></li>
          <li><a href="#!" className="menu-link">Emergency Response</a></li>
          <li><a href="#!" className="menu-link">Passenger Alert</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
