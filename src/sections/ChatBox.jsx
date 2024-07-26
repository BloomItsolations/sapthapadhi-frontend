import React, { useState, useEffect, useRef } from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, Button, TextField, List, ListItem, ListItemText, Avatar, Divider, CircularProgress } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import io from 'socket.io-client';
import { singleUserDetails } from '../store/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, fetchMessages, myMessages, sendMessage } from '../store/chatSlice';

const socket = io(process.env.REACT_APP_BaseURL);

const ChatBox = () => {

    //Merge Message,

    const mergeMessages = (myMessages, allMessages, myUserId, userId) => {
        const combinedMessages = [...myMessages, ...allMessages];    
        combinedMessages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
        
        return combinedMessages
            .filter(message => {
                const isMyMessage = message.fromUser == myUserId && message.toUser == userId;
                const isUserMessage = message.fromUser == userId && message.toUser == myUserId;
                return isMyMessage || isUserMessage;
            })
            .map(message => {
                const messageFrom = message.fromUser == myUserId ? 'me' : 'user';
                return {
                    messageFrom,
                    message: message.message,
                    timestamp: message.timestamp, 
                };
            });
    };
    
    const navigate = useNavigate();

    const getUserIdFromUrl = () => {
        const path = window.location.pathname;
        const parts = path.split('/');
        const userId = parseInt(parts[parts.length - 1]);
        return userId;
    };
    const userId = getUserIdFromUrl();

    const dispatch = useDispatch();
    const { singleUser, loading } = useSelector(state => state.user);
    const { authInfo } = useSelector(state => state.auth);
      const [update,setUpdate]=useState(false);
    useEffect(() => {
        dispatch(singleUserDetails(userId))
    }, [userId])

    const { messages, status, error } = useSelector(state => state.chat);
    const { myMessage } = useSelector(state => state.chat);
    const [newMessage, setNewMessage] = useState('');
    console.log("messagees", messages);
    console.log("myMessage", myMessage);
    useEffect(() => {
        dispatch(fetchMessages(userId));
        setupSocketListeners();
    }, [dispatch, userId,update]);

    useEffect(() => {
        dispatch(myMessages(authInfo?.userId));
        setupSocketListeners();
    }, [dispatch, userId, authInfo,update]);

    const setupSocketListeners = () => {
        socket.on(`/app/messages/${userId}`, message => {
            console.log(message);
            dispatch(addMessage(message));
        });

        socket.on('error', error => {
            console.error('Socket error:', error);
        });
    };

    const handleSendMessage = async e => {
        e.preventDefault();
        if (newMessage.trim()) {
            socket.emit('sendMessage', { userId, message: newMessage });
            dispatch(sendMessage({ toUser: userId, message: newMessage }))
            setNewMessage('');
            scrollToBottom();
            setUpdate(!update)
        }
    };

    const [message, setMessage] = useState('');
    const [allmessage, setMessages] = useState([]);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        scrollToBottom();
    }, [allmessage]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleBack = () => {
        navigate('/app/chat');
    };

    const [mergeMessage, setMergeMessage] = useState([]);

    useEffect(() => {
        const mergeMessage = mergeMessages(myMessage, messages, authInfo?.userId, userId);
        console.log("mergeMessage",mergeMessage)
        setMergeMessage(mergeMessage)
    }, [messages, myMessage,update])

    console.log("MergeMessage", mergeMessage);

    if (loading || !singleUser) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box sx={{ width: '100%', height: { xs: 'calc(100vh - 56px)', sm: '80vh' }, display: 'flex', flexDirection: 'column', overflowY: 'scroll' }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleBack} aria-label="back">
                        <ArrowBackIcon />
                    </IconButton>
                    <Avatar alt={singleUser?.user?.firstName} src={singleUser?.userDetails?.profilePhoto} sx={{ ml: 2 }} />
                    <Box sx={{ ml: 2 }}>
                        <Typography variant="h6">
                            {singleUser?.user?.firstName}
                        </Typography>
                        {/* <Typography variant="body2" color="textSecondary">
                            {user.status === 'online' ? 'Online' : 'Offline'}
                        </Typography> */}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
                <List>
                    {mergeMessage.map((msg, index) => (
                        <ListItem key={index} sx={{ justifyContent: msg.messageFrom === 'me' ? 'flex-end' : 'flex-start' }}>
                            <ListItemText
                                primary={msg.message}
                                sx={{
                                    textAlign: msg.messageFrom === 'me' ? 'right' : 'left',
                                    backgroundColor: msg.messageFrom === 'me' ? '#DCF8C6' : '#FFF',
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
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    fullWidth
                    sx={{ mr: 2 }}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleSendMessage(e);
                        }
                    }}
                />
                <Button variant="contained" color="primary" onClick={(e) => handleSendMessage(e)}>
                    Send
                </Button>
            </Box>
        </Box>
    );
};

export default ChatBox;
