import React from 'react';
import { Box } from '@mui/material';
import ChatCard from './ChatCard';

const ChatList = () => {
  const chatData = [
    {
      id: 1,
      name: 'ANGELINA',
      captions: 'Hi, How are you',
      unreadCount: 3,
      avatar: '/images/chatusertwo.png',
      link: '1',
    },

    {
      id: 2,
      name: 'shivam anand',
      captions: 'Hi, How are you',
      unreadCount: 3,
      avatar: '/images/chatusertwo.png',
      link: '1',
    },

    {
      id: 1,
      name: 'ANGELINA',
      captions: 'Hi, How are you',
      unreadCount: 3,
      avatar: '/images/chatusertwo.png',
      link: '1',
    },
    {
      id: 2,
      name: 'Jane Smith',
      captions: "Let's catch up tomorrow!",
      unreadCount: 1,
      avatar: '/images/chatusertwo.png',
      link: '2',
    },
    {
      id: 3,
      name: 'Mark Johnson',
      captions: "What's the update on the project?",
      unreadCount: 0,
      avatar: '/images/chatusertwo.png',
      link: '3',
    },
    {
      id: 1,
      name: 'ANGELINA',
      captions: 'Hi, How are you',
      unreadCount: 3,
      avatar: '/images/chatusertwo.png',
      link: '1',
    },
    {
      id: 1,
      name: 'ANGELINA',
      captions: 'Hi, How are you',
      unreadCount: 3,
      avatar: '/images/chatusertwo.png',
      link: '1',
    },
    {
      id: 1,
      name: 'ANGELINA',
      captions: 'Hi, How are you',
      unreadCount: 3,
      avatar: '/images/chatusertwo.png',
      link: '1',
    },
    {
      id: 1,
      name: 'ANGELINA',
      captions: 'Hi, How are you',
      unreadCount: 3,
      avatar: '/images/chatusertwo.png',
      link: '1',
    },
    {
      id: 1,
      name: 'ANGELINA',
      captions: 'Hi, How are you',
      unreadCount: 3,
      avatar: '/images/chatusertwo.png',
      link: '1',
    },
  ];

  return (
    <Box
      sx={{ display: 'felx', flexDirection: 'column', gap: 2, width: '100%' }}
    >
      {chatData?.map(chat => (
        <ChatCard
          to={chat.link}
          name={chat.name}
          image={chat.avatar}
          unreadCount={chat.unreadCount}
          captions={chat.captions}
        />
      ))}
    </Box>
  );
};

export default ChatList;
