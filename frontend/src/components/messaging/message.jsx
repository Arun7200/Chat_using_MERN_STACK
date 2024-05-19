import React from 'react'
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';

const Message = ({ msg }) => {
    const { authUser } = useAuthContext();
    const fromUser = msg.senderId === authUser._id;
    const { selectedConversation } = useConversation();



    return (
        <div>
            <div className={` w-full chat ${fromUser ? 'chat-end' : 'chat-start'} ${msg.shouldShake ? "shake" : ''}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component" src={!fromUser ? selectedConversation.profilePic : authUser.profilePic}></img>
                    </div>
                </div>
                <div className={`chat-bubble overflow-x-hidden ${fromUser ? 'cbluish' : ''}`}>{msg.message}</div>
            </div>

        </div >
    )
}

export default Message;