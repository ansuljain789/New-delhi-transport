import React, { useState } from 'react';
import '../App.css';

const AddCrewMember = () => {
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

    if (!crewFirstName || !crewLastName || !aadharNumber || !phoneNumber || !crewId || !crewRole || !license || !yearsOfExperience) {
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

  return (
    <div>
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
        <button type="submit" className="submit-btn">
          Add Crew Member
        </button>
      </form>
    </div>
  );
};

export default AddCrewMember;
