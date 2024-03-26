import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import './mainpage.css'
import Name from '../name/name'
import Date from '../date/date';

export default function Mainpage() {
    const [imageSrc, setImageSrc] = useState('./assets/home/homebackground.jpg');
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setImageSrc('./assets/home/phonebg.webp');
            } else {
                setImageSrc('./assets/home/homebackground.webp');
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
  return (
    <div className='mainpagecontainer'>
      <div className='mainpgcontainerinner'>
      <Parallax className="MainParallax" bgImage={imageSrc} strength={800}>
        </Parallax>
        <div className='bhdg_hds'>
        <div className="namey2">
          <img src="./assets/Untitled-1.PNG"  />
        </div>
            <div className='bjha_jia'>
                    <Name/>
            </div>
            <div className='hbh_ki'>
                    <Date/>
            </div>
        </div>
      </div> 
    </div>
  )
}
