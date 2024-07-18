import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <div style={{ ...style, display: 'block' }} onClick={onClick}>
      <FaChevronRight className="slick-arrow-icon-right" />
    </div>
  );
}

function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div style={{ ...style, display: 'block' }} onClick={onClick}>
      <FaChevronLeft className="slick-arrow-icon-left" />
    </div>
  );
}

const SliderContainer = ({ children }) => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default SliderContainer;
