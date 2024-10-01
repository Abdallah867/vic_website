import React, { useState, useEffect } from "react";
import "./Home.css";
import groupePicture from "./assets/picture_home.png";
import groupePicture1 from "./assets/picture_home1.png";
import groupePicture2 from "./assets/picture_home2.png";
import groupePicture3 from "./assets/picture_home3.png";
import groupePicture4 from "./assets/picture_home4.png";

const Home = () => {
  const images = [
    groupePicture,
    groupePicture1,
    groupePicture2,
    groupePicture3,
    groupePicture4,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [images.length]);

  return (
    <div>
      <div id="carousel">
        <img src={images[currentIndex]} alt={`slide ${currentIndex}`} />
      </div>
      <h1 id="slogan">Welcome to our website!</h1>
    </div>
  );
};

export default Home;
