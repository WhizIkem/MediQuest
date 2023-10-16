import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './DiseasesPage.css';

const DiseasesPage = () => {
  const [diseases, setDiseases] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchDiseases = async () => {
      try {
        const response = await fetch('http://localhost:5000/suggest_diseases', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ selected_symptoms: location.state?.selectedSymptoms }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Data from backend:', data); // Ensure that the data structure is as expected

        // Filter diseases based on selected symptoms
        const filteredDiseases = data.suggested_diseases.filter(disease => {
          // Assuming selectedSymptoms is an array of symptoms
          return disease.common_symptoms.every(symptom => location.state?.selectedSymptoms.includes(symptom));
        });

        setDiseases(filteredDiseases);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error.message);
      }
    };

    fetchDiseases();
  }, [location.state?.selectedSymptoms]);

  return (
    <div className="diseases-page">
      <h1>Possible Diseases</h1>
      <div className="diseases-list">
        {diseases.map((disease, index) => (
          <div key={index} className="disease-item">
            <h2>{disease.disease}</h2>
            <p>Common Symptoms: {disease.common_symptoms ? disease.common_symptoms.join(', ') : 'Not available'}</p>
            <p>Urgency Level: {disease.urgency_level}</p>
            {/* Display other symptoms */}
            <p>Other Symptoms: {disease.other_symptoms ? disease.other_symptoms.join(', ') : 'Not available'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiseasesPage;

