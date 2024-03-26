import React, { useState, useEffect } from 'react';
import { Parallax } from "react-parallax";
import Atropos from "atropos/react";
import "atropos/css";
import "./countdown.css";
import Counter from "./counter";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Countdown() {
  
  const [imageSrc, setImageSrc] = useState('./assets/countdown/Countdown.webp');
  useEffect(() => {
    AOS.init({ duration: 1000 });
    const handleResize = () => {
      if (window.innerWidth <= 768) {
          setImageSrc('./assets/countdown/phtheyyam2.webp');
      } else {
          setImageSrc('./assets/countdown/Countdown.webp');
      }
  };

  handleResize();

  window.addEventListener('resize', handleResize);

  return () => {
      window.removeEventListener('resize', handleResize);
  };
  }, []);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const image = document.getElementById('animated-img');
      if (image) {
        const top = image.getBoundingClientRect().top;
        const bottom = image.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        // Check if the top or bottom of the image is in the viewport
        setIsVisible(top >= 0 && bottom <= windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="countdownContainer">
      <div className="countdown">
        <Parallax
          className="countdownprallax"
          bgImage={imageSrc}
          strength={800}
        ></Parallax>
        <div className="countkathak">
        <div className="kathakali">
            
              {/* <div data-aos="fade-up-left"> */}
                <img
                  
                  className="kathakimage rotate"
                  src="./assets/countdown/yvidhlogo.svg"
                />
              {/* </div> */}
            
          </div>
          <div className="countdowndisplay">
            <Counter />
          </div>
          
        </div>
      </div>
    </div>
  );
}
