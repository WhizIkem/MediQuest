import React from "react";
import SymptomCheckText from "../SymptomCheckText";
import SymptomsContainer from "../SymptomsContainer";
import SymptomsChecker from "../SymptomsChecker";
import Disclaimer from "../Disclaimer";

const SymptomCheckerPage = () => {
  return (
    <>
      <SymptomCheckText />
      <SymptomsContainer />
      <SymptomsChecker />
      <Disclaimer />
    </>
  );
}

export default SymptomCheckerPage;