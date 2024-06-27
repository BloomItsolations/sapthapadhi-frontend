import React from 'react';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import WeddingArangeMentCard from './WeddingArangeMentCard';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WeddingArangeMent = () => {
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
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <Box sx={{ padding: '20px',  backgroundColor: '#f5f5f5' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <Typography
          sx={{
            borderRadius: '0px 10px 0 10px',
            border: '1px solid black',
            padding: '10px 20px',
            fontSize: { xs: '20px', md: '40px' },
            backgroundColor: '#f9f9f9',
            color: 'black',
            fontFamily: 'Cabin',
            textAlign: 'center',
            marginLeft: { xs: '0px', sm: '30px', md: '50px' },
            width: { xs: 'auto', sm: '350px', md: '560px' },
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
          variant="h4"
          component="div"
        >
          WEDDING ARRANGEMENTS
        </Typography>
      </Box>
      <Box
        ref={ref}
        sx={{
          maxWidth: { xs: '95%', md: '90%' },
          overflow: 'hidden',
          padding: '30px',
          marginInline: 'auto',
          '.slick-prev:before, .slick-next:before': {
            color: 'black',
          },
          '.slick-prev, .slick-next': {
            zIndex: 1,
          },
        }}
      >
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={variants}>
          <Slider {...settings}>
            <WeddingArangeMentCard
              image="images/weddingarrangement.jpg"
              title="WEDDING ARRANGEMENTS"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."
            />
            <WeddingArangeMentCard
              image="images/weddingarangementtwo.jpg"
              title="WEDDING ARRANGEMENTS"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."
            />
            <WeddingArangeMentCard
              image="images/weddingarangementthree.jpg"
              title="WEDDING ARRANGEMENTS"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."
            />
          </Slider>
        </motion.div>
      </Box>
    </Box>
  );
};

export default WeddingArangeMent;
