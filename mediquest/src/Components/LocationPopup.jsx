import React, { useState, useEffect } from 'react';

const LocationPopup = ({ userLocation, error }) => {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    if (userLocation) {
      // Fetch nearby facilities when userLocation is available
      fetchNearbyFacilities();
    }
  }, [userLocation]);

  const fetchNearbyFacilities = async () => {
    const { latitude, longitude } = userLocation;

    try {
      const response = await fetch(`http://localhost:5000/find_nearby_facilities?latitude=${latitude}&longitude=${longitude}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Facilities data:', data);
      setFacilities(data);
    } catch (error) {
      console.error('Error fetching nearby facilities:', error.message);
    }
  };

  return (
    <div>
      <h2>Nearby Facilities</h2>
      {error && <p>Error fetching location: {error}</p>}
      {facilities && facilities.length > 0 ? (
        <ul>
          {facilities.map((facility, index) => (
            <li key={index}>
              {facility.name}, Distance: {facility.distance} meters
            </li>
          ))}
        </ul>
      ) : (
        <p>No nearby facilities found.</p>
      )}
    </div>
  );
};

export default LocationPopup;

