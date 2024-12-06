import React from 'react';
import './App.css';

import Sidebar from './components/sidebar.jsx';
import Dashboard from './components/dashboard.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      {/* <Dashboard /> */}
    </div>
  );
};

export default App;

