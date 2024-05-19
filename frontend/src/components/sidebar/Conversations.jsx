import React from 'react'
import Conversation from './Conversation.jsx';
import useGetConversations from '../../hooks/useGetConversations.js';

const Conversations = () => {
    const { loading, conversations } = useGetConversations();
    return (
        <div className='  w-full overflow-y-scroller overflow-x-hidden  '>
            {
                Array.from(conversations).map(
                    (conversation) => (<Conversation key={conversation._id} conversation={conversation} />)
                )
            }

            {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
        </div>
    )
}

export default Conversations;