import React, { useState, useEffect } from 'react';
import './featureevent.css';
import bgImage from './banner.webp';
import phBgImage from './bannervertical.webp';
import pmain from './pmainevents.webp';
import pspecial from './pspecialevents.webp';
import pdep from './pDepartment.webp';
import main from './mainevents.webp';
import special from './Special.webp';
import dep from './Department.webp';


export default function FeatureEvent({handleDepartmentClick,handleSpecialClick,handleMainClick}) {
  const [imageSrc, setImageSrc] = useState(bgImage);
  const [depsrc , setDepSrc] = useState(dep)
  const [mainsrc , setMainSrc] = useState(main)
  const [specialsrc , setSpecialSrc] = useState(special)


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageSrc(phBgImage);
      } else {
        setImageSrc(bgImage);
      }
      if (window.innerWidth <= 500){
        setDepSrc(pdep);
        setMainSrc(pmain);
        setSpecialSrc(pspecial);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='feateventmaincontainer' style={{backgroundImage: `url(${imageSrc})`}}>
      <div className='feateventcontainer'>
      <div className='featevent'>
        <a className=" feateventa" href="#departmentevent" onClick={handleDepartmentClick} >
          <img className='feateventaimg' src={depsrc}  alt=''/>
          </a>
          <div className='eventbase'>
            <img src="./assets/featured/teleport.png" />
          </div>
          </div>
        <div className='featevent'  >
          <a className=" feateventa" href="#specialevent" onClick={handleSpecialClick}>
            <img src={specialsrc} alt=''/>
            </a>
            <div className='eventbase'>
            <img src="./assets/featured/teleport.png" />
            </div>
            </div>
        <div className='featevent'>
          <a className=" feateventa" href="#mainevent" onClick={handleMainClick}><img src={mainsrc} alt=''/>
          </a>
          <div className='eventbase'>
          <img src="./assets/featured/teleport.png" />
          </div>
          </div>
      </div>
    </div>
  )
}
