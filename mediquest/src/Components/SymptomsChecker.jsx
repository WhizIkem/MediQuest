import React from "react";
import { useNavigate } from "react-router-dom";
import { useSymptoms } from "./SymptomContext";
import "./SymptomsChecker.css";

/**
 * SymptomChecker component for selecting symptoms and checking for suggested diseases.
 * @param {Object} props - Component properties.
 * @param {string[]} props.selectedSymptoms - Array of selected symptoms.
 * @returns {JSX.Element} - Rendered component.
 */
const SymptomChecker = () => {
  const { selectedSymptoms } = useSymptoms();
  const navigate = useNavigate();

  /**
   * Handle the submission of selected symptoms and fetch suggested diseases.
   */
  const handleSubmit = async () => {
    try {
      // Fetch data from the backend
      const response = await fetch('http://localhost:5000/suggest_diseases', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ selected_symptoms: selectedSymptoms }),
      });

      console.log("Response status:", response.status);

      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse the JSON data
      const data = await response.json();
      console.log("Data received:", data);

      // Check if 'suggested_diseases' is available in the response
      if (data && data.suggested_diseases) {
        console.log("Suggested Diseases:", data.suggested_diseases);

        // Navigate to the DiseasesPage with the suggested diseases in the state
        navigate("/diseases", { state: { diseases: data.suggested_diseases } });
      } else {
        console.error('No suggested diseases found in the response');
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error.message);
    }
  };

  return (
    <div>
      {/* Button to check symptoms */}
      <button className="checksymptoms" onClick={handleSubmit}>Check Symptoms</button>
    </div>
  );
}
export default SymptomChecker;
