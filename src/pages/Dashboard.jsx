import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';
import { Outlet, Link, Navigate, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Grid, Avatar, Icon } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { matchesUser, myalldetails, recUsers } from '../store/userSlice';
import { useResponsive } from '../hooks/use-responsive';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';


import { usePathname } from '../routes/hooks';
import { isProfileComplete } from '../utils/profileValidation';
export default function Dashboard() {
  const pathname = usePathname();
  const lgUp = useResponsive('up', 'lg');
  const dispatch = useDispatch();
  const { authInfo } = useSelector(state => state.auth);
  const { mydetails } = useSelector(state => state.user);
  let myPlan = JSON.parse(localStorage.getItem('myplan'));

  const menuItems = [
    {
      title: 'Home',
      path: '',
      icon: <HomeIcon />, // Add Home icon
    },
    {
      title: 'Profile',
      path: 'profile',
      icon: <PersonIcon />, // Add Person icon
    },
    {
      title: 'Preferences',
      path: 'preferences',
      icon: <SettingsIcon />, // Add Settings icon
    },
  ];
  
  useEffect(() => {
    dispatch(recUsers());
    dispatch(myalldetails());
    dispatch(matchesUser());
    return () => { };
  }, [dispatch]);
   
  // const profileImage =
  //   authInfo.profileImage !== null && authInfo.profileImage[0].path;
  const profileImage = mydetails?.userDetails?.profilePhoto && mydetails?.userDetails?.profilePhoto?.path;

  return (
    <>
      <Helmet>
        <title> Dashboard | sapthapadhi </title>
      </Helmet>

      <Container maxWidth="xl">
       

        <Grid container spacing={4}>
          {lgUp && (
          <Grid item xs={2.5}>
          <Box
            sx={{
              display: 'flex',
              flex: 1,
              height: '76vh',
              width: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'background.paper',
              color: 'primary.contrastText',
              borderRadius: 2,
              boxShadow: 3,
              position: 'sticky',
              top: '78px',
              padding: 2,
            }}
          >
            {/* Profile Card */}
            <Box
              sx={{
                m: 2,
                py: 2,
                px: 2.5,
                width: '90%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor:'#e5e7eb',
                alignItems: 'center',
                borderRadius: 2,
                boxShadow: 1,
                textAlign: 'center',
              }}
            >
              <Avatar
                alt={authInfo.name}
                sx={{
                  width: 64,
                  height: 64,
                  mb: 2,
                  border: (theme) =>
                    `solid 3px ${theme.palette.background.default}`,
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    boxShadow: 3,
                  },
                }}
                src={
                `${process.env.REACT_APP_IMASE_BASE_URL}/${profileImage}`
                }
              />
              <Box sx={{ color: (theme) => theme.palette.primary.main }}>
                <Typography
                  variant="subtitle1"
                  sx={{ color: 'text.primary', fontWeight: 'bold' }}
                  noWrap
                >
                  {authInfo.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary' }}
                >
                  {authInfo?.phone}
                </Typography>
                {myPlan && (
                  <Box
                    sx={{
                      mt: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      width: '100%',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="body2" color="primary">
                      My Plan:
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 'medium' }}
                      color="text.secondary"
                    >
                      {myPlan?.name}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
        
            {/* Navigation Menu */}
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                flex: 1,
                gap: 2,
                width: '90%',
                flexDirection: 'column',
                alignItems: 'flex-start',
                mt: 1,
              }}
            >
              {menuItems.map((item) => {
                const isActive =
                `/app/dashboard/${item.path}` === pathname || item.path === pathname;
               
                return  <NavItem
                  key={item.title}
                  item={item}
                  active={
                    isActive
                  }
                  sx={{
                    width: '100%',
                    padding: 1.5,
                    borderRadius: 1.5,
                    color: 'text.secondary',
                    backgroundColor: (theme) =>
                      isActive ? theme.palette.primary.main : 'transparent',
                    '&:hover': {
                      backgroundColor: (theme) =>
                        theme.palette.primary.light,
                      color: 'primary.main',
                      boxShadow: 2,
                      transition: '0.3s',
                    },
                  }}
                />
})}
            </Box>
          </Box>
        </Grid>
        
          )}

          <Grid item lg={9.5} xs={12}>
            <Box
              sx={{
                flexGrow: 1,
                minHeight: 1,
                display: 'flex',
                flexDirection: 'column',
                px: { lg: 4 },
              }}
            >
              <Outlet />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
const NavItem = ({ item, active}) => (
  <Box
    component={Link}
    to={item.path}
    sx={{
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      textDecoration: 'none',
      backgroundColor: active ? 'rgb(228 241 252)' : 'transparent',
      padding: '10px 15px',
      borderRadius: '8px',
      '&:hover': {
        backgroundColor: 'rgba(228, 241, 252, 0.8)',
      },
      transition: 'background-color 0.3s ease',
    }}
  >
    <Icon
      sx={{
        marginRight: 1.5,
        color: active ? 'primary.main' : 'text.secondary',
        transition: 'color 0.3s ease',
      }}
    >
      {item.icon} {/* Render the icon provided in the item */}
    </Icon>
    <Typography
      variant="body1"
      sx={{
        color: active ? 'primary.main' : 'text.secondary',
        fontWeight: active ? 'bold' : 'normal',
        textTransform: 'capitalize',
        transition: 'color 0.3s ease',
      }}
    >
      {item.title}
    </Typography>
  </Box>
);


