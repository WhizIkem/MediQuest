import React, { useState, useEffect } from "react";
import PlusIcon from "../Assets/plusIcon.svg";
import './SymptomSearch.css';
import { useSymptoms } from "./SymptomContext";
import CloseIcon from "../Assets/closeIcon.svg";

const SymptomSearch = () => {
  const { selectedSymptoms, setSelectedSymptoms } = useSymptoms();
  const [searchTerm, setSearchTerm] = useState("");
  const [allSymptoms, setAllSymptoms] = useState([]);
  const [selectedSuggestions, setSelectedSuggestions] = useState([]);

  const handleSelectedSymptoms = (symptom) => {
    setSelectedSymptoms((prevSymptoms) => [...prevSymptoms, symptom]);
    setSearchTerm("");
    setSelectedSuggestions((prevSelectedSuggestions) => [...prevSelectedSuggestions, symptom]);
  }

  const removeSelectedSymptom = (symptomToRemove) => {
    const updatedSymptoms = selectedSymptoms.filter((symptom) => symptom !== symptomToRemove);
    setSelectedSymptoms(updatedSymptoms);
  }

  useEffect(() => {
    const fetchSymptoms = async () => {
      try {
        const response = await fetch('http://localhost:5000/all_symptoms');
        if (!response.ok) {
          throw Error('Network response was not ok');
        }
        const data = await response.json();
        setAllSymptoms(data.all_symptoms);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error.message);
      }
    };

    fetchSymptoms();
  }, []);

  const suggestions = allSymptoms
    .filter((symptom) => symptom.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((symptom) => !selectedSuggestions.includes(symptom));

  return (
    <div className="symptom-search">
      {selectedSymptoms.length > 0 && (
        <div className="selected-symptoms">
          {selectedSymptoms.map((symptom, index) => (
            <div key={index} className="selected-symptom">
              {symptom}
              <span
                className="close-icon"
                onClick={() => removeSelectedSymptom(symptom)}
              >
                <img src={CloseIcon} alt="close icon" />
              </span>
            </div>
          ))}
        </div>
      )}
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search for symptoms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      {searchTerm && (
        <div className="suggestions">
          {suggestions.map((symptom, index) => (
            <div key={index} onClick={() => handleSelectedSymptoms(symptom)}>
              {symptom}
              <img className="plusicon" src={PlusIcon} alt="plus icon" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SymptomSearch;
