import React, { useState } from 'react';
import '../style/PassengerAlert.css';

const Passenger = () => {
    const [newUpdate, setNewUpdate] = useState({
        busNumber: '',
        status: '',
        estimatedArrival: ''
    });
    const [announcement, setAnnouncement] = useState('');

    // Static data for demonstration purposes
    const busUpdates = [
        { busNumber: "DL1234", status: "On Time", estimatedArrival: "10 min" },
        { busNumber: "DL5678", status: "Delayed", estimatedArrival: "25 min" }
    ];

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewUpdate({ ...newUpdate, [name]: value });
    };

    const handleAnnouncementChange = (event) => {
        setAnnouncement(event.target.value);
    };

    const makeAnnouncement = () => {
        alert(`Announcement: ${announcement}`);
        setAnnouncement('');
    };

    return (
        <div className="passenger-container">
            <div className="add-bus-update">
                <h2>Add Bus Update</h2>
                <select name="busNumber" value={newUpdate.busNumber} onChange={handleInputChange}>
                    <option value="">Select Bus Number</option>
                    <option value="DL1234">DL1234</option>
                    <option value="DL5678">DL5678</option>
                </select>
                <select name="status" value={newUpdate.status} onChange={handleInputChange}>
                    <option value="">Select Status</option>
                    <option value="On Time">On Time</option>
                    <option value="Delayed">Delayed</option>
                </select>
                <input
                    type="text"
                    name="estimatedArrival"
                    value={newUpdate.estimatedArrival}
                    onChange={handleInputChange}
                    placeholder="Estimated Arrival (e.g., 10 min)"
                />
                <button onClick={() => alert('Update Submitted!')}>Add Update</button>
            </div>
            <div className="bus-updates">
                <h2>Bus Updates</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Bus ID</th>
                            <th>Status</th>
                            <th>Estimated Arrival</th>
                        </tr>
                    </thead>
                    <tbody>
                        {busUpdates.map((update, index) => (
                            <tr key={index}>
                                <td>{update.busNumber}</td>
                                <td>{update.status}</td>
                                <td>{update.estimatedArrival}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="make-announcement">
                <h2>Make Announcement</h2>
                <input
                    type="text"
                    value={announcement}
                    onChange={handleAnnouncementChange}
                    placeholder="Type your announcement here"
                />
                <button onClick={makeAnnouncement}>Announce</button>
            </div>
        </div>
    );
};

export default Passenger;
