import React, { useState, useEffect } from "react";
import PlusIcon from "../Assets/plusIcon.svg";
//import SearchIcon from "../Assets/search.svg"; // Import your search icon image
import './SymptomSearch.css'; // Import your CSS file

const SymptomSearch = ({ setSelectedSymptoms }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [allSymptoms, setAllSymptoms] = useState([]);
  const [selectedSuggestions, setSelectedSuggestions] = useState([]); // [symptom1, symptom2, ...

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
    .filter(symptom => symptom.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(symptom => !selectedSuggestions.includes(symptom));

  const handleSelectedSymptoms = (symptom) => {
    setSelectedSymptoms(prevSymptoms => [...prevSymptoms, symptom]);
    setSearchTerm(""); // clear search term
    setSelectedSuggestions(prevSelectedSuggestions => [...prevSelectedSuggestions, symptom]);
  }

  return (
    <div className="symptom-search">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search for symptoms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
          style={{ backgroundRepeat: "no-repeat", backgroundPosition: "8px", backgroundSize: "20px" }}
        />
      </div>
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

