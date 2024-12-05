import React from 'react';
import './App.css';

import Sidebar from './components/sidebar.jsx';
import Dashboard from './components/dashboard.jsx';

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default App;
