import React from 'react'
import Conversation from './Conversation.jsx';
const Conversations = () => {
    return (
        <div className='mt-3 h-full  overflow-y-scroller overflow-x-hidden '>
            {/* <div className='border mt-3  border-b-slate-700 border-transparent '> */}
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />


            {/* <Conversation />
            <Conversation />
            <Conversation />
            <Conversation /> */}


        </div>
    )
}

export default Conversations;