import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, CircularProgress, TextField, List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography, Divider } from '@mui/material';
import { myfriendlist } from '../../store/userSlice';
import { styled } from '@mui/system';

const CustomScrollbarBox = styled(Box)(({ theme }) => ({
    height: '68vh',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        width: '3px',
    },
    '&::-webkit-scrollbar-track': {
        background: '#f1f1f1',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#888',
        borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
        background: '#555',
    },
    [theme.breakpoints.up(760)]: {
        height: '60vh',
        '&::-webkit-scrollbar': {
            width: '8px',
        },
    },
}));


const UserList = ({ onUserClick }) => {
    const { friendList, loading } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(myfriendlist());
    }, [dispatch]);

    if(loading || !friendList) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Typography variant="h6" component="div" sx={{ p: 2 }}>
                Chats
            </Typography>
            <Box sx={{ px: 2, pb: 2 }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Search..."
                    InputProps={{
                        style: { borderRadius: 30 },
                    }}
                />
            </Box>
            <Divider />
            <CustomScrollbarBox>
                <Typography variant="subtitle2" component="div" sx={{ px: 2, py: 1 }}>
                    Recently
                </Typography>
                <List>
                    {friendList?.map((user) => (
                        <ListItem
                            button
                            key={user.id}
                            onClick={() => onUserClick(user.id)}
                            sx={{ py: 1.5, px: 2 }}
                        >
                            <ListItemAvatar>
                                <Avatar
                                    src={
                                        user.profilePhoto
                                            ? typeof user.profilePhoto === 'string'
                                                ? user.profilePhoto
                                                : `${process.env.REACT_APP_IMASE_BASE_URL}/${user.profilePhoto.path}`
                                            : 'https://murrayglass.com/wp-content/uploads/2020/10/avatar-2048x2048.jpeg'
                                    }
                                    alt="User Profile"
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary={<Typography variant="body1">{user.firstName}</Typography>}
                                secondary={<Typography variant="body2" sx={{fontSize:'10px'}} color="textSecondary">check new message...</Typography>}
                            />
                            {/* <Typography variant="caption" color="textSecondary">12:30</Typography> */}
                        </ListItem>
                    ))}
                   
                </List>
            </CustomScrollbarBox>
        </Box>
    );
};

export default UserList;
