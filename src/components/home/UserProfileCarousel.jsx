import React from 'react';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const UserProfileCarousel = ({ profiles }) => {
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

  return (
     <Box sx={{ maxWidth: '95%', overflow: 'hidden', padding:'30px', marginInline:'auto' }}>
        <Slider {...settings}>
      {profiles.map((profile, index) => (
        <div>
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', padding: 2,justifyContent:'space-around', backgroundColor: '#f9f9f9', borderRadius: '8px', marginLeft:'10px' }}>
          <Box sx={{ flexShrink: 0 }}>
            <img src={profile.image} alt={profile.name} style={{ width: '150px', height: '150px', borderRadius: '8px' }} />
          </Box>
          <Box sx={{ marginLeft: 0 }}>
            <Typography variant="h6">{profile.name}</Typography>
            <Typography variant="body1">Age: {profile.age}</Typography>
            <Typography variant="body1">City: {profile.city}</Typography>
            <Typography variant="body1">Cast: {profile.cast}</Typography>
            <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
              View Profile
            </Button>
          </Box>
        </Box>
        </div>
      ))}
    </Slider>
    </Box>
  );
};

export default UserProfileCarousel;
