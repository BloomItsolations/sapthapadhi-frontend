import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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

const RequestUserPage = ({ userId }) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        // Replace with your actual API endpoint for fetching pending requests
        const response = await axios.get(
          `${process.env.REACT_APP_BaseURL}/app/receive-requests/${userId}`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      } finally {
      }
    };

    fetchRequests();
  }, [userId]);

  const acceptUser = async fromUserId => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BaseURL}/app/update-request-status`,
        {
          fromUserId: fromUserId,
          toUserId: userId,
          status: 'accepted',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      console.log('Response from accept user', response);

      if (response.statusText === 'OK') {
        // Optionally update the local state or refetch pending requests after successful accept
      }
    } catch (error) {
      console.log('Error', error);
    } finally {
    }
  };
  console.log('requests', requests);
  return (
    <>
      <Grid container spacing={2}>
        {requests.map(request => (
          <Grid item xs={12} key={request.fromUser.id}>
            <UserCard sx={{ padding: '8px' }}>
              <Avatar
                alt={request.fromUser.profilePhoto}
                src={
                  request.fromUser.profilePhoto
                    ? `${process.env.REACT_APP_BaseURL}/${request.fromUser.profilePhoto[0].path}`
                    : '/default-avatar.jpg'
                }
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
                    {request.fromUser.firstName}
                  </Typography>
                  <UserActions>
                    <Button
                      sx={{
                        marginRight: { xs: '0px', sm: '0px', md: '8px' },
                        fontSize: { xs: '8px', sm: '8px', md: '18px' },
                        marginBottom: { xs: '0px', sm: '0px' },
                        width: { sm: '30px', md: '82px' },
                        height: { sm: '15px', md: '29px' },
                        borderRadius: '15px',
                        backgroundColor: '#51A22B',
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onClick={() => acceptUser(request.fromUser.id)} // Replace with the actual toUserId
                    >
                      Accept
                    </Button>
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
                  {/* Display relevant details */}
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
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{
                    fontSize: { sm: '2px', md: '16px' },
                    fontWeight: '500',
                    marginTop: { sm: '2px', md: '8px' },
                  }}
                >
                  Request on: {request.createdAt}
                </Typography>
                <Button
                  component={Link}
                  to={`/ViewNewRequestProfile/${request.fromUser.id}`}
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
    </>
  );
};

export default RequestUserPage;
