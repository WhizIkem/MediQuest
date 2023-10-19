import React from "react";
import AboutText from "../AboutText";
import DeveloperCard from "../DeveloperCard";
import Omaku from "../../Assets/omaku.jpg";
import Rectangle30 from "../../Assets/Rectangle30.png";
import Ikem from "../../Assets/ikem.jpg";
import BackArrow from "../BackArrow";

const AboutUs = () => {
  return (
    <div>
      <BackArrow />
      <div className="about-wrapper">
        <div className="about-page-container">
          <AboutText />
        </div>
        <div className="developer-page-container">
          <DeveloperCard 
            image={Omaku}
            name="Omaku Festus Friday"
            profession="Full-stack Engineer"
            description="A dedicated full-stack software engineer with a strong commitment to developing solutions that enhance user experiences and streamline everyday processes."
            />
          <DeveloperCard
            image={Rectangle30}
            name="Augustine A Lartey"
            profession="Backend Developer & Database Architect"
            description="Lartey passion lies in the seamless organization and management of data. Specializing in SQL and NoSQL databases, he ensures that MediQuest's user data is stored securely and can be accessed rapidly. A tech enthusiast, Lartey frequently participates in hackathons and tech meetups around Abuja."
            />
          <DeveloperCard
            image={Ikem}
            name="Ikem Chinedu Wisdom"
            profession="Frontend Developer & UI/UX Designer"
            description="The visual genius behind MediQuest's intuitive interface, Ikem excels in making complex processes look simple. With a keen eye for design and a knack for user-centric interfaces, he ensures that users enjoy a seamless experience on MediQuest."
            />
        </div>
        <div className="about-closing-text">
          Together, we are committed to delivering a platform that empowers users to take charge of their health with confidence.
        </div>
      </div>
    </div>
  );
};

export default AboutUs;