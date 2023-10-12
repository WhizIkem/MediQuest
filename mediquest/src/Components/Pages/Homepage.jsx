import React from "react";
import { useNavigate } from "react-router-dom";
import { HeroText } from "../../Components/HeroText";
import { DescriptiveText } from "../../Components/DescriptiveText";
import { StartButton } from "../../Components/StartButton";
import ImageModule from "../../Components/ImageModule";
import image1 from "../../Assets/Image1.jpg";
import image2 from "../../Assets/Image2.jpg";
import { HomeText } from "../../Components/HomeText";

const HomePage = () => {
  const navigate = useNavigate();
  
  const handleStartButtonClick = () => {
    navigate('/symptom-checker'); // Routing to the symptom input page on button click
  }

  return (
    <>
      <HeroText />
      <DescriptiveText />
      <StartButton onClick={handleStartButtonClick} />
      <ImageModule src={image1} alt="image1" className="image1" />
      <HomeText /> 
      <ImageModule src={image2} alt="image2" className="image2" />
    </>
  );
}

export default HomePage;
