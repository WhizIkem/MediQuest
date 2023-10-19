import React, { useState, useEffect } from "react";
import "./Location.css";
import LocationPopup from "./LocationPopup";

const LocationYesButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [errorFetchingLocation, setErrorFetchingLocation] = useState(null);

  useEffect(() => {
    if (showPopup && !userLocation) {
      // Fetch user location when the popup is shown
      fetchUserLocation();
    }
  }, [showPopup, userLocation]);

  const fetchUserLocation = () => {
    fetch("http://localhost:5000/get_user_location")
      .then((response) => {
        console.log('Response status:', response.status);
        return response.json();
      })
      .then((data) => {
        console.log('User location data:', data);
        setUserLocation(data);
      })
      .catch((error) => {
        console.error("Error fetching user location:", error.message);
        setErrorFetchingLocation(error.message);
      });
  };

  const handleYesClick = () => {
    setShowPopup(true);
  };

  return (
    <div>
      <button className="location-yes-button" onClick={handleYesClick}>
        Yes
      </button>

      {showPopup && <LocationPopup userLocation={userLocation} error={errorFetchingLocation} />}
    </div>
  );
};

export default LocationYesButton;

