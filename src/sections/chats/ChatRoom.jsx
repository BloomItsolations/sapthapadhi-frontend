import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages, sendMessage, addMessage } from '../../store/chatSlice';
import socket from '../../utils/socket';

const ChatRoom = ({ toUser = 76 }) => {
  const dispatch = useDispatch();
  const { messages, status, error } = useSelector(state => state.chat);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    dispatch(fetchMessages(toUser));
    setupSocketListeners();
  }, [dispatch, toUser]);

  const setupSocketListeners = () => {
    socket.on(`/fetchMessages/${toUser}`, message => {
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
      socket.emit('sendMessage', { toUser, message: newMessage });
      setNewMessage('');
    }
  };

  return (
    <div>
      <div>
        {status === 'loading' && <p>Loading messages...</p>}
        {status === 'failed' && <p>{error}</p>}
        <div>
          {messages.map((msg, index) => (
            <div key={index}>
              <p>
                {msg.fromUser}: {msg.message}
              </p>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatRoom;
