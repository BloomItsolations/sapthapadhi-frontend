import React, { useEffect, useRef, useState } from 'react'
import './newchatpage.css'
import { io } from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import { myalldetails, singleUserDetails } from '../../store/userSlice';
import { addMessage, fetchMessages, myMessages, sendMessage } from '../../store/chatSlice';
import { Box, CircularProgress } from '@mui/material';


const socket = io(process.env.REACT_APP_BaseURL, {
    transports: ['websocket']
  });

const ChatWindow = ({ userId, onBackClick }) => {
    console.log("userId",userId)


    /// This is for merging the message
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
    // ending function of merging message

    const dispatch = useDispatch();
    const { singleUser, loading } = useSelector(state => state.user);
    const { authInfo } = useSelector(state => state.auth);
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        socket.on('message', () => {
            setUpdate(!update)
            console.log("new message is comming");
        })
    }, [])

    useEffect(() => {
        socket.on("previousMessages", () => {
            console.log("new Message is comming from previous message");
        }, [])

    })
    useEffect(() => {
        dispatch(singleUserDetails(userId))
    }, [userId])
    useEffect(() => {
        dispatch(myalldetails())
    }, [])
   
    const { messages, status, error } = useSelector(state => state.chat);
    const { mydetails } = useSelector(state => state.user);
    const { myMessage } = useSelector(state => state.chat);
    const [newMessage, setNewMessage] = useState('');
    console.log("messagees", messages);
    console.log("myMessage", myMessage);
    console.log("mydetails", mydetails);
    useEffect(() => {
        dispatch(fetchMessages(userId));
        setupSocketListeners();
    }, [dispatch, userId, update]);

    useEffect(() => {
        dispatch(myMessages(authInfo?.userId));
        setupSocketListeners();
    }, [dispatch, userId, authInfo, update]);

    const setupSocketListeners = () => {
        socket.on(`${process.env.REACT_APP_BaseURL}/app/messages/${userId}`, message => {
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
            socket.emit('fetchMessages', { userId, message: newMessage });
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

    const [mergeMessage, setMergeMessage] = useState([]);

    useEffect(() => {
        const mergeMessage = mergeMessages(myMessage, messages, authInfo?.userId, userId);
        console.log("mergeMessage", mergeMessage)
        setMergeMessage(mergeMessage)
    }, [messages, myMessage, update])
    console.log("Single User",singleUser);

    // if (loading || !singleUser) {
    //     return (
    //         <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
    //             <CircularProgress />
    //         </Box>
    //     );
    // }

    useEffect(() => {
        scrollToBottom();
    }, [mergeMessage]);


    if (!userId ) {
       return  <div className='h-screen text-black font-bold  flex items-center justify-center'>Select a User to chat</div>
    }

    return (

        <>
            <div className="conversation-top">
                <button type="button" className="conversation-back" onClick={onBackClick}>
                    <i className="ri-arrow-left-line" />
                </button>
                <div className="conversation-user">
                    <img
                        className="conversation-user-image"
                        src={singleUser?.userDetails?.profilePhoto ? singleUser?.userDetails?.profilePhoto : "https://murrayglass.com/wp-content/uploads/2020/10/avatar-2048x2048.jpeg"}
                        alt=""
                    />
                    <div>
                        <div className="conversation-user-name">{singleUser?.user?.firstName}</div>
                    </div>
                </div>
                <div className="conversation-buttons">


                    <button type="button">
                        <i className="ri-information-line" />
                    </button>
                </div>
            </div>
            <div className="conversation-main">
                <ul className="conversation-wrapper h-[60vh] overflow-y-scroll">
                   
                    {
                        mergeMessage.map((msg, index) => (
                            msg.messageFrom !== 'me' ? (
                                <li key={index} className="conversation-item me">
                                    <div className="conversation-item-side">
                                        <img
                                            className="conversation-item-image"
                                            src={singleUser?.userDetails?.profilePhoto ? singleUser?.userDetails?.profilePhoto : "https://murrayglass.com/wp-content/uploads/2020/10/avatar-2048x2048.jpeg"}
                                            alt=""
                                        />
                                    </div>
                                    <div className="conversation-item-content">
                                        <div className="conversation-item-wrapper">
                                            <div className="conversation-item-box">
                                                <div className="conversation-item-text">
                                                    <p>
                                                        {msg.message}
                                                    </p>
                                                    <div className="conversation-item-time">12:30</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ) : (
                                <li key={index} className="conversation-item">
                                    <div className="conversation-item-side">
                                        <img
                                            className="conversation-item-image"
                                            src={mydetails?.userDetails?.profilePhoto ? mydetails?.userDetails?.profilePhoto[0].path : "https://murrayglass.com/wp-content/uploads/2020/10/avatar-2048x2048.jpeg" }
                                            alt=""
                                        />
                                    </div>
                                    <div className="conversation-item-content">
                                        <div className="conversation-item-wrapper">
                                            <div className="conversation-item-box">
                                                <div className="conversation-item-text">
                                                    <p>
                                                        {msg.message}
                                                    </p>
                                                    <div className="conversation-item-time">12:30</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        ))
                    }
                   <div ref={messagesEndRef} />
                </ul>
                <div className="conversation-form">
                    <div className="conversation-form-group">
                        <textarea
                            className="conversation-form-input"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSendMessage(e);
                                }
                            }}
                            rows="1"
                            placeholder="Type here..."
                        ></textarea>
                    </div>
                    <button
                        type="button"
                        onClick={(e) => handleSendMessage(e)}
                        className="conversation-form-button conversation-form-submit"
                    >
                        <i className="ri-send-plane-2-line"></i>
                    </button>
                </div>
              
            </div>
        </>


    )
}

export default ChatWindow