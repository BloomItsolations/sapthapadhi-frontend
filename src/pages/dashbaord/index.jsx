import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { matchesUser, recUsers } from '../../store/userSlice';
import { Grid, Typography } from '@mui/material';
import SliderContainer from '../../components/Slider';
import UserCard from './UserCard';
import { SwiperSlide } from 'swiper/react';

// -
const HomePage = () => {
  const dispatch = useDispatch();
  const { matchUser, recUsersList } = useSelector(state => state.user);
  useEffect(() => {
    dispatch(recUsers());
    dispatch(matchesUser());
    return () => {};
  }, [dispatch]);
  return (
    <Grid container spacing={1} marginY={4}>
      {!matchUser ? (
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Your Matches
          </Typography>
          <SliderContainer>
            {matchUser?.map((user, index) => (
              <SwiperSlide key={index}>
                <UserCard
                  key={index + 1}
                  profilePhoto={user?.profilePhoto}
                  name={user.name}
                  age={user.age}
                  height={user.height}
                />
              </SwiperSlide>
            ))}
          </SliderContainer>
        </Grid>
      ) : null}
      {!recUsersList !== null ? (
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
            Recommended Users
          </Typography>
          <SliderContainer>
            {recUsersList?.map((user, index) => (
              <SwiperSlide key={index}>
                <UserCard
                  key={index + 1}
                  profilePhoto={user?.profilePhoto}
                  name={user.name}
                  age={user.age}
                  height={user.height}
                />
              </SwiperSlide>
            ))}
          </SliderContainer>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default HomePage;
