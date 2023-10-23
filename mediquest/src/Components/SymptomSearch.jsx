// SymptomSearch.jsx

import React, { useState, useEffect } from "react";
import PlusIcon from "../Assets/plusIcon.svg";

const SymptomSearch = ({ setSelectedSymptoms }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [allSymptoms, setAllSymptoms] = useState([]);

  useEffect(() => {
    const fetchSymptoms = async () => {
      try {
        const response = await fetch('http://localhost:5000/all_symptoms');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setAllSymptoms(data.all_symptoms);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error.message);
      }
    };

    fetchSymptoms();
  }, []);

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
