import React from "react";
import "./SocialMedia.css";
import Facebook from "../Assets/Facebook.jpg";
import Instagram from "../Assets/Instagram.jpg";
import LinkedIn from "../Assets/LinkedIn.jpg";
import Twitter from "../Assets/TwitterX.jpg";

export const MediaLinks = () => {
  return (
    <div className="media-links">
      <a href="https://www.linkedin.com/company/your-company-name" target="_blank" rel="noopener noreferrer">
        <img className="img" alt="LinkedIn" src={LinkedIn} />
      </a>
      <a href="https://www.instagram.com/yourusername/" target="_blank" rel="noopener noreferrer">
        <img className="img" alt="Instagram" src={Instagram} />
      </a>
      <a href="https://www.facebook.com/yourusername/" target="_blank" rel="noopener noreferrer">
        <img className="img" alt="Facebook" src={Facebook} />
      </a>
      <a href="https://twitter.com/yourusername/" target="_blank" rel="noopener noreferrer">
        <img className="img" alt="Twitter" src={Twitter} />
      </a>
    </div>
  );
};
