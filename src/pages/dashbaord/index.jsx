import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { matchesUser, recUsers } from '../../store/userSlice';
import { Grid, Typography } from '@mui/material';
import SliderContainer from '../../components/Slider';
import UserCard from './UserCard';
import { SwiperSlide } from 'swiper/react';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { matchUser, recUsersList } = useSelector(state => state.user);
  const [filteredMatchUsers, setFilteredMatchUsers] = useState([]);
  const [filteredRecUsers, setFilteredRecUsers] = useState([]);
  console.log("MatchUser", filteredMatchUsers)
  console.log("Recommend User", filteredRecUsers)
  useEffect(() => {
    dispatch(recUsers());
    dispatch(matchesUser());
  }, [dispatch]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const ageRange = params.get('age');
    const religion = params.get('religion');
    const locationParam = params.get('location');

    const filterUsers = (users) => {
      if (!Array.isArray(users)) return [];

      return users.filter(user => {
        const [ageMin, ageMax] = ageRange ? ageRange.split('-').map(Number) : [null, null];
        const userAge = Number(user.age);

        return (
          (!ageRange || (userAge >= ageMin && userAge <= ageMax)) &&
          (!religion || user.religion === religion) &&
          (!locationParam || user.country === locationParam)
        );
      });
    };

    if (ageRange || religion || locationParam) {
      setFilteredMatchUsers(filterUsers(matchUser));
      setFilteredRecUsers(filterUsers(recUsersList));
    } else {
      setFilteredMatchUsers(Array.isArray(matchUser) ? matchUser : []);
      setFilteredRecUsers(Array.isArray(recUsersList) ? recUsersList : []);
    }
  }, [location.search, matchUser, recUsersList]);



  return (
    <Grid container spacing={1} marginY={1}>
    
      {filteredRecUsers?.length > 0 ? (
        <Grid item xs={12}>
           <Typography variant="p" sx={{ color: 'primary.main', fontSize: '2rem', fontFamily: 'cursive', fontWeight: 'bold', padding: '0px' }}>
            Recommendetation Profile
          </Typography>

          <SliderContainer>
            {filteredRecUsers?.map((user, index) => {

              let primage =typeof user?.profilePhoto == "string" ? user?.profilePhoto : user?.profilePhoto ? `${process.env.REACT_APP_IMASE_BASE_URL}/${user?.profilePhoto?.path}` : 'https://murrayglass.com/wp-content/uploads/2020/10/avatar-2048x2048.jpeg'
               console.log("Primage",primage);
            return <SwiperSlide key={index}>
                <UserCard
                  key={index + 1}
                  profilePhoto={primage}
                  name={user.name}
                  age={user.age}
                  height={user.height}
                  id={user.id}
                  status={user?.ReceivedRequests && user?.ReceivedRequests[0]?.status ? true : false}
                />
              </SwiperSlide>
            })}
          </SliderContainer>
        </Grid>
      ) : null}
        {filteredMatchUsers?.length > 0 ? (
        <Grid item xs={12} marginTop={3}>
          <Typography variant="p" sx={{ color: 'primary.main', fontSize: '2rem', fontFamily: 'cursive', fontWeight: 'bold', padding: '0px' }}>
            Profile Based on Your Preference
          </Typography>

          <SliderContainer>
            {filteredMatchUsers.map((user, index) => {
              let primage =typeof user?.profilePhoto == "string" ? user?.profilePhoto : user?.profilePhoto ? `${process.env.REACT_APP_IMASE_BASE_URL}/${user?.profilePhoto?.path}` : 'https://murrayglass.com/wp-content/uploads/2020/10/avatar-2048x2048.jpeg'
              return <SwiperSlide key={index}>
                <UserCard
                  key={index + 1}
                  profilePhoto={primage}
                  name={user.name}
                  age={user.age}
                  height={user.height}
                  id={user.id}
                  status={user?.ReceivedRequests && user?.ReceivedRequests[0]?.status ? true : false}
                />
              </SwiperSlide>
            })}
          </SliderContainer>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default HomePage;
