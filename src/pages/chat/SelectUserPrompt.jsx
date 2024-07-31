import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

const SelectUserPrompt = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="75vh"
      textAlign="center"
    //   bgcolor="#f0f2f5"
    >
      <ChatIcon style={{ fontSize: 80, color: '#3f51b5', marginBottom: 20 }} />
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to the Chat
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        Please select a user from the list to start chatting.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{ marginTop: 20 }}
      >
        Select a User
      </Button>
    </Box>
  );
};

export default SelectUserPrompt;
