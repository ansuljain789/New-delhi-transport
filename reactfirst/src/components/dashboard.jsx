import React, { useState } from 'react';
import '../App.css';
import CrewTable from './crewtable';
import {Link} from "react-router-dom";

import axios from 'axios';
const initialData = [
  {
    busNumber: '101',
    route: 'Route A',
    crewId: '5678',
    crewName: 'Hemant Khora',
    status: 'Active',
    maintenance: 'Scheduled',
    fuelEfficiency: '8.5 MPG',

  },
  {
    busNumber: '102',
    route: 'Route B',
    crewId: '5689',
    crewName: 'Ansul Jain',
    status: 'Inactive',
    maintenance: 'Completed',
    fuelEfficiency: '9.1 MPG',
  },
];

const Dashboard = () => {
  const [data] = useState(initialData);
  const [registrationData, setRegistrationData] = useState({
    crewFirstName: '',
    crewLastName: '',
    aadharNumber: '',
    phoneNumber: '',
    crewId: '',
    crewRole: '',
    license: '',
    yearsOfExperience: '',
    status: 'Active',
  });

  const handleDetailsClick = (item) => {
    alert(`Details for Crew: ${item.crewName}\nStatus: ${item.status}`);
  };

  const handleRegistrationChange =(e) =>{
     const {name,value} = e.target;

     setRegistrationData((prevData) =>
     ({
            ...prevData,
            [name]:value,
     }))
  }
  const handleRegistrationSubmit =async (e) => {
    e.preventDefault();

    try{
      const response = await axios.post('http://localhost:8000/newcrew',registrationData)
      console.log(response.data);
      
    }
    catch(error){
      console.log(error);
      
    }

    alert('Crew member added successfully!');
    setRegistrationData({
      crewFirstName: '',
      crewLastName: '',
      aadharNumber: '',
      phoneNumber: '',
      crewId: '',
      crewRole: '',
      license: '',
      yearsOfExperience: '',
      status: 'Active',
    })
  };

  return (
    <main className="main-content">
      <h1>Bus Management Dashboard</h1>

      {/* Table Component */}
      <CrewTable data={data} onDetailsClick={handleDetailsClick} />

      {/* Add Crew Member Form */}
      <div className="form-container">
        <h2>Add Crew Member</h2>
        <form onSubmit={handleRegistrationSubmit} className="form">
          <div className="form-group">
            <label htmlFor="crewFirstName">Crew First Name:</label>
            <input
              type="String"
              id="crewFirstName"
              name="crewFirstName"
              value={registrationData.crewFirstName}
              onChange={handleRegistrationChange}
              placeholder="Enter First Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="crewLastName">Crew Last Name:</label>
            <input
              type="text"
              id="crewLastName"
              name="crewLastName"
              value={registrationData.crewLastName}
              onChange={handleRegistrationChange}
              placeholder="Enter Last Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="aadharNumber">Aadhar Number:</label>
            <input
              type="text"
              id="aadharNumber"
              name="aadharNumber"
              value={registrationData.aadharNumber}
              onChange={handleRegistrationChange}
              placeholder="Enter Aadhar Number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={registrationData.phoneNumber}
              onChange={handleRegistrationChange}
              placeholder="Enter Phone Number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="crewId">Crew ID:</label>
            <input
              type="text"
              id="crewId"
              name="crewId"
              value={registrationData.crewId}
              onChange={handleRegistrationChange}
              placeholder="Enter Crew ID"
              required
            />
          </div>
          <div className="form-group">
  <label htmlFor="crewRole">Crew Role:</label>
  <select
    id="crewRole"
    name="crewRole"
    value={registrationData.crewRole}
    onChange={handleRegistrationChange}
    required
  >
    <option value="" disabled>
      Select Role
    </option>
    <option value="Driver">Driver</option>
    <option value="Conductor">Conductor</option>
    <option value="Supervisor">Supervisor</option>
  </select>
           </div>
          <div className="form-group">
            <label htmlFor="license">License:</label>
            <input
              type="text"
              id="license"
              name="license"
              value={registrationData.license}
              onChange={handleRegistrationChange}
              placeholder="Enter License Number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="yearsOfExperience">Years of Experience:</label>
            <input
              type="number"
              id="yearsOfExperience"
              name="yearsOfExperience"
              value={registrationData.yearsOfExperience}
              onChange={handleRegistrationChange}
              placeholder="Enter Years of Experience"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <select
              id="status"
              name="status"
              value={registrationData.status}
              onChange={handleRegistrationChange}
              required
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <button type="submit" className="submit-btn">
            Add Crew Member
          </button>
        </form>
      </div>
    </main>
  );
};

export default Dashboard;