import { Helmet } from 'react-helmet-async';
import React, { useState } from 'react';
import { Tab, Box, Tabs, Divider } from '@mui/material';
import { CustomTabPanel, a11yProps } from '../components/tabs';
import RequestUserPage from '../sections/matches/RequestUserPage';
import RequestAcceptedUserPage from '../sections/matches/RequestAcceptedUserPage';
import DeniedRequestsPage from '../sections/matches/DeniedRequestsPage';
export default function Matches() {
  const [tabvalue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <>
      <Helmet>
        <title> Matches | Sapthapadhi </title>
      </Helmet>

      <Box
        component="main"
        className="MainContent"
        sx={{
          pt: { xs: 'calc(12px + var(--Header-height))', md: 3 },
          pb: { xs: 2, sm: 2, md: 3 },
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0,
          height: '100dvh',
          overflow: 'auto',
        }}
      >
          <RequestUserPage />
      
      </Box>
    </>
  );
}
