import React from 'react';
import closeIcon from '../Assets/closeIcon.svg';
import mobileNav from '../Assets/mobileNav.svg';

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
            <li onClick={toggleMobileNav}>Home</li>
            <li onClick={toggleMobileNav}>Symptom Checker</li>
            <li onClick={toggleMobileNav}>About Us</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileNav;
