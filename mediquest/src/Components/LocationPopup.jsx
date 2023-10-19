import React, { useState, useEffect } from 'react';

const LocationPopup = () => {
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNearbyFacilities = async () => {
      try {
        const response = await fetch('http://localhost:5000/find_nearby_facilities');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Facilities data:', data);
        setFacilities(data);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching nearby facilities:', error.message);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchNearbyFacilities();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <h2>Nearby Facilities</h2>
      {loading ? (
        <p>Loading...</p>
      ) : facilities !== null && facilities.length ? (
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

