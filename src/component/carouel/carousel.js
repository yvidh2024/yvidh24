import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination ,  Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";



function Carousel({ slides,handleSectionClick}) {
  return (
    <Swiper
      modules={[EffectCoverflow, Navigation, Pagination , Autoplay]}
      autoplay={{ delay: 100000 }}
      navigation={{
        prevEl: ".button-prev",
        nextEl: ".button-next",
      }}
      pagination={{
        clickable: true,
      }}
      speed={1000}
      slidesPerView={2}
      centeredSlides
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true} // Enable circular mode
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="slide-inner">
         <a href={'#' + slide.id} onClick={() => handleSectionClick(slide.id)} ><img src={slide.src} alt="events" className="eventsimage" /></a> 
        </SwiperSlide>
      ))}
      <div className="button-prev">
        <img src="./assets/carouselImages/arrow-left.svg" alt="Left" />
      </div>
      <div className="button-next">
        <img src="./assets/carouselImages/arrow-right.svg" alt="Right" />
      </div>
    </Swiper>
  );
}

export default Carousel;
