import React from "react";
import SymptomSearch from './SymptomSearch';
import './SymptomsContainer.css';

const SymptomsContainer = () => {
  return (
    <div className="symptoms-container">
      <div className="search">
        <SymptomSearch />
      </div>
    </div>
  );
}

export default SymptomsContainer;
