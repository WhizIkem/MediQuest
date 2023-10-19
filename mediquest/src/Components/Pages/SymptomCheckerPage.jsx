import React from "react";
import SymptomCheckText from "../SymptomCheckText";
import SymptomsContainer from "../SymptomsContainer";
import SymptomsChecker from "../SymptomsChecker";
import Disclaimer from "../Disclaimer";
import BackArrow from "../BackArrow";
import "./SymptomCheckerPage.css";

const SymptomCheckerPage = () => {
  return (
    <>
      <BackArrow />
      <div className="symptom-checker-page">
        <div className="symptom-checker-page-title">
          <SymptomCheckText />
        </div>
        <div className="symptom-checker-page-container">
          <SymptomsContainer />
        </div>
        <div className="symptom-checker-page-button">
          <SymptomsChecker />
        </div>
        <div className="symptom-checker-page-disclaimer">
          <Disclaimer />
        </div>
      </div>
    </>
  );
}

export default SymptomCheckerPage;
