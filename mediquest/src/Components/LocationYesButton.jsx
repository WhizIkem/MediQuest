import React from 'react';
import { useNavigate } from 'react-router-dom';

const LocationYesButton = () => {
  const navigate = useNavigate();

  const handleLocationYesClick = () => {
    // Navigate to the "LocationPage" when the button is clicked
    navigate('/location-page');
  };

  return (
    <button className="location-yes-button" onClick={handleLocationYesClick}>Yes</button>
  );
};

export default LocationYesButton;
