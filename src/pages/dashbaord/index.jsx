import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { matchesUser, recUsers } from '../../store/userSlice';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import SliderContainer from '../../components/Slider';
import UserCard from './UserCard';
import { SwiperSlide } from 'swiper/react';
import { useLocation, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';


const HomePage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate=useNavigate();
  const { matchUser, recUsersList } = useSelector(state => state.user);
  const [filteredMatchUsers, setFilteredMatchUsers] = useState([]);
  const [filteredRecUsers, setFilteredRecUsers] = useState([]);
  const { planList } = useSelector(state => state.plan);
   let myCurrentPlan=JSON.parse(localStorage.getItem('myplan'));
   console.log("MYCurrentPlan Name",myCurrentPlan);
  useEffect(() => {
    dispatch(recUsers());
    dispatch(matchesUser());
  }, [dispatch]);

  const calculateExpiryDate = (createdAt, validity) => {
    const validityMonths = parseInt(validity.split(' ')[0], 10); // Extract the number of months
    return dayjs(createdAt).add(validityMonths, 'month').format('DD-MM-YYYY');
  };


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

      {
        ( myCurrentPlan?.name=="Silver Plan" || !myCurrentPlan) ?<div
        style={{
          backgroundColor: "#ffe4e1",
          border: "1px solid #ff6961",
          borderRadius: "10px",
          marginTop:'20px',
          padding: "20px",
          width:'100%',
          textAlign: "center",
          margin: "20px 0",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#ff4500",
            fontWeight: "bold",
            fontFamily: "Arial, sans-serif",
            marginBottom: "10px",
          }}
        >
          Limited Features!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#333",
            fontSize: "1rem",
            marginBottom: "15px",
          }}
        >
          Upgrade your plan to access premium features and get the best matches
          tailored to your preferences.
        </Typography>
        <button
          style={{
            backgroundColor: "#ff4500",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => {
               navigate('/pricing') 
          }}
        >
          Upgrade Your Plan
        </button>
      </div> : (
           <>
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
           </>
        )
      }
      
      {myCurrentPlan && (
        <Box
          sx={{
            backgroundColor: '#f0f4f8',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
            width: '100%',
            marginTop:'40px'
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              fontSize: '1.2rem',
              color: 'primary.main',
              textAlign: 'center',
              marginBottom: '10px',
            }}
          >
            Current Plan: {myCurrentPlan?.name}
          </Typography>
          <Card>
            <CardContent>
              <Typography variant="body1" sx={{ fontSize: '1rem', marginBottom: '8px' }}>
                <strong>Purchase Date:</strong> {dayjs(myCurrentPlan?.createdAt).format('DD-MM-YYYY')}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1rem', marginBottom: '8px' }}>
                <strong>Expiry Date:</strong> {calculateExpiryDate(myCurrentPlan.createdAt, myCurrentPlan.planValidity)}   

              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'secondary.main',
                  fontStyle: 'italic',
                  marginTop: '10px',
                }}
              >
                Thank you for subscribing to our service!
              </Typography>
            </CardContent>
          </Card>
        </Box>
      )}


      
    </Grid>
  );
};

export default HomePage;
