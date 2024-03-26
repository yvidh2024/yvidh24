import React, { useState } from 'react';
import Carousel from "./carousel";
import './carouselstyles.css';
import DownloadPDF from '../pdfdownl/pdfdownl';

const CarouselMain = ({ dept }) => {
  const [activeId, setActiveId] = useState(null);

  const handleSectionClick = (id) => {
    setActiveId(id);
  };

  const handleImageDownload = (src) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = 'image.jpg';
    link.click();
  };

  return (
    <div className='CarouselContainer'>
      <Carousel slides={dept} handleSectionClick={handleSectionClick}/>
      <div className='eventregmain'>
        <div className='eventreg'>
          {dept.map((image) => (
            <section className="Slidercontainermain" id={image.id} key={image.id} style={{ display: activeId === image.id ? 'flex' : 'none' }}>
              <div class="blurry-background"></div>
              <div className='eventimage' onClick={() => handleImageDownload(image.src)}><img className='eventimage22' src={image.src} alt={image.title} /></div>
              <div className='eventdetails'>
                <h2 className='eventimagetittle'>{image.title}</h2>
                { image.filelink && (
                  <p className='eventimageptag'>Download Rules here: <DownloadPDF pdflink={image.filelink} pdfname={image.filename}/> </p>
                )}
                
                {image.reglink && (  
                    <button>
                  <a href={image.reglink} style={{ textDecoration: 'none' }}>Register</a>
                  </button>

                  
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselMain;
