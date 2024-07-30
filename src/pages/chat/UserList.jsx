import React, { useEffect } from 'react'
import './newchatpage.css'
import { useDispatch, useSelector } from 'react-redux';
import { Box, CircularProgress } from '@mui/material';
import { acceptedUser, myfriendlist } from '../../store/userSlice';

const UserList = ({ onUserClick }) => {

    const { accepteReqUserList, friendList, loading } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(acceptedUser());
        dispatch(myfriendlist());
    }, []);

    console.log("FriendList", friendList);

    if (loading || !accepteReqUserList || !friendList) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        );
    }
    return (

        <>
            <div className="content-sidebar-title">Chats</div>
            <form className="content-sidebar-form">
                <input
                    type="search"
                    className="content-sidebar-input"
                    placeholder="Search..."
                />

            </form>
            <div className="content-messages h-[80vh] overflow-y-scroll">
                <ul className="content-messages-list">
                    <li className="content-message-title">
                        <span>Recently</span>
                    </li>

                    {
                        friendList?.map((user) => (
                            <li >
                                <button type='button' onClick={() => onUserClick(user?.id)}>
                                    <img
                                        className="content-message-image"
                                        src={
                                            user?.profilePhoto
                                                ? typeof user.profilePhoto === 'string'
                                                    ? user.profilePhoto
                                                    : `${process.env.REACT_APP_BaseURL}/${user.profilePhoto.path}`
                                                : 'https://murrayglass.com/wp-content/uploads/2020/10/avatar-2048x2048.jpeg'
                                        }
                                        alt="User Profile"
                                    />
                                    <span className="content-message-info">
                                        <span className="content-message-name">{user?.firstName}</span>
                                        <span className="content-message-text">
                                            check new message......
                                        </span>
                                    </span>
                                    <span className="content-message-more">
                                        <span className="content-message-time">12:30</span>
                                    </span>
                                </button>
                            </li>
                        ))
                    }
                </ul>

            </div>
        </>

    )
}

export default UserList