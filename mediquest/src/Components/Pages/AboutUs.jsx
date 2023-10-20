import React from "react";
import AboutText from "../AboutText";
import DeveloperCard from "../DeveloperCard";
import Omaku from "../../Assets/omaku.jpg";
import Lhartey from "../../Assets/Lhartey.jpg";
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
            image={Lhartey}
            name="Augustine A Lartey"
            profession="Backend Developer & Database Architect"
            description="I possess six years of programming experience, with a specific focus on backend development, along with one year of dedicated work in this field. I am currently in the final year of my IT Management program at the University of Professional Studies in Accra. My primary area of expertise lies in Python."
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