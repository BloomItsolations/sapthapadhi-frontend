import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Divider,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import io from 'socket.io-client';
import { useSelector } from 'react-redux';
const socket = io(process.env.REACT_APP_BaseURL);

const ChatRoom = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  console.log(userId);
  const [user] = useState({
    name: 'ANGELINA',
    avatar: '/images/chatuser.png',
    status: 'online',
  });

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const { authInfo } = useSelector(state => state.auth);
  const senderId = authInfo.userId;
  const recipientId = userId;

  useEffect(() => {
    socket.emit('fetchMessages', recipientId);

    socket.on('previousMessages', previousMessages => {
      setMessages(previousMessages);
      console.log('previousMessages', previousMessages);
    });

    socket.on('message', newMessage => {
      console.log('New Messsage', newMessage);
      setMessages(prevMessages => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off('previousMessages');
      socket.off('message');
    };
  }, [recipientId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (message.trim()) {
      const newMessage = { senderId, recipientId, message };
      socket.emit('sendMessage', newMessage);
      try {
        await axios.post(
          `${process.env.REACT_APP_BaseURL}/app/messages`,
          newMessage,
        );
        setMessage('');
        scrollToBottom();
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBack = () => {
    navigate('/app/chat');
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: 'calc(100vh - 56px)', sm: '85vh' },
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'scroll',
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleBack}
            aria-label="back"
          >
            <ArrowBackIcon />
          </IconButton>
          <Avatar alt={user.name} src={user.avatar} sx={{ ml: 2 }} />
          <Box sx={{ ml: 2 }}>
            <Typography variant="h6">{user.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              {user.status === 'online' ? 'Online' : 'Offline'}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
        <List>
          {messages.map((msg, index) => (
            <ListItem
              key={msg._id}
              sx={{
                justifyContent:
                  msg.senderId === senderId ? 'flex-end' : 'flex-start',
              }}
            >
              <ListItemText
                primary={msg.message}
                sx={{
                  textAlign: msg.senderId === senderId ? 'right' : 'left',
                  backgroundColor:
                    msg.senderId === senderId ? '#DCF8C6' : '#FFF',
                  borderRadius: 2,
                  padding: 1,
                  maxWidth: '75%',
                }}
              />
            </ListItem>
          ))}
          <div ref={messagesEndRef} />
        </List>
      </Box>
      <Divider />
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
        <TextField
          variant="outlined"
          placeholder="Type a message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          fullWidth
          sx={{ mr: 2 }}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <Button variant="contained" color="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatRoom;
