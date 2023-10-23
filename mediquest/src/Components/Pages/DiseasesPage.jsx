import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
	console.log('Data from backend:', data); //trying to see whats wrong with the backend
        setDiseases(data.suggested_diseases);
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiseasesPage;
