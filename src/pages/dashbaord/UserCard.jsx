import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
const UserCard = ({ profilePhoto, name, age, height }) => {
  return (
    <>
      <Card sx={{ width: 260, height: 320 }}>
        {profilePhoto !== null && (
          <CardMedia
            sx={{ height: 200 }}
            image={
              typeof profilePhoto === 'string'
                ? profilePhoto
                : `https://sapthapadhi.bloomitsolutions.co.in/${profilePhoto[0]?.path}`
            }
            alt={name}
            title={name}
          />
        )}
        <CardContent
          sx={{
            textAlign: 'start',
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {age}Yrs,&nbsp;{height}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default UserCard;
