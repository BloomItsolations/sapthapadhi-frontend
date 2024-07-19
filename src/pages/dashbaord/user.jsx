import React from 'react';

import { Box } from '@mui/material';

import Account from './Profile';

export default function UserPage() {
  return (
    <>
      <Box sx={{ height: '65vh', width: '100%' }}>
        <Account />
      </Box>
    </>
  );
}
