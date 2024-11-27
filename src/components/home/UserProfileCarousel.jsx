import React, { useEffect } from 'react';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import UserCard from '../../pages/dashbaord/UserCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUseres } from '../../store/userSlice';

const UserProfileCarousel = ({ profiles }) => {
  const dispatch = useDispatch();
  const { allUsers } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllUseres()); // Fetch users when the component mounts
  }, [dispatch]);

  const settings = {
    dots: false, // Ensure this is enabled for pagination dots
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    slidesToShow: 3, // Number of slides visible at once
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Adjust for medium screens
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2, // Adjust for small screens
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.5, // For very small screens
        },
      },
    ],
  };

  return (
    <Box sx={{ maxWidth: '95%', overflow: 'hidden', padding: '30px', marginInline: 'auto' }}>
      {/* Ensure unique key for each slide */}
      <Slider {...settings}>
        {allUsers?.map((profile, index) => (
          <div key={profile.id}> {/* Use profile.id as key */}
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2, backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
              {/* Pass the profile data to UserCard */}
              <UserCard
                profilePhoto={profile?.profilePhoto ? `${process.env.REACT_APP_IMASE_BASE_URL}/${profile?.profilePhoto?.path}` : 'https://murrayglass.com/wp-content/uploads/2020/10/avatar-2048x2048.jpeg'}
                name={profile.name}
                age={profile.age}
                height={profile.height}
                id={profile.id}
                status={profile?.ReceivedRequests && profile?.ReceivedRequests[0]?.status ? true : false}
              />
            </Box>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default UserProfileCarousel;
