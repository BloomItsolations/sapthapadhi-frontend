import React, { useEffect } from 'react';
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
  CircularProgress,
  CardContent,
  CardMedia,
} from '@mui/material';
import { styled, useTheme } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { acceptRequest, clearError, denayRequest, reciveRequest } from '../../store/userSlice';
import Swal from 'sweetalert2';

const UserCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#fff',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'row',
  padding: theme.spacing(1),
  marginBottom: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  alignItems: 'center',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
  },
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const AvatarWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
});

const UserInfo = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: 1,
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    alignItems: 'center',
  },
}));

const UserActions = styled(CardActions)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '4px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const RequestUserPage = () => {
  const dispatch = useDispatch();
  const { recUsersList, loading, success, error } = useSelector((state) => state.user);
  useEffect(() => {
    if (success) {
      Swal.fire({
        icon: 'success',
        title: ' Successful',
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

  const acceptUser = async (fromUserId) => {
    dispatch(acceptRequest(fromUserId))
  };
  const denayUser = async (fromUserId) => {
    dispatch(denayRequest(fromUserId))
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

        <Card sx={{ width: 260, height: 340, marginTop: '5px' }} key={request?.fromUser?.id}>
          <Link to={`/app/request-user-details/${request?.fromUser?.id}`} style={{ textDecoration: 'none' }}>
            <CardMedia
              sx={{ height: 200, objectFit: 'cover' }}
              image={
                request?.fromUser?.profilePhoto
                  ? typeof request.fromUser.profilePhoto === 'string'
                    ? request.fromUser.profilePhoto
                    : `${process.env.REACT_APP_BaseURL}/${request.fromUser.profilePhoto.path}`
                  : 'https://murrayglass.com/wp-content/uploads/2020/10/avatar-2048x2048.jpeg'
              }
              alt={request?.fromUser?.firstName || 'User'}
              title={request?.fromUser?.firstName || 'User'}
            />
            <CardContent sx={{ textAlign: 'start' }}>
              <Typography gutterBottom variant="h5" component="div" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {request?.fromUser?.firstName}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
              >
                Age: {request?.fromUser?.age} Yrs, Height: {request?.fromUser?.height}
              </Typography>
            </CardContent>
          </Link>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 1 }}>
            <Link to={`/app/request-user-details/${request?.fromUser?.id}`} style={{ textDecoration: 'none' }}>
              <Button size="small" variant="outlined">
                View Profile
              </Button>
            </Link>
            <Button size="small" variant="contained" color="primary" onClick={() => acceptUser(request?.fromUser?.id)}  >
              Accept Request
            </Button>
          </Box>
        </Card>
      ))}
    </Grid>

  );
};

export default RequestUserPage;
