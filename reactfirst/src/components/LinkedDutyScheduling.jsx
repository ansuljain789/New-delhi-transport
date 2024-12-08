import React, { useState, useEffect } from "react";
const BusScheduling = () => {
  useEffect(() => {
    // Apply the style on mount
    const previousMarginLeft = document.body.style.marginLeft;
    document.body.style.marginLeft = "120px";

    // Cleanup to revert the style on unmount
    return () => {
      document.body.style.marginLeft = previousMarginLeft;
    };
  }, []);
  const initialBusData = [
    { crewId: "123", busId: "A1", route: "Route A", startTime: "08:00 AM", endTime: "10:00 AM", status: "Available" },
    { crewId: "124", busId: "B1", route: "Route B", startTime: "09:00 AM", endTime: "11:00 AM", status: "Available" },
    { crewId: "125", busId: "C1", route: "Route C", startTime: "10:00 AM", endTime: "12:00 PM", status: "Available" },
    { crewId: "126", busId: "D1", route: "Route A", startTime: "11:00 AM", endTime: "01:00 PM", status: "Unavailable" },
  ];

  const [busData, setBusData] = useState(initialBusData);
  const [filteredData, setFilteredData] = useState(initialBusData);
  const [crewId, setCrewId] = useState("");
  const [busNo, setBusNo] = useState("");
  const [route, setRoute] = useState("");

  useEffect(() => {
    // Populate table initially
    setFilteredData(initialBusData);
  }, []);

  const scheduleBus = () => {
    if (!crewId || !busNo || !route) {
      alert("Please fill in all fields.");
      return;
    }

    const filteredBuses = busData.filter((bus) => bus.route === route && bus.status === "Available");

    if (filteredBuses.length === 0) {
      alert("No buses available for the selected route.");
    }

    setFilteredData(filteredBuses);
  };

  const clearFilters = () => {
    setCrewId("");
    setBusNo("");
    setRoute("");
    setFilteredData(busData); // Show all buses again
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>Bus Scheduling System</h1>
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter Crew ID"
          value={crewId}
          onChange={(e) => setCrewId(e.target.value)}
          style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }}
        />
        <input
          type="text"
          placeholder="Enter Bus Number"
          value={busNo}
          onChange={(e) => setBusNo(e.target.value)}
          style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }}
        />
        <select
          value={route}
          onChange={(e) => setRoute(e.target.value)}
          style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }}
        >
          <option value="">Select Route</option>
          <option value="Route A">Route A</option>
          <option value="Route B">Route B</option>
          <option value="Route C">Route C</option>
        </select>
        <button
          onClick={scheduleBus}
          style={{ padding: "10px", backgroundColor: "#007bff", color: "white", borderRadius: "5px", cursor: "pointer" }}
        >
          Schedule
        </button>
        <button
          onClick={clearFilters}
          style={{ padding: "10px", backgroundColor: "#007bff", color: "white", borderRadius: "5px", cursor: "pointer" }}
        >
          Clear
        </button>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr>
            <th style={{ padding: "10px", backgroundColor: "#007bff", color: "white", border: "1px solid #ddd" }}>Crew ID</th>
            <th style={{ padding: "10px", backgroundColor: "#007bff", color: "white", border: "1px solid #ddd" }}>Bus ID</th>
            <th style={{ padding: "10px", backgroundColor: "#007bff", color: "white", border: "1px solid #ddd" }}>Route</th>
            <th style={{ padding: "10px", backgroundColor: "#007bff", color: "white", border: "1px solid #ddd" }}>Start Time</th>
            <th style={{ padding: "10px", backgroundColor: "#007bff", color: "white", border: "1px solid #ddd" }}>End Time</th>
            <th style={{ padding: "10px", backgroundColor: "#007bff", color: "white", border: "1px solid #ddd" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((bus, index) => (
            <tr key={index}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{bus.crewId}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{bus.busId}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{bus.route}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{bus.startTime}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{bus.endTime}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{bus.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BusScheduling;


