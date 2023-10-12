import React from "react";
import './Footer.css';
import Logo from './Logo';
import DesktopNav from "./DesktopNav";
import {MediaLinks} from "./SocialMedia";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-a">
        <div className="footer-logo">
          <Logo />
        </div>
        <nav className="desktop-nav">
          <DesktopNav />
        </nav>
      </div>
      <div className="footer-b">
        <div className="footer-social">
          <MediaLinks />
        </div>
        <div className="footer-legal">
          <p>&copy; 2023 MediQuest</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;