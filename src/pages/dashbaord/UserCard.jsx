import React, { useEffect, useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, sendRequest } from '../../store/userSlice';
import Swal from 'sweetalert2';

const UserCard = ({ id, profilePhoto, name, age, height, status }) => {
  const dispatch = useDispatch();
  const { success, error } = useSelector(state => state.user);
  const [newStatus,setNewStatus]=useState(status);
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
  }, [success, error])

  const handleSendRequest = async () => {
    dispatch(sendRequest(id))
    setNewStatus(true);
  };

  return (
    <Card sx={{ width: 260, height: 340 }}>
      <Link to={`/app/userdetails/${id}`} style={{ textDecoration: 'none' }}>
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
          <Typography gutterBottom variant="h5" component="div" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
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
      </Link>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 1 }}>
        <Link to={`/app/userdetails/${id}`} style={{ textDecoration: 'none' }}>
          <Button size="small" variant="outlined">
            View Profile
          </Button>
        </Link>
        <Button
          size="small"
          variant="contained"
          color={newStatus ? "success" : "primary"}
          onClick={!newStatus ? handleSendRequest : null}
          sx={{
            textTransform: 'none',
            borderRadius: '20px',
            padding: '5px 15px',
            fontSize: '14px',
            fontWeight: 'bold',
          }}
        >
          {newStatus ? 'Requested' : 'Send Request'}
        </Button>
      </Box>
    </Card>
  );
};

export default UserCard;
