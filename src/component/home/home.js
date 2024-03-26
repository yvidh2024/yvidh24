import React, { Component } from "react";
import { Parallax } from 'react-parallax';
import "./home.css";

export default class home extends Component {
    
  render() {
    return <div className="mainhomecontainer">
      <div className="homeContainer">
      
        <Parallax className="HomeParallax" bgImage="./assets/home/fire-flame.png" strength={800}>
        
        </Parallax>
        <div className="dateyvidh">
          <img className="yvidhdateanim" src="./assets/home/Date.png"  />
        </div>
    </div>
    </div>;
  }
}
