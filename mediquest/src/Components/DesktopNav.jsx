import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const DesktopNav = () => {
  return (
    <nav className="desktop-nav">
      <ul>
        <li>
          <NavLink to="/" className='nav-link'>Home</NavLink>
        </li>
        <li>
          <NavLink to="/symptom-checker" className='nav-link'>Symptom Checker</NavLink>
        </li>
        <li>
          <NavLink to="/about-us" className='nav-link'>About Us</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
