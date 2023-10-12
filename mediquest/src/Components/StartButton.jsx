import React from "react";
import './StartButton.css';

export const StartButton = ({ onClick }) => {
  return (
    <button className="start-button" onClick={onClick}>
      Start Symptom Check
    </button>
  );
};