import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { matchesUser, recUsers } from '../../store/userSlice';
import {
  Card,
  Container,
  Grid,
  Typography,
  CardMedia,
  Box,
  CardContent,
} from '@mui/material';
import SliderContainer from '../../components/Slider';
// ---------------------------------------------------

export default function AppPage() {
  const dispatch = useDispatch();
  const { authInfo } = useSelector(state => state.auth);
  const { matchUser, recUsersList } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(recUsers());
    dispatch(matchesUser());
    return () => {};
  }, [dispatch]);
  return (
    <>
      <Helmet>
        <title> Dashboard | sapthapadhi </title>
      </Helmet>

      <Container>
        <Typography
          variant="h4"
          sx={{ mb: 5, textTransform: 'capitalize', color: 'secondary.main' }}
        >
          Hi, Welcome back {authInfo.name}👋
        </Typography>
        <Box>
          <Box>
            {' '}
            <Box
              component={Link}
              to={'preferences'}
              sx={{
                color: 'primary.main',
                backgroundColor: 'transparent',
              }}
            >
              <Box
                component="span"
                sx={{
                  color: '#000000',
                }}
              >
                Preferences
              </Box>
            </Box>
            <Box
              component={Link}
              to={'Setting'}
              sx={{
                color: 'primary.main',
                backgroundColor: 'transparent',
              }}
            >
              <Box
                component="span"
                sx={{
                  color: '#000000',
                }}
              >
                Setting
              </Box>
            </Box>
            <Box
              component={Link}
              to={'preferences'}
              sx={{
                color: 'primary.main',
                backgroundColor: 'transparent',
              }}
            >
              <Box
                component="span"
                sx={{
                  color: '#000000',
                }}
              >
                Preferences
              </Box>
            </Box>
            <Box
              component={Link}
              to={'preferences'}
              sx={{
                color: 'primary.main',
                backgroundColor: 'transparent',
              }}
            >
              <Box
                component="span"
                sx={{
                  color: '#000000',
                }}
              >
                Preferences
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 1,
              flexGrow: 1,
              width: '100%',
              overflow: 'auto',
            }}
          >
            <Outlet />
          </Box>
        </Box>
        <Grid container spacing={1} marginY={4}>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Your Matches
            </Typography>
            <SliderContainer>
              {matchUser !== null ? (
                matchUser?.map(user => (
                  <Card sx={{ width: 320, height: 320 }} key={user.id}>
                    <CardMedia
                      sx={{ height: 200 }}
                      image={
                        typeof user.profilePhoto === 'string'
                          ? user.profilePhoto
                          : `https://sapthapadhi.bloomitsolutions.co.in/${user.profilePhoto[0]?.path}`
                      }
                      alt={user.name}
                      title={user.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {user.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {user.age}Yrs,&nbsp;{user.height}
                      </Typography>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div>No Matches Users</div>
              )}
            </SliderContainer>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Recommended Users
            </Typography>
            <SliderContainer>
              {recUsersList !== null ? (
                recUsersList?.map(user => (
                  <Card sx={{ width: 320, height: 320 }} key={user.id}>
                    <CardMedia
                      sx={{ height: 200 }}
                      image={
                        typeof user.profilePhoto === 'string'
                          ? user.profilePhoto
                          : `https://sapthapadhi.bloomitsolutions.co.in/${user.profilePhoto[0]?.path}`
                      }
                      alt={user.name}
                      title={user.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {user.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {user.age}Yrs,&nbsp;{user.height}
                      </Typography>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div>No Recommended Users</div>
              )}
            </SliderContainer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
