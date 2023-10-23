import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "../Assets/Back.svg";

const BackArrow = ({ to }) => {
  const navigate = useNavigate();

  const goBack = () => {
    if (to) {
      navigate(to);
    } else {
      window.history.back();
    }
  };

  const backArrowStyle = {
    display: "flex",
    alignItems: "center",
    marginTop: "30px",
  };

  return (
    <button className="back-arrow" style={backArrowStyle} onClick={goBack}>
      <Back style={{ width: '24px', height: '24px', fill: 'blue' }}/>
    </button>
  );
};

export default BackArrow;