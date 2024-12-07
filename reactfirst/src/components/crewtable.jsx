import React from 'react';

const CrewTable = ({ data, onActionClick }) => {
  return (
    <div className="tablesData">
      <table className="data-table">
        <thead>
          <tr>
            <th>Bus Number</th>
            <th>Route</th>
            <th>Crew ID</th>
            <th>Crew Name</th>
            <th>Bus Status</th>
            <th>Next Maintenance</th>
             <th>Fuel Efficiency</th>
            <th>Actions</th>
            
            
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.crewId}>
              <td>{item.busNumber}</td>
              <td>{item.route}</td>
              <td>{item.crewId}</td>
              <td>{item.crewName}</td>
              <td>{item.status}</td>
              <td>{item.maintenance}</td>
              <td>{item.fuelEfficiency}</td>
              
              
              
              <td>
                <button
                  className={`action-btn ${item.action === 'Deploy' ? 'deploy' : 'park'}`}
                  onClick={() => onActionClick(item)}
                >
                  {item.action}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrewTable;
