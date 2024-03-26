import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/dist/styles.css'; 
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import './technical.css';

const Technical2 = ({ images }) => {
  // Initialize initialSlide with the index of the active slide or 0 if activeId is null
  return (
    <AwesomeSlider cssModule={AwesomeSliderStyles}  animation="cubeAnimation">
      {images.map((image) => (
        <section className="AwesomeSlidercontainer" id={image.id} key={image.id}>
          <img src={image.src} />
          <div>
            <h2>{image.title}</h2>
            <p>{image.description}</p>
            <button>Register</button>
          </div>
        </section>
      ))}
    </AwesomeSlider>
  );
};

export default Technical2;
