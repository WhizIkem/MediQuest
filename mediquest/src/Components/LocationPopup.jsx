import React, { useState, useEffect } from "react";
import "./Location.css";

const LocationPopup = () => {
  const [loading, setLoading] = useState(true);
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    // Fetch facilities when the component mounts
    fetch("http://localhost:5000/find_nearby_facilities")
      .then(response => response.json())
      .then(data => {
        console.log(data);  // Log the data
        setFacilities(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching facilities:", error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="location-popup">
      <h2>Nearby Facilities</h2>
      {loading ? (
        <p>Loading nearby facilities...</p>
      ) : (
        <ul>
          {facilities && facilities.map((facility) => (
            <li key={facility.name}>
              <p>Name: {facility.name}</p>
              <p>Distance: {facility.distance} meters</p>
             </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationPopup;
