import React, { useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, sendRequest } from '../../store/userSlice';
import Swal from 'sweetalert2';

const UserCard = ({id, profilePhoto, name, age, height }) => {
  console.log("id",id)
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const {success,error}=useSelector(state=>state.user);

  useEffect(()=>{
    if (success) {
      Swal.fire({
        icon: 'success',
        title: ' Successful',
        text: success,
      });
      dispatch(clearError());
    }
    if(error){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
      });
      dispatch(clearError());
    }
  },[success,error])
  
  const handleSendRequest = async () => {
      dispatch(sendRequest(id))
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
          <Typography gutterBottom variant="h5" component="div"  sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
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
        <Button size="small" variant="contained" color="primary" onClick={handleSendRequest}>
          Send Request
        </Button>
      </Box>
    </Card>
  );
};

export default UserCard;
