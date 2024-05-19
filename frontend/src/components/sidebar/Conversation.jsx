import React from 'react'
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({ conversation }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    const isSelected = selectedConversation ? selectedConversation._id === conversation._id : false;

    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);


    return (
        <div className={`border-b border-b-slate-700 hover:cursor-pointer   hover:bg-gray-600 hover:text-cyan-200 w-full flex flex-row items-center justify-center p-2 ${isSelected ? 'bg-gray-600 text-cyan-200' : ""}`} >
            <div className=' flex items-center justify-start w-full' onClick={() => { setSelectedConversation(conversation) }}>

                <div className={`avatar ${isOnline ? 'online' : 'offline'} m-2 mr-8`}>
                    <div className="w-12 rounded-full">
                        <img src={conversation.profilePic} alt='' />
                    </div>
                </div>
                <div className='text-lg font-bold'>
                    {conversation.fullName}
                </div>
            </div>
        </div>
    )
}

export default Conversation;