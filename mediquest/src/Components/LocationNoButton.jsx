import React from "react";

const LocationNoButton = () => {

  const handleNoClick = () => {
    console.log("No button clicked");
  };

  return (
    <button className="location-no-button" onClick={handleNoClick}>
      No
    </button>
  );
}

export default LocationNoButton;