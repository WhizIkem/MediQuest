import React from "react";
import './ImageModule.css';

const ImageModule = ({ src, alt, className }) => {
  return (
    <img src={src} alt={alt} className={`image-module ${className}`} />
  );
};

export default ImageModule;