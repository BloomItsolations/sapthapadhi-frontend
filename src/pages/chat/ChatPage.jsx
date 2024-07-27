import React, { useState } from 'react'
import UserList from './UserList';
import ChatWindow from './ChatWindow';
import './newchatpage.css'

const ChatPage = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const handleUserClick = (user) => {
        setSelectedUser(user);
        console.log("testing debug",user)
    }

    const handleBackClick = () => {
        setSelectedUser(null);
    }
    return (
        <section className="chat-section">
            <div className="chat-container">

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
    )
}

export default ChatPage