import React, { useState } from 'react';
import '../App.css';
import CrewTable from './crewtable';
const initialData = [
  {
    busNumber: '101',
    route: 'CRP Square',
    crewId: '5678',
    crewName: 'Hemant Khora',
    status: 'Sheduled',
    maintenance: 'Scheduled',
    fuelEfficiency: '8.5 MPG',

  },
  {
    busNumber: '102',
    route: 'Fire Station',
    crewId: '5689',
    crewName: 'Ansul Jain',
    status: 'Complete',
    maintenance: 'Completed',
    fuelEfficiency: '9.1 MPG',
  },
];

const Dashboard = () => {
  const [data] = useState(initialData);
  const [formValues, setFormValues] = useState({
    crewFirstName: '',
    crewLastName: '',
    aadharNumber: '',
    phoneNumber: '',
    crewId: '',
    crewRole: '',
    file: null,
    license: '',
    yearsOfExperience: '',
    status: 'Active',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormValues({ ...formValues, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      crewFirstName,
      crewLastName,
      aadharNumber,
      phoneNumber,
      crewId,
      crewRole,
      license,
      yearsOfExperience,
    } = formValues;

    if (
      !crewFirstName ||
      !crewLastName ||
      !aadharNumber ||
      !phoneNumber ||
      !crewId ||
      !crewRole ||
      !license ||
      !yearsOfExperience
    ) {
      alert('Please fill out all required fields.');
      return;
    }

    alert('Crew member added successfully!');
    setFormValues({
      crewFirstName: '',
      crewLastName: '',
      aadharNumber: '',
      phoneNumber: '',
      crewId: '',
      crewRole: '',
      file: null,
      license: '',
      yearsOfExperience: '',
      status: 'Active',
    });
  };

  const handleDetailsClick = (item) => {
    alert(`Details for Crew: ${item.crewName}\nStatus: ${item.status}`);
  };

  return (
    <main className="main-content">
      <h1>Bus Management Dashboard</h1>

      {/* Table Component */}
      <CrewTable data={data} onDetailsClick={handleDetailsClick} />

      {/* Add Crew Member Form */}
      <div className="form-container">
        <h2>Add Crew Member</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="crewFirstName">Crew First Name:</label>
            <input
              type="text"
              id="crewFirstName"
              name="crewFirstName"
              value={formValues.crewFirstName}
              onChange={handleInputChange}
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
              value={formValues.crewLastName}
              onChange={handleInputChange}
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
              value={formValues.aadharNumber}
              onChange={handleInputChange}
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
              value={formValues.phoneNumber}
              onChange={handleInputChange}
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
              value={formValues.crewId}
              onChange={handleInputChange}
              placeholder="Enter Crew ID"
              required
            />
          </div>
          <div className="form-group">
  <label htmlFor="crewRole">Crew Role:</label>
  <select
    id="crewRole"
    name="crewRole"
    value={formValues.crewRole}
    onChange={handleInputChange}
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
            <label htmlFor="file">File Upload:</label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="license">License:</label>
            <input
              type="text"
              id="license"
              name="license"
              value={formValues.license}
              onChange={handleInputChange}
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
              value={formValues.yearsOfExperience}
              onChange={handleInputChange}
              placeholder="Enter Years of Experience"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <select
              id="status"
              name="status"
              value={formValues.status}
              onChange={handleInputChange}
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