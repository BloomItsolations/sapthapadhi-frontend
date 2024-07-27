// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { matchesUser, recUsers } from '../../store/userSlice';
import { Grid, Typography } from '@mui/material';
import SliderContainer from '../../components/Slider';
import UserCard from './UserCard';
import { SwiperSlide } from 'swiper/react';
import { useLocation } from 'react-router-dom';

// -
const HomePage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { matchUser, recUsersList } = useSelector(state => state.user);
  console.log("MatchUserr",matchUser)
  console.log("recUsersList",recUsersList)
  const [filteredMatchUsers, setFilteredMatchUsers] = useState([]);
  const [filteredRecUsers, setFilteredRecUsers] = useState([]);
    console.log("recUsersList",recUsersList);
  useEffect(() => {
    dispatch(recUsers());
    dispatch(matchesUser());
  }, [dispatch]);
   console.log("filteredRecUsers",filteredRecUsers)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const ageRange = params.get('age');
    const religion = params.get('religion');
    const locationParam = params.get('location');
    
    const filterUsers = (users) => {
      return users?.filter(user => {
        const [ageMin, ageMax] = ageRange ? ageRange.split('-').map(Number) : [null, null];
        const userAge = Number(user.age);

        return (
          (!ageRange || (userAge >= ageMin && userAge <= ageMax)) &&
          (!religion || user.religion === religion) &&
          (!locationParam || user.countryLivingIn === locationParam)
        );
      });
    };

    if ( ageRange || religion || locationParam) {
      setFilteredMatchUsers(filterUsers(matchUser));
      setFilteredRecUsers(filterUsers(recUsersList));
    } else {
      setFilteredMatchUsers(matchUser);
      setFilteredRecUsers(recUsersList);
    }
  }, [location.search, matchUser, recUsersList]);


  return (
    <Grid container spacing={1} marginY={4}>
      {filteredMatchUsers?.length > 0 ? (
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Your Matches
          </Typography>
          <SliderContainer>
            {filteredMatchUsers.map((user, index) => (
              <SwiperSlide key={index}>
                <UserCard
                  key={index + 1}
                  profilePhoto={user?.profilePhoto ? user?.profilePhoto : "https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Image.png"}
                  name={user.name}
                  age={user.age}
                  height={user.height}
                  id={user.id}
                  status={user?.ReceivedRequests[0]?.status ? true : false}

                />
              </SwiperSlide>
            ))}
          </SliderContainer>
        </Grid>
      ) : null}
      {filteredRecUsers?.length > 0 ? (
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
            Recommended Users
          </Typography>
          <SliderContainer>
            {filteredRecUsers.map((user, index) => (
              <SwiperSlide key={index}>
                <UserCard
                  key={index + 1}
                  profilePhoto={user?.profilePhoto ? user?.profilePhoto  : "https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Image.png"}
                  name={user.name}
                  age={user.age}
                  height={user.height}
                  id={user.id}
                  status={user?.ReceivedRequests[0]?.status ? true : false}

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
