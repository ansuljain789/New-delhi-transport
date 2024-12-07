import React, { useState } from 'react';

const LinkedDutyScheduling = () => {
  const [filterStatus, setFilterStatus] = useState('All');

  // Sample data for the table
  const tableData = [
    { crewId: 'CREW001', busId: 'DL1234', route: 'Karol Bagh → Qutub Minar', startTime: '06:00', endTime: '14:00', status: 'Scheduled' },
    { crewId: 'CREW002', busId: 'DL1234', route: 'Karol Bagh → Qutub Minar', startTime: '14:00', endTime: '22:00', status: 'In Progress' },
    { crewId: 'CREW003', busId: 'DL5678', route: 'Humayun Road → Red Fort', startTime: '06:00', endTime: '14:00', status: 'Completed' },
    { crewId: 'CREW004', busId: 'DL5678', route: 'Humayun Road → Red Fort', startTime: '14:00', endTime: '22:00', status: 'Scheduled' },
    { crewId: 'CREW005', busId: 'DL4321', route: 'Connaught Place → India Gate', startTime: '06:00', endTime: '14:00', status: 'In Progress' },
  ];

  const handleFilterChange = (event) => {
    setFilterStatus(event.target.value);
  };

  // Filter data based on status
  const filteredData = filterStatus === 'All' ? tableData : tableData.filter(row => row.status === filterStatus);

  return (
    <div className="main-content">
      <h1>Linked Duty Scheduling</h1>
      <div className="form">
        {/* Dropdowns and Add Schedule Button */}
        <div className="form-group">
          <select>
            <option value="CREW001">CREW001</option>
            <option value="CREW002">CREW002</option>
            <option value="CREW003">CREW003</option>
          </select>
          <select>
            <option value="DL1234">DL1234</option>
            <option value="DL5678">DL5678</option>
            <option value="DL4321">DL4321</option>
          </select>
          <input type="time" placeholder="Start Time" />
          <input type="time" placeholder="End Time" />
          <select>
            <option value="Route A">Karol Bagh → Qutub Minar</option>
            <option value="Route B">Humayun Road → Red Fort</option>
            <option value="Route C">Connaught Place → India Gate</option>
          </select>
          <button className="submit-btn">Add Schedule</button>
        </div>
      </div>

      {/* Filter by Status */}
      <div className="form-group">
        <label htmlFor="statusFilter">Filter by status:</label>
        <select id="statusFilter" value={filterStatus} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Scheduled">Scheduled</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Table */}
      <div className="tablesData">
        <table className="data-table">
          <thead>
            <tr>
              <th>Crew ID</th>
              <th>Bus ID</th>
              <th>Route</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                <td>{row.crewId}</td>
                <td>{row.busId}</td>
                <td>{row.route}</td>
                <td>{row.startTime}</td>
                <td>{row.endTime}</td>
                <td>
                  <select defaultValue={row.status}>
                    <option value="Scheduled">Scheduled</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>
                <td>
                  <button className="action-btn park">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LinkedDutyScheduling;
