// SymptomContext.js
import React, { createContext, useContext, useState } from 'react';

const SymptomContext = createContext();

export function SymptomProvider({ children }) {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  return (
    <SymptomContext.Provider value={{ selectedSymptoms, setSelectedSymptoms }}>
      {children}
    </SymptomContext.Provider>
  );
}

export function useSymptoms() {
  return useContext(SymptomContext);
}
