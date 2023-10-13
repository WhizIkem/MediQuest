// DiseasesPage.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const DiseasesPage = () => {
  const [diseases, setDiseases] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchedDiseases = location.state?.diseases;
    if (fetchedDiseases) {
      setDiseases(fetchedDiseases);
    }}, [location.state]);

  return (
    <div>
      <h1>Diseases</h1>
      {diseases.map(disease => (
        <div key={disease.id}>{disease.name}</div>
      ))}
    </div>
  );
}

export default DiseasesPage;
