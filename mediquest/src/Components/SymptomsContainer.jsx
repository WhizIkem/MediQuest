import React from "react";
import SymptomSearch from './SymptomSearch';
import SelectedSymptoms from './SelectedSymptoms';
import './SymptomsContainer.css';

const SymptomsContainer = () => {
  const [selectedSymptoms, setSelectedSymptoms] = React.useState([]);

  return (
    <div className="symptoms-container">
      <SelectedSymptoms selectedSymptoms={selectedSymptoms} setSelectedSymptoms={setSelectedSymptoms} />
      <SymptomSearch setSelectedSymptoms={setSelectedSymptoms} />
    </div>
  );
}

export default SymptomsContainer;