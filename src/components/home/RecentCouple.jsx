import React, { useEffect, useState } from 'react';
import RecentCoupleCard from './RecentCoupleCard';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import RestApi from '../../api/RestApi';

const RecentCouple = () => {
  const [couple, setCouple] = useState([]);

  useEffect(() => {
    fetchCouple();
  }, []);

  async function fetchCouple() {
    try {
      const response = await RestApi.get('/admin/couples')
      
      if(response.status==200){
        setCouple(response?.data?.couples); 
      }
    } catch (error) {
      console.error('Error fetching couple data:', error);
    }
  }
  
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
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <Typography
          sx={{
            borderRadius: '0px 10px 0 10px',
            display: 'flex',
            justifyContent: 'center',
            marginInline: 'auto',
            border: '1px solid black',
            width: { xs: 'auto', sm: '300px', md: '526px' },
            fontSize: { xs: '25px', md: '40px' },
            fontFamily: 'Cabin',
            color: '#e5026b',
            textAlign: 'center',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
          variant="h4"
          component="div"
        >
          RECENT COUPLES
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
            {couple?.map((item, index) => (
              <RecentCoupleCard
                key={index}
                image={`${process.env.REACT_APP_IMASE_BASE_URL}/${item.image[0].path}`} 
                title={`${item.brideName} & ${item.groomName}`} 
              />
            ))}
          </Slider>
        </motion.div>
      </Box>
    </Box>
  );
};

export default RecentCouple;
