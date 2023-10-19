// LocationYesButton.jsx

import React from "react";
import { Link } from "react-router-dom";

const LocationYesButton = () => {
  return (
    <div>
      <Link to="/locations" className="location-yes-button">
        Yes
      </Link>
    </div>
  );
};

export default LocationYesButton;
