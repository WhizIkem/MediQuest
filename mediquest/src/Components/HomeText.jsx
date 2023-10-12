import React from "react";
import "./Texts.css";

export const HomeText = () => {
  return (
    <div className="home-text">
      <div className="why-use-medi-quest">
        <h2 className="homepage-text-wrapper">Why use MediQuest?</h2>
        <ul className="mediquest-benefits">
          <li>
            <span className="span">Quick Insight into Health:</span>
            <p className="text-wrapper-2">
              Users gain insights into potential health issues based on their symptoms.
            </p>
          </li>
          <li>
            <span className="span">Personalized Recommendation:</span>
            <p className="text-wrapper-2">
              Based on the symptoms entered, MediQuest offers personalized advice on the need to seek medical attention.
            </p>
          </li>
          <li>
            <span className="span">Locate Nearby Medical Facilities:</span>
            <p className="text-wrapper-2">
              MediaQuest guides users to the nearest clinics or hospitals.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
