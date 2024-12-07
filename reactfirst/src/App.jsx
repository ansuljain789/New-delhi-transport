import React from 'react';
import './App.css';

import Sidebar from './components/sidebar.jsx';
import Dashboard from './components/dashboard.jsx';
import  BusScheduling from './components/LinkDutySheduling.jsx';

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <Dashboard />
      <BusScheduling/>
    </div>
  );
};

export default App;




// import React from 'react';
// import './App.css';
// import Dashboard from './components/Dashboard';

// const App = () => {
//   return (
//     <div className="container">
//       <Dashboard />
//     </div>
//   );
// };

// export default App;


