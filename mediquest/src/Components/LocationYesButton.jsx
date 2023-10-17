import React from "react";
import "./Location.css";

const LocationYesButton = () => {

  const handleYesClick = () => {
    fetch("http://localhost:5000/get_location")
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error.message);
    });
  };
  
  return (
    <button className="location-yes-button" onClick={handleYesClick}>
      Yes
    </button>
  );
}

export default LocationYesButton;
