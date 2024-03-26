import React, { useEffect } from 'react';
import { Parallax } from "react-parallax";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
    useEffect(() => {
      AOS.init({ duration: 20000 });
        
    }, []);
  return (
    <div className="aboutMainContainer">
      <Parallax
        className="AboutParallax"
        bgImage="./assets/about/backgroundabout.webp"
        strength={800}
      ></Parallax>
      <div className="aboutContainer">
      <div className="aboutyvidh">
        <div className='aboutmainposter'>
        </div>
      <div className="aboutyvidhinner">
      <div className="yvidhimg">
      <div data-aos="fade-up"
     data-aos-duration="3000">
      <img className="mainyvidhimg" src="./assets/about/dance.png" alt="yvidh" />
</div>
      
        </div>
        </div>
        </div>
        
        <div className="about">
          <div className="aboutheading">
            <h1 className="anta-regular">ABOUT US</h1>
          </div>
          <div className="aboutcontent anta-regular">
            <h4 >
              "St. Thomas College of Engineering and Technology is proud to present YVIDH 2024, an electrifying extravaganza that celebrates innovation, creativity, and technological prowess.YVIDH 2024 promises to be an unforgettable celebration of innovation, creativity, and technological excellence. Whether you're a student, a faculty member, an industry professional, or simply a tech enthusiast, we invite you to join us on this exhilarating journey into the future. Mark your calendars, spread the word, and get ready to unleash your inner innovator at YVIDH 2024 – where the future begins today."
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
