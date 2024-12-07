import React, { useState } from 'react';
import '../style/EmergencyResponse.css';

const EmergencyResponse = () => {
    const [records, setRecords] = useState([]);
    const [form, setForm] = useState({
        busNumber: '',
        emergencyType: '',
        location: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const reportEmergency = () => {
        const newRecord = {
            ...form,
            time: new Date().toLocaleTimeString()
        };
        setRecords([...records, newRecord]);
    };

    return (
        <div className="emergency-response-container">
            <h1>Emergency Responce</h1>
            <div className="form-container">
                <select name="busNumber" value={form.busNumber} onChange={handleInputChange}>
                    <option value="">Select Bus Number</option>
                    {/* Add bus numbers options here */}
                    <option value="1234">1234</option>
                    <option value="5678">5678</option>
                </select>

                <select name="emergencyType" value={form.emergencyType} onChange={handleInputChange}>
                    <option value="">Select Emergency Type</option>
                    <option value="Accident">Accident</option>
                    <option value="Breakdown">Breakdown</option>
                    <option value="MedicalEmergency">Medical Emergency</option>
                    <option value="Fire">Fire</option>
                    <option value="Flood">Flood</option>
                    <option value="Earthquake">Earthquake</option>
                    <option value="TrafficJam">Traffic Jam</option>
                    <option value="VehicleStuck">Vehicle Stuck</option>
                    <option value="MechanicalFailure">Mechanical Failure</option>
                    <option value="FuelShortage">Fuel Shortage</option>
                    <option value="PowerOutage">Power Outage</option>
                    <option value="Roadblock">Roadblock</option>
                    <option value="AnimalEncounter">Animal Encounter</option>
                    <option value="WeatherHazard">Weather Hazard</option>
                    <option value="Other">Other</option>
                </select>

                <select name="location" value={form.location} onChange={handleInputChange}>
                    <option value="">Select Location</option>
                    {/* Add locations options here */}
                    <option value="Station1">Place 1</option>
                    <option value="Station2">Place 2</option>
                </select>

                <button onClick={reportEmergency}>Report Emergency</button>
            </div>
            <div className="records-container">
                <table>
                    <thead>
                        <tr>
                            <th>Bus ID</th>
                            <th>Emergency Type</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, index) => (
                            <tr key={index}>
                                <td>{record.busNumber}</td>
                                <td>{record.emergencyType}</td>
                                <td>{record.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmergencyResponse;
