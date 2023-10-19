import React, { useState, useEffect } from "react";
import SymptomSearch from "./SymptomSearch"; // Import your SymptomSearch component
import DiseasesPage from "./Pages/DiseasesPage";

const SymptomSelector = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  useEffect(() => {
    // Whenever selectedSymptoms change, you can send an API request to fetch related diseases
    if (selectedSymptoms.length > 0) {
      // Send an API request to fetch diseases
      fetchDiseases();
    }
  }, [selectedSymptoms]);

  const fetchDiseases = async () => {
    try {
      console.log("Selected Symptoms (from Frontend):", selectedSymptoms); // Log selected symptoms
      const response = await fetch("http://localhost:5000/suggest_diseases", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selected_symptoms: selectedSymptoms }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Data from backend:", data); // Log data from the backend

      // Handle the diseases data, you can set it in state or pass it to the DiseasesPage component
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error.message);
    }
  };

  return (
    <div>
      <SymptomSearch setSelectedSymptoms={setSelectedSymptoms} />
      <DiseasesPage selectedSymptoms={selectedSymptoms} /> {/* Pass selectedSymptoms as a prop */}
    </div>
  );
};

export default SymptomSelector;
