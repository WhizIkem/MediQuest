import React, { useState, useEffect } from "react";
import "./Location.css";
import LocationPopup from "./LocationPopup";

const LocationYesButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (showPopup) {
      // Fetch user location when the popup is shown
      fetchUserLocation();
    }
  }, [showPopup]);

  const fetchUserLocation = () => {
    fetch("http://localhost:5000/get_user_location")
      .then((response) => response.json())
      .then((data) => {
        setUserLocation(data);
      })
      .catch((error) => {
        console.error("Error fetching user location:", error.message);
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

      {showPopup && <LocationPopup userLocation={userLocation} />}
    </div>
  );
};

export default LocationYesButton;
