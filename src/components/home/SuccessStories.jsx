import React from 'react';
import SuccessStoryCard from './SuccessStoryCard';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SuccessStories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const { ref, inView } = useInView({
    threshold: 0.4, 
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <Typography
          sx={{
            borderRadius: '0px 10px 0 10px',
            border: '1px solid #ccc',
            padding: '10px 20px',
            fontSize: { xs: '25px', md: '40px' },
            backgroundColor: '#007bff',
            color: 'white',
            fontFamily: 'Cabin',
            textAlign: 'center',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
          variant="h4"
          component="div"
        >
          SUCCESS STORIES
        </Typography>
      </Box>
      <Box
        ref={ref}
        sx={{
          maxWidth: { xs: '98%', md: '95%' },
          paddingInline: { xs: '24px', sm: '24px', md: '40px' },
          overflow: 'hidden',
          marginInline: 'auto',
          '.slick-prev:before, .slick-next:before': {
            color: 'black',
          },
          '.slick-prev, .slick-next': {
            zIndex: 1,
          },
        }}
      >
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
        >
          <Slider {...settings}>
            <SuccessStoryCard image="images/successstory.jpg" title="Nayani & Nayan" />
            <SuccessStoryCard image="images/successstorytwo.jpg" title="Nayani & Nayan" />
            <SuccessStoryCard image="images/successstoreytrhee.jpg" title="Nayani & Nayan" />
          </Slider>
        </motion.div>
      </Box>
    </Box>
  );
};

export default SuccessStories;
