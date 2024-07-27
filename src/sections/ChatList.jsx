import React, { useEffect } from 'react';
import { Box, Avatar, Typography, Badge, CircularProgress, List, ListItem, ListItemAvatar, ListItemText, Link } from '@mui/material';
import { styled } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { acceptedUser } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';

const ChatLink = styled(Link)(({ theme }) => ({
  display: 'block',
  textDecoration: 'none',
  color: 'inherit',
  backgroundColor: '#FFFFFF',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1.5),
  marginBottom: '5px',
  boxShadow: theme.shadows[1],
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0),
  },
}));

const ChatList = () => {
  const { accepteReqUserList, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(acceptedUser());
  }, [dispatch]);

  if (loading || !accepteReqUserList) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <List sx={{ width: { sm: '100%', xs:'100%', md: '80%' }, marginInline: 'auto' }}>
      {accepteReqUserList?.map(chat => (
        <ChatLink key={chat?.requestId} onClick={() => navigate(`/app/chat/${chat?.fromUser?.id}`)}>
          <ListItem alignItems="center" component="div">
            <ListItemAvatar>
              <Avatar
                alt={`${chat?.fromUser?.firstName} `}
                src={chat?.fromUser?.profilePhoto ? chat?.fromUser?.profilePhoto : 'https://murrayglass.com/wp-content/uploads/2020/10/avatar-2048x2048.jpeg'}
                sx={{
                  width: { xs: '50px', sm: '60px', md: '80px' },
                  border: '4px solid #0fe40f',
                  height: { xs: '50px', sm: '60px', md: '80px' }
                }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={`${chat?.fromUser?.firstName} `}
              primaryTypographyProps={{
                sx: { fontSize: { sm: '18px', md: '28px' }, marginLeft: { xs: '20px', sm: '20px', md: '20px' }, fontWeight: '500' },
              }}
            />
            {chat.unreadCount > 0 && (
              <Badge
                badgeContent={chat?.unreadCount}
                sx={{
                  alignSelf: 'center',
                  '& .MuiBadge-badge': {
                    backgroundColor: '#76C35A',
                  },
                }}
              />
            )}
          </ListItem>
        </ChatLink>
      ))}
    </List>
  );
};

export default ChatList;
