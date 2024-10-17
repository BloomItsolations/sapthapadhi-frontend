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

const RequestUserPage = () => {
  const dispatch = useDispatch();
  const { recUsersList, loading, success, error } = useSelector((state) => state.user);

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

  return (
    <Grid container spacing={2}>
      {recUsersList?.map((request) => (
        <Grid item xs={12} sm={6} md={4} key={request?.fromUser?.id}>
          <StyledCard>
            <Link to={`/app/request-user-details/${request?.fromUser?.id}`} style={{ textDecoration: 'none' }}>
              <CardMedia
                sx={{ height: 200, objectFit: 'cover' }}
                image={request?.fromUser?.profilePhoto ? `${process.env.REACT_APP_IMASE_BASE_URL}/${JSON.parse(request?.fromUser?.profilePhoto)?.path}` : 'https://murrayglass.com/wp-content/uploads/2020/10/avatar-2048x2048.jpeg'}
                alt={request?.fromUser?.firstName || 'User'}
                title={request?.fromUser?.firstName || 'User'}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {request?.fromUser?.firstName}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  Age: {request?.fromUser?.age} Yrs, Height: {request?.fromUser?.height}
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
