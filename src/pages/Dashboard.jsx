import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Container, Typography, Box, Grid, Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { matchesUser, recUsers } from '../store/userSlice';
import { useResponsive } from '../hooks/use-responsive';
import { alpha } from '@mui/material/styles';
import { usePathname } from '../routes/hooks';
export default function Dashboard() {
  const pathname = usePathname();
  const lgUp = useResponsive('up', 'lg');
  const dispatch = useDispatch();
  const { authInfo } = useSelector(state => state.auth);

  const menuItems = [
    {
      title: 'Profile',
      path: 'profile',
    },
    {
      title: 'preferences',
      path: 'preferences',
    },
    {
      title: 'settings',
      path: 'settings',
    },
  ];
  useEffect(() => {
    dispatch(recUsers());
    dispatch(matchesUser());
    return () => {};
  }, [dispatch]);
  // const profileImage =
  //   authInfo.profileImage !== null && authInfo.profileImage[0].path;
  return (
    <>
      <Helmet>
        <title> Dashboard | sapthapadhi </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography
          variant="h4"
          sx={{
            my: 4,
            textTransform: 'capitalize',
            color: 'secondary.main',
            textAlign: 'center',
          }}
        >
          Hi, Welcome back {authInfo.name}👋
        </Typography>

        <Grid container spacing={4}>
          {lgUp && (
            <Grid item xs={2.5}>
              <Box
                sx={{
                  display: 'flex',
                  flex: 1,
                  height: '70vh',
                  width: '100%',
                  flexDirection: 'column',
                  alignItems: 'center',
                  backgroundColor: 'background.paper',
                  color: 'primary.contrastText',
                  borderRadius: 1,
                  boxShadow: 1,
                }}
              >
                {/* profile Crad */}
                <Box
                  sx={{
                    m: 2,
                    py: 2,
                    px: 2.5,
                    width: '80%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 1.5,
                    alignItems: 'start',
                    backgroundColor: theme => `${theme.palette.primary.light}`,
                  }}
                >
                  <Avatar
                    alt={authInfo.name}
                    sx={{
                      width: 46,
                      height: 46,
                      placeSelf: 'center',
                      color: theme => alpha(theme.palette.primary.main),
                      border: theme =>
                        `solid 2px ${theme.palette.background.default}`,
                    }}
                    src={`https://avatars.githubusercontent.com/u/53830804`}
                  ></Avatar>
                  <Box sx={{ color: theme => theme.palette.primary.main }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: 'text.secondary' }}
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
                  </Box>
                </Box>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flex: 1,
                    gap: 1,
                    width: '80%',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'start',
                  }}
                >
                  {menuItems.map(item => (
                    <NavItem
                      key={item.title}
                      item={item}
                      active={
                        '/app/dashboard/' + item.path === pathname ||
                        item.path === pathname
                      }
                    />
                  ))}
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
                px: 4,
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
const NavItem = ({ item, active }) => (
  <Box component={Link} to={item.path}>
    <Typography
      variant="body1"
      sx={{
        color: active ? 'primary.main' : 'text.secondary',
        '&:hover': {
          color: active ? 'primary.main' : 'text.secondary',
        },
        textTransform: 'capitalize',
      }}
    >
      {item.title}
    </Typography>
  </Box>
);