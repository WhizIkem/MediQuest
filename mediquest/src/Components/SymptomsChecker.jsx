import React from "react";
import { useNavigate } from "react-router-dom";

// ... (other imports)

const SymptomChecker = ({ selectedSymptoms = [] }) => {
  const navigate = useNavigate();

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

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log("Data received:", data);

      // Check if 'suggested_diseases' is available in the response
      if (data && data.suggested_diseases) {
        navigate("/diseases", { state: { diseases: data.suggested_diseases } });
      } else {
        console.error('No suggested diseases found in the response');
      }
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
      <button onClick={handleSubmit}>Check Symptoms</button>
    </div>
  );
}

export default SymptomChecker;

