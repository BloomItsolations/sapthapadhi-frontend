import React, { useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import ChatCard from './chats/ChatCard';
import { acceptedUser } from '../store/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const ChatList = () => {

  const { accepteReqUserList, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(acceptedUser());
  }, [dispatch]);
  console.log("accepteReqUserList",accepteReqUserList);
  if (loading || !accepteReqUserList) {
    return <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
    </Box>
}
  return (
    <Box
      sx={{ display: 'felx', flexDirection: 'column', gap: 2, width: '100%' }}
    >
      {accepteReqUserList?.map(chat => (
        <ChatCard
          key={chat?.requestId}
          to={chat?.fromUser?.id}
          name={chat?.fromUser?.firstName}
          image={chat?.fromUser?.profilePhoto ? chat?.fromUser?.profilePhoto : 'https://murrayglass.com/wp-content/uploads/2020/10/avatar-2048x2048.jpeg'}
        />
      ))}
    </Box>
  );
};

export default ChatList;
