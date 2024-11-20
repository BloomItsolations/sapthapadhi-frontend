import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  CircularProgress,
} from '@mui/material';
import { styled } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { acceptRequest, clearError, denayRequest, reciveRequest } from '../../store/userSlice';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

import Swal from 'sweetalert2';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 260,
  height: '100%',
  margin: theme.spacing(2), // Add margin to each card
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.03)',
  },
}));

const EmptyStateContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '65vh',
  textAlign: 'center',
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(4),
}));

const Illustration = styled(SentimentDissatisfiedIcon)(({ theme }) => ({
  fontSize: 80,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
}));


const RequestUserPage = () => {
  const dispatch = useDispatch();
  const { recUsersList, loading, success, error } = useSelector((state) => state.user);
    console.log("recUsersList",recUsersList);
  useEffect(() => {
    if (success) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: success,
      });
      dispatch(clearError());
    }
    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
      });
      dispatch(clearError());
    }
  }, [success, error]);

  useEffect(() => {
    dispatch(reciveRequest());
  }, [dispatch]);

  const acceptUser = (fromUserId) => {
    dispatch(acceptRequest(fromUserId));
  };

  const denayUser = (fromUserId) => {
    dispatch(denayRequest(fromUserId));
  };

  if (loading || !recUsersList) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (recUsersList.length === 0) {
    return (
      <EmptyStateContainer>
        <Illustration />
        <Typography variant="h5" color="text.primary" gutterBottom>
          No Requests Yet!
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          It seems no one has sent you a request so far. This is where you’ll find all the connection requests waiting for your response.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => {
            // Action to navigate or refresh the page
            window.location.reload();
          }}
        >
          Refresh Requests
        </Button>
      </EmptyStateContainer>
    
    );
  }

  return (
    <Grid container spacing={2}>
      {recUsersList?.map((request) => (
        <Grid item xs={12} sm={6} md={4} key={request?.fromUser?.id}>
          <StyledCard>
            <Link to={`/app/request-user-details/${request?.fromUser?.id}`} style={{ textDecoration: 'none' }}>
              <CardMedia
                sx={{ height: 200, objectFit: 'cover' }}
                image={request?.fromUser?.details?.profilePhoto ? `${process.env.REACT_APP_IMASE_BASE_URL}/${request?.fromUser?.details?.profilePhoto?.path}` : 'https://murrayglass.com/wp-content/uploads/2020/10/avatar-2048x2048.jpeg'}
                alt={request?.fromUser?.firstName || 'User'}
                title={request?.fromUser?.firstName || 'User'}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {request?.fromUser?.firstName}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  Age: {request?.fromUser?.details?.age} Yrs, Height: {request?.fromUser?.details?.height} cm
                </Typography>
              </CardContent>
            </Link>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '8px' }}>
              <Link to={`/app/request-user-details/${request?.fromUser?.id}`} style={{ textDecoration: 'none' }}>
                <Button size="small" variant="outlined">
                  View Profile
                </Button>
              </Link>
              <Button size="small" variant="contained" color="primary" onClick={() => acceptUser(request?.fromUser?.id)}>
                Accept Request
              </Button>
            </Box>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default RequestUserPage;
