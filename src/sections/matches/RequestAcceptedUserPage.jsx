import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Avatar, Typography, Button, Card, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

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

const RequestAcceptedUserPage = ({ userId }) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchAcceptedRequests = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BaseURL}/app/accepted-requests/${userId}`,
        );
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching accepted requests:', error);
      }
    };

    fetchAcceptedRequests();
  }, [userId]);

  return (
    <Grid container spacing={2}>
      {requests.map(request => (
        <Grid item xs={12} key={request.requestId}>
          <UserCard>
            <Avatar
              alt={request.fromUser.firstName}
              src={
                request.fromUser.profilePhoto
                  ? `${process.env.REACT_APP_BaseURL}/${request.fromUser.profilePhoto[0].path}`
                  : '/default-avatar.jpg'
              }
            />
            <UserInfo>
              <NameAndButtonBox>
                <Typography variant="h6">
                  {request.fromUser.firstName}
                </Typography>
                <Typography variant="body2" sx={{ color: '#51A22B' }}>
                  Accepted
                </Typography>
              </NameAndButtonBox>
              <UserDetails>
                <Typography variant="body2">
                  City: {request.fromUser.city}
                </Typography>
                <Typography variant="body2">
                  Age: {request.fromUser.age}
                </Typography>
                <Typography variant="body2">
                  Working: {request.fromUser.working}
                </Typography>
                <Typography variant="body2">
                  Height: {request.fromUser.height}
                </Typography>
              </UserDetails>
              <Typography variant="body2" color="textSecondary">
                Requested on: {request.requestTime}
              </Typography>
              <Button
                component={Link}
                to={`/profile/${request.fromUser.id}`}
                sx={{ marginTop: '10px' }}
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

export default RequestAcceptedUserPage;
