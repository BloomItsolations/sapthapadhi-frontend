import React from 'react';
import {
  Box,
  Avatar,
  Typography,
  Button,
  Card,
  CardActions,
  Grid,
} from '@mui/material';
import { styled } from '@mui/system';

const UserCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#EDEDED',
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const UserDetails = styled(Box)(({ theme }) => ({
  display: 'none',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  width: '80%',
  marginTop: '10px',
  fontSize: '16px',
  fontWeight: '500',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const UserInfo = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
}));

const NameAndButtonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: { xs: 'column', sm: 'row' },
}));

const UserActions = styled(CardActions)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const DeniedRequestsPage = () => {
  const users = [
    {
      id: 1,
      name: 'Angelina',
      avatar: '/images/profilepage.jpg',
      city: 'New York',
      age: 29,
      working: 'Software Engineer',
      height: '5\'9"',
      requestTime: '10:30 AM, 18 August 2024',
    },
    {
      id: 2,
      name: 'John Doe',
      avatar: '/images/profilepage.jpg',
      city: 'Los Angeles',
      age: 35,
      working: 'Doctor',
      height: '6\'0"',
      requestTime: '11:00 AM, 20 August 2024',
    },
    {
      id: 1,
      name: 'Angelina',
      avatar: '/images/profilepage.jpg',
      city: 'New York',
      age: 29,
      working: 'Software Engineer',
      height: '5\'9"',
      requestTime: '10:30 AM, 18 August 2024',
    },
    {
      id: 1,
      name: 'Angelina',
      avatar: '/images/profilepage.jpg',
      city: 'New York',
      age: 29,
      working: 'Software Engineer',
      height: '5\'9"',
      requestTime: '10:30 AM, 18 August 2024',
    },
    {
      id: 1,
      name: 'Angelina',
      avatar: '/images/profilepage.jpg',
      city: 'New York',
      age: 29,
      working: 'Software Engineer',
      height: '5\'9"',
      requestTime: '10:30 AM, 18 August 2024',
    },

    // Add more users as needed
  ];

  return (
    <Grid container spacing={2}>
      {users.map(user => (
        <Grid item xs={12} key={user.id}>
          <UserCard sx={{ padding: '8px' }}>
            <Avatar
              alt={user.name}
              variant="square"
              src={user.avatar}
              sx={{
                width: { xs: '40px', sm: '40px', md: '240px' },
                height: { xs: '40px', sm: '40px', md: '157px' },
                borderRadius: '0px',
              }}
            />
            <UserInfo>
              <NameAndButtonBox>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: '17px', sm: '18px', md: '24px' },
                    fontWeight: '500',
                  }}
                >
                  {user.name}
                </Typography>
                <UserActions>
                  <Button
                    sx={{
                      width: { sm: '30px', md: '82px' },
                      height: { sm: '15px', md: '29px' },
                      fontSize: { xs: '8px', sm: '8px', md: '18px' },
                      borderRadius: '15px',
                      border: '1px solid red',
                      color: 'red',
                      backgroundColor: 'white',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    Deny
                  </Button>
                </UserActions>
              </NameAndButtonBox>
              <UserDetails>
                <Typography variant="body2">City: {user.city}</Typography>
                <Typography variant="body2">Age: {user.age}</Typography>
                <Typography variant="body2">Working: {user.working}</Typography>
                <Typography variant="body2">Height: {user.height}</Typography>
              </UserDetails>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                  fontSize: { sm: '2px', md: '16px' },
                  fontWeight: '500',
                  marginTop: { sm: '2px', md: '8px' },
                }}
              >
                Request on: {user.requestTime}
              </Typography>
              <Button
                sx={{
                  width: '182px',
                  height: '30px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '10px',
                  color: 'black',
                  fontWeight: '500',
                  borderRadius: '15px',
                  border: '1px solid black',
                }}
              >
                View Full Profile
              </Button>
            </UserInfo>
          </UserCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default DeniedRequestsPage;
