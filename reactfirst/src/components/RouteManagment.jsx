import React, { useState, useEffect } from "react";
import "../style/RouteManagment.css";
import "../RouteManagment.js"
// import { GoogleMap, LoadScript, Marker, Polyline } from "@react-google-maps/api";

const RouteManagment = () => {
  useEffect(() => {
    const loadGoogleMapsScript = () => {
      if (window.google) {
        return; // Google maps already initialized
      }
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA2ypSVfboxeKc54gCva66ZYqufA3s00I8&callback=initMap';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    window.initMap = () => {
      const location = { lat: 20.243760, lng: 85.717095 };
      const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: location,
      });
      const marker = new window.google.maps.Marker({
        position: location,
        map: map,
        title: "Hello, New York!",
      });
    };

    loadGoogleMapsScript();

    return () => {
      let script = document.querySelector('script[src*="googleapis"]');
      if (script) {
        script.remove();
      }
      window.initMap = null; // Clean up global function
    };
  }, []);

  // Placeholder function if needed
  window.initMap = () => {
     // The location to center the map on (example: New York City)
     const location = { lat: 20.243760, lng: 85.717095 };

     // The map, centered at the specified location
     const map = new google.maps.Map(document.getElementById("map"), {
         zoom: 12,            
         center: location,
     });
 
     // Adding a marker at the center location
     const marker = new google.maps.Marker({
         position: location,
         map: map,
         title: "Hello, New York!",
     });
  };
  return (
    <div className="route-management-container">
        <div className="route-form-container">
            <h1>Create Route</h1>
            <form>
                <label htmlFor="routeNumber">Route Number</label>
                <input type="number" id="routeNumber" name="routeNumber" />

                <label htmlFor="routeColor">Select Route Color</label>
                <input type="color" id="routeColor" name="routeColor" />

                <label htmlFor="searchAddress">Search Address</label>
                <input type="text" id="searchAddress" name="searchAddress" />

                <button type="button" onClick={() => {}}>Finish Route</button>
                <button type="button" onClick={() => {}}>Show Overlap</button>
            </form>
        </div>
        <div className="map-container" id="map">
            <p>Map will be integrated here.</p>
        </div>
    </div>
);
};

export default RouteManagment;
