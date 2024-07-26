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
        <Tabs
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            flexDirection: 'column',
            background: '#ffffff',
            boxShadow: '2px',
            borderRadius: '6px 6px 0 0',
          }}
          value={tabvalue}
          onChange={handleChange}
        >
          <Tab
            label="Friend Request"
            sx={{ borderRadius: '6px 6px 0 0', paddingX: 6, paddingY: 0 }}
            {...a11yProps(0)}
          />
          <Tab
            label="Accepted User"
            sx={{ borderRadius: '6px 6px 0 0', paddingX: 6, paddingY: 0 }}
            {...a11yProps(1)}
          />
          
        </Tabs>
        <Divider />
        <CustomTabPanel value={tabvalue} index={0}>
          <RequestUserPage />
        </CustomTabPanel>
        <CustomTabPanel value={tabvalue} index={1}>
          <RequestAcceptedUserPage />
        </CustomTabPanel>
        <CustomTabPanel value={tabvalue} index={2}>
          <DeniedRequestsPage />
        </CustomTabPanel>
      </Box>
    </>
  );
}
