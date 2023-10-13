import React from "react";
import AboutText from "../AboutText";
import DeveloperCard from "../DeveloperCard";
import Rectangle29 from "../../Assets/Rectangle29.png";
import Rectangle30 from "../../Assets/Rectangle30.png";
import Rectangle31 from "../../Assets/Rectangle31.png";

const AboutUs = () => {
  return (
    <div className="about-wrapper">
      <div className="about-page-container">
        <AboutText />
      </div>
      <div className="developer-page-container">
        <DeveloperCard 
          image={Rectangle29}
          name="Umaku Festus Friday"
          profession="Senior Backend Developer"
          description="With over 7 years in backend development, Umaku brings a wealth of experience in creating robust and efficient systems. His expertise in Python and Node.js has played a pivotal role in developing MediQuest's intelligent symptom analysis engine. A graduate of the University of Lagos, Umaku is a fervent believer in using tech to solve real-world challenges."
          />
        <DeveloperCard
          image={Rectangle30}
          name="Augustine A Lartey"
          profession="Backend Developer & Database Architect"
          description="Lartey passion lies in the seamless organization and management of data. Specializing in SQL and NoSQL databases, he ensures that MediQuest's user data is stored securely and can be accessed rapidly. A tech enthusiast, Lartey frequently participates in hackathons and tech meetups around Abuja."
          />
        <DeveloperCard
          image={Rectangle31}
          name="Ikem Chinedu Wisdom"
          profession="Frontend Developer & UI/UX Designer"
          description="The visual genius behind MediQuest's intuitive interface, Ikem excels in making complex processes look simple. With a keen eye for design and a knack for user-centric interfaces, he ensures that users enjoy a seamless experience on MediQuest. Ikem, a Yaba Tech alumnus, is also an advocate for inclusive and accessible design."
          />
      </div>
      <div className="about-closing-text">
        Together, we are committed to delivering a platform that empowers users to take charge of their health with confidence.
      </div>
    </div>
  );
};

export default AboutUs;