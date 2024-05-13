import React from 'react'
import Search from './search.jsx'
import Conversations from './Conversations.jsx'
import Logout from './logout.jsx'

const Sidebar = () => {
    return (
        <div className='h-full'>
            <div>
                <Search />

            </div>
            <div className='h-5/6'>
                <Conversations />

            </div>

        </div>
    )
}

export default Sidebar;