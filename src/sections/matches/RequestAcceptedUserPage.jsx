import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { acceptedUser } from '../../store/userSlice';
import { Avatar, Typography, Button, Grid, CircularProgress, Box } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import VisibilityIcon from '@mui/icons-material/Visibility';

const RequestAcceptedUserPage = ({ userId }) => {
  const { accepteReqUserList, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(acceptedUser());
  }, [dispatch, userId]);

  if (loading || !accepteReqUserList) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Grid container spacing={2} >
      {accepteReqUserList?.map((request) => (
        <Grid item xs={12} md={6} key={request.requestId}>
          <div className="bg-white flex  md:flex-row p-1 md:p-4 mb-1 md:mb-4 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300">
            <Avatar
              alt={request?.fromUser?.firstName || 'User'}
              src={
                request?.fromUser?.profilePhoto
                  ? typeof request.fromUser.profilePhoto === 'string'
                    ? request.fromUser.profilePhoto
                    : `${process.env.REACT_APP_BaseURL}/${request.fromUser.profilePhoto.path}`
                  : '/default-avatar.jpg'
              }
              sx={{
                width: { xs: '50px', md: '100px' },
                height: { xs: '50px', md: '100px' },
              }}
              className="rounded-lg"
            />
            <div className="flex flex-col items-start ml-4  md:mt-0 text-left">
              <Typography
                variant="h6"
                className="text-lg font-semibold"
              >
                {request?.fromUser?.firstName}
              </Typography>
              <Typography
                variant="body2"
                className="text-gray-600 text-[5px] lg:text-sm mt-0 md:mt-1"

              >
                Requested on: {request?.requestTime}
              </Typography>
              <div className="flex justify-start mt-1 md:mt-2 w-full space-x-2">
                <Button
                  component={Link}
                  to={`/app/friend-request-accepted/${request.fromUser.id}`}
                  className=" text-white rounded-full flex items-center px-1 md:px-4 py-2 text-[5px] md:text-sm bg-blue-400 hover:bg-blue-600"
                  startIcon={<VisibilityIcon />}
                >
                  <span>View Profile</span>
                </Button>
                <Button
                  component={Link}
                  to={`/app/chat`}
                  className="bg-green-500 text-white rounded-full flex items-center px-2 md:px-4 py-2 text-sm hover:bg-green-600"
                  startIcon={<ChatIcon />}
                >
                  <span>Chat Now</span>
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default RequestAcceptedUserPage;
