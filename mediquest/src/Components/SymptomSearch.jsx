import React, { useState } from "react";
import PlusIcon from "../Assets/plusIcon.svg";

const SymptomSearch = ({ setSelectedSymptoms }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const allSymptoms = ["Fever", "Cough", "Headache", "Sore throat", "Runny nose", "Fatigue", "Muscle pain", "Diarrhea", "Loss of taste or smell"]; //fetch from API

  const suggestions = allSymptoms.filter(symptom => symptom.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSelectedSymptoms = (symptom) => {
    setSelectedSymptoms(prevSymptoms => [...prevSymptoms, symptom]);
    setSearchTerm(""); // clear search term
  }

  return (
    <div className="symptom-search">
      <input
        type="text"
        placeholder="Search for symptoms..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm &&
      <div className="suggestions">
        {suggestions.map((symptom, index) => (
          <div key={index} onClick={() => handleSelectedSymptoms(symptom)}>
            {symptom} <img src={PlusIcon} alt="plus icon" />
          </div>
        ))}
      </div>
      }
    </div>
  );
}

export default SymptomSearch;