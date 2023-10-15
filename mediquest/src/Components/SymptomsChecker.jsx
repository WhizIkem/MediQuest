import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SymptomChecker = ({ selectedSymptoms = [] }) => {
  const navigate = useNavigate();
  const [urgencyLevel, setUrgencyLevel] = useState(""); // State to store urgency level

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/suggest_diseases', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ selected_symptoms: selectedSymptoms }),
      });

      console.log("Response status:", response.status);

      const data = await response.json();
      console.log("Data received:", data);

      // Update state with urgency level
      setUrgencyLevel(data.urgency_level);

      navigate("/diseases", { state: { diseases: data.suggested_diseases } });
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error.message);
    }
  }

  return (
    <div>
      <div>
        {selectedSymptoms && selectedSymptoms.map((symptom, index) => (
          <span key={index}>{symptom}</span>
        ))}
      </div>
      <div>
        <strong>Urgency Level:</strong> {urgencyLevel}
      </div>
      <button onClick={handleSubmit}>Check Symptoms</button>
    </div>
  );
}

export default SymptomChecker;

