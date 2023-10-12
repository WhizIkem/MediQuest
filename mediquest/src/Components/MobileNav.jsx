import React from 'react';
import closeIcon from '../Assets/closeIcon.svg';
import mobileNav from '../Assets/mobileNav.svg';
import { Link } from 'react-router-dom';

const MobileNav = ({ showMobileNav, toggleMobileNav }) => {
  return (
    <>
      <img 
        className="mobile-nav-icon" 
        alt="Mobile Icon Menu" 
        src={showMobileNav ? closeIcon : mobileNav} 
        onClick={toggleMobileNav}
        style={{ alignSelf: showMobileNav ? 'flex-end' : 'center' }} 
      />
      {showMobileNav && (
        <div className="mobile-nav">
          <ul>
            <li>
              <Link to="/" onClick={toggleMobileNav}>Home</Link>
            </li>
            <li>
              <Link to="/symptom-checker" onClick={toggleMobileNav}>Symptom Checker</Link>
            </li>
            <li>
              <Link to="/about-us" onClick={toggleMobileNav}>About Us</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileNav;
