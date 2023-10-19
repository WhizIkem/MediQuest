// LocationPage.jsx

import React, { useState, useEffect } from "react";

const LocationPage = () => {
  const [locations, setLocations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch locations when the component mounts
    fetchLocations();
  }, []);

  const fetchLocations = () => {
    fetch("http://localhost:5000/get_locations") // Adjust the API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setLocations(data.locations);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div>
      <h1>Locations</h1>

      {error && <p>Error fetching locations: {error.message}</p>}

      <ul>
        {locations.map((location, index) => (
          <li key={index}>
            {location.name}: {location.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationPage;
