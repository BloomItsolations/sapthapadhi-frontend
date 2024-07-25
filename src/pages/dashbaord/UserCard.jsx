import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';

const UserCard = ({ profilePhoto, name, age, height }) => {
  return (
    <Card sx={{ width: 260, height: 340 }}>
      {profilePhoto !== null && (
        <CardMedia
          sx={{ height: 200 }}
          image={
            typeof profilePhoto === 'string'
              ? profilePhoto
              : `https://sapthapadhi.bloomitsolutions.co.in/${profilePhoto?.path}`
          }
          alt={name}
          title={name}
        />
      )}
      <CardContent sx={{ textAlign: 'start' }}>
        <Typography gutterBottom variant="h5" component="div">
          {name} 
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
        >
          Age: {age} Yrs, Height: {height}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 1 }}>
        <Button size="small" variant="outlined">
          View Profile
        </Button>
        <Button size="small" variant="contained" color="primary">
          Send Request
        </Button>
      </Box>
    </Card>
  );
};

export default UserCard;
