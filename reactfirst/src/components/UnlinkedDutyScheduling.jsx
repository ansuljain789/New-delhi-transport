import React, { useState } from "react";
import "../style/UnlinkedDutySheduling.css"; 

const UnlinkedDutyScheduling = () => {
  const [crewId, setCrewId] = useState("");
  const [busNumber, setBusNumber] = useState("");
  const [restPeriod, setRestPeriod] = useState("");

  const handleSubmit = () => {
    if (crewId && busNumber && restPeriod) {
      alert(`Schedule Submitted:\nCrew ID: ${crewId}\nBus Number: ${busNumber}\nRest Period: ${restPeriod} minutes`);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="unlink-duty-scheduling">
      <h1 className="title">Unlinked Duty Scheduling</h1>
      <div className="form-container1">
        {/* Crew ID Dropdown */}
        <div className="input-group">
          <label htmlFor="crewId">Select Crew ID</label>
          <select
            id="crewId"
            className="dropdown"
            value={crewId}
            onChange={(e) => setCrewId(e.target.value)}
          >
            <option value="">Select Crew ID</option>
            <option value="crew1">Crew 1</option>
            <option value="crew2">Crew 2</option>
          </select>
        </div>

        {/* Bus Number Dropdown */}
        <div className="input-group">
          <label htmlFor="busNumber">Select Bus Number</label>
          <select
            id="busNumber"
            className="dropdown"
            value={busNumber}
            onChange={(e) => setBusNumber(e.target.value)}
          >
            <option value="">Select Bus Number</option>
            <option value="bus1">Bus 1</option>
            <option value="bus2">Bus 2</option>
          </select>
        </div>

        {/* Rest Period Input */}
        <div className="input-group">
          <label htmlFor="restPeriod">Rest Period (minutes)</label>
          <input
            id="restPeriod"
            type="number"
            className="input-box"
            placeholder="Enter rest period"
            value={restPeriod}
            onChange={(e) => setRestPeriod(e.target.value)}
          />
        </div>
      </div>

      {/* Submit Button */}
      <button className="submit-button" onClick={handleSubmit}>
        Add Schedule
      </button>
    </div>
  );
};

export default UnlinkedDutyScheduling;
