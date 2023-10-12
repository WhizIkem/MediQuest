import React from "react";
import DeleteIcon from "../Assets/closeIcon.svg";

const SelectedSymptoms = ({ selectedSymptoms, setSelectedSymptoms }) => {

  const handleDelete = (symptomToDelete) => {
    setSelectedSymptoms(prevSymptoms => prevSymptoms.filter(symptom => symptom !== symptomToDelete));
  }

  return (
    <div className="selected-symptoms">
      {selectedSymptoms.map((symptom, index) => (
        <div key={index} className="selected-symptom">
          {symptom}
          <img src={DeleteIcon} alt="delete icon" onClick={() => handleDelete(symptom)} />
        </div>
      ))}
    </div>
  );
}

export default SelectedSymptoms;