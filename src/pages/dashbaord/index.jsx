import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { matchesUser, recUsers } from '../../store/userSlice';
import {
  Card,
  Grid,
  Typography,
  CardMedia,
  CardContent,
  Box,
} from '@mui/material';
import SliderContainer from '../../components/Slider';
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
    <Box>
      <Grid container spacing={1} marginY={4}>
        {!matchUser ? (
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Your Matches
            </Typography>
            <SliderContainer>
              {matchUser?.map(user => (
                <Card sx={{ width: 320, height: 320 }} key={user.id}>
                  {user?.profilePhoto !== null && (
                    <CardMedia
                      sx={{ height: 200 }}
                      image={
                        user.profilePhoto !== null &&
                        typeof user.profilePhoto === 'string'
                          ? user.profilePhoto
                          : `https://sapthapadhi.bloomitsolutions.co.in/${user?.profilePhoto[0]?.path}`
                      }
                      alt={user.name}
                      title={user.name}
                    />
                  )}
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {user.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {user.age}Yrs,&nbsp;{user.height}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </SliderContainer>
          </Grid>
        ) : null}
        {!recUsersList !== null ? (
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Recommended Users
            </Typography>
            <SliderContainer>
              {recUsersList?.map(user => (
                <Card sx={{ width: 320, height: 320 }} key={user.id}>
                  {user?.profilePhoto !== null && (
                    <CardMedia
                      sx={{ height: 200 }}
                      image={
                        typeof user.profilePhoto === 'string'
                          ? user.profilePhoto
                          : `https://sapthapadhi.bloomitsolutions.co.in/${user?.profilePhoto[0]?.path}`
                      }
                      alt={user.name}
                      title={user.name}
                    />
                  )}

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {user.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {user.age}Yrs,&nbsp;{user.height}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </SliderContainer>
          </Grid>
        ) : null}
      </Grid>
    </Box>
  );
};

export default HomePage;
