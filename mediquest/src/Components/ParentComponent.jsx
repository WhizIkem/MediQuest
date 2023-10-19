import React, { useState } from "react";
import SymptomChecker from "./SymptomChecker";

const ParentComponent = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  return (
    <div>
      {/* Other components */}
      <SymptomChecker selectedSymptoms={selectedSymptoms} setSelectedSymptoms={setSelectedSymptoms} />
    </div>
  );
}

export default ParentComponent;
