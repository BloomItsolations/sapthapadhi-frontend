import React, { useState } from 'react';
import UserList from './UserList';
import ChatWindow from './ChatWindow';
import './newchatpage.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ChatPage = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    let myCurrentPlan = JSON.parse(localStorage.getItem('myplan'));
    const navigate=useNavigate();
    const handleUserClick = (user) => {
        setSelectedUser(user);
    }

    const handleBackClick = () => {
        setSelectedUser(null);
    }

    return (
<>
        {myCurrentPlan?.name !== "Gold Plan" ? (
            <div className='mainboxlocker'>
                <div className="plan-warning-box">
                 <div className="locker-icon">
                    
                     🔒
                 </div>
                 <p>You cannot chat. Please Purchase Gold Plan.</p>
                 <Button
                      color="secondary"
                      variant="contained"
                      size="medium"
                      fullWidth
                      onClick={e =>navigate('/pricing')}
                      sx={{
                        color: 'white',
                        boxShadow: 'none',
                        backgroundColor:'#fb0000f7',
                        textTransform: 'uppercase',
                        borderRadius: 6,
                        '&:hover':{
                            backgroundColor:'#af0707a3'
                        }
                      }}
                    >
                     Upgrade Your Plan
                    </Button>
             </div>
            </div>
         ) :
        <section className="chat-section">
            <div className="chat-container">
                {/* Conditional Box Display for Non-Gold Plans */}
               
                <div className="chat-content">
                    <div className={`content-sidebar flex flex-col ${selectedUser ? "hidden md:block" : ""}`}>
                        <UserList onUserClick={handleUserClick} />
                    </div>
                    <div className={`conversation h-[80vh] ${selectedUser ? "" : "hidden md:block"}`} >
                        <ChatWindow userId={selectedUser} onBackClick={handleBackClick} />
                    </div>
                </div>
            </div>
        </section>
}

</>
    )
}

export default ChatPage;
