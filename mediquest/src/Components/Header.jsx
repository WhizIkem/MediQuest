import React, { useState } from 'react';
import './Header.css';
import Logo from './Logo';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import MobileNavBackground from './MobileNavBackground';

export const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav(prevState => !prevState);
  };

  return (
    <div className={`header ${showMobileNav ? 'showMobileNav' : ''}`}>
      <Logo />
      <div className="text-wrapper">MediQuest</div>
      <DesktopNav />
      {showMobileNav && <MobileNavBackground closeMobileNav={toggleMobileNav} />}
      <MobileNav showMobileNav={showMobileNav} toggleMobileNav={toggleMobileNav} />
    </div>
  );
};
