import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import BestOneCard from './BestOneCard';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCouple } from '../../store/userSlice';

const BestOne = () => {
  const dispatch = useDispatch();

  let { coupledata } = useSelector((state) => state.user);
  console.log("CoupleData",);
  useEffect(() => {
    dispatch(getAllCouple())
  }, [])

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Box sx={{ padding: '15px', backgroundColor: '#f5f5f5' }}>
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
          CATCH UP THE BEST ONE
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
            {
              coupledata && coupledata?.couples.map((value) => (
                <BestOneCard
                  image={`https://sapthapadhi.bloomitsolutions.co.in/${value?.image[0]?.path}`}
                  title={`${value?.groomName} & ${value?.brideName}`}
                  story={value?.aboutUs}
                />
              ))
            }

          </Slider>
        </motion.div>
      </Box>
    </Box>
  );
};

export default BestOne;
