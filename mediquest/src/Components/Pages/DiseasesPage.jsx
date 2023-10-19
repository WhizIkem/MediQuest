import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./DiseasesPage.css";
import BackArrow from "../BackArrow";
import LocationText from "../LocationText";
import LocationYesButton from "../LocationYesButton";
import LocationNoButton from "../LocationNoButton";
import { useSymptoms } from "../SymptomContext";

const DiseasesPage = () => {
  const { selectedSymptoms } = useSymptoms();
  const [diseases, setDiseases] = useState([]);
  const location = useLocation();

  const fetchDiseases = async (symptoms) => {
    if (!Array.isArray(symptoms) || symptoms.length === 0) {
      // No selected symptoms, no need to make an API call
      setDiseases([]);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/suggest_diseases", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selected_symptoms: symptoms }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log('Data from backend:', data);

      setDiseases(data.suggested_diseases);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error.message);
    }
  };

  useEffect(() => {
    fetchDiseases(selectedSymptoms);
  }, [selectedSymptoms]);

  return (
    <>
      <BackArrow />
      <div className="diseases-page">
        <h1>Possible Diseases</h1>
        <div className="diseases-list">
          {diseases.map((disease, index) => (
            <div key={index} className="disease-item">
              <h2>{disease.disease}</h2>
              <p>Common Symptoms: {disease.common_symptoms ? disease.common_symptoms.join(', ') : 'Not available'}</p>
              <p>Urgency Level: {disease.urgency_level}</p>
              <p>Other Symptoms: {disease.other_symptoms ? disease.other_symptoms.join(', ') : 'Not available'}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="location-access">
        <LocationText />
        <div className="location-button">
          <LocationYesButton />
          <LocationNoButton />
        </div>
      </div>
    </>
  );
};

export default DiseasesPage;
