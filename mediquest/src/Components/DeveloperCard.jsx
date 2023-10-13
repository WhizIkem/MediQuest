import React from "react";
import "./DeveloperCard.css";

const DeveloperCard = ({ image, name, profession, description }) => {
  return (
    <div className="developer-card-container">
      <img src={image} alt={name} className="developer-image"/>
      <h3>{name}</h3>
      <h4>{profession}</h4>
      <p>{description}</p>
    </div>
  );
}

export default DeveloperCard;