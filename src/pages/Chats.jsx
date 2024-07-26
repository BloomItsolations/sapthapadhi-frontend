import { Helmet } from 'react-helmet-async';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Box, Grid } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
import { useResponsive } from '../hooks/use-responsive';
// import { usePathname } from '../routes/hooks';
import ChatList from '../sections/ChatList';

export default function Dashboard() {
  const lgUp = useResponsive('up', 'lg');

  return (
    <>
      <Helmet>
        <title> Chat | sapthapadhi </title>
      </Helmet>

      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {lgUp && (
            <Grid item xs={12} lg={4} md={3}>
              <Box
                sx={{
                  display: 'flex',
                  flex: 1,
                  padding: 2,
                  width: '100%',
                  flexDirection: 'column',
                  alignItems: 'center',
                  color: 'primary.contrastText',
                  borderRadius: 1,
                }}
              >
                <ChatList />
              </Box>
            </Grid>
          )}
          <Grid item lg={8} xs={12}>
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
