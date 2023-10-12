import React from 'react';
import { Link } from 'react-router-dom';

const DesktopNav = () => {
  return (
    <nav className="desktop-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/symptom-checker">Symptom Checker</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
