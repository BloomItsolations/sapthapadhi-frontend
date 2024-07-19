import React from 'react';
import { Swiper } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';

const SliderContainer = ({ children }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      navigation={true}
      breakpoints={{
        440: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 10,
        },
      }}
      modules={[Navigation]}
      className="mySwiper mySwipers"
    >
      {children}
    </Swiper>
  );
};

export default SliderContainer;
