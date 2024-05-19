import React from 'react'
import Search from './search.jsx'
import Conversations from './Conversations.jsx'
import Logout from './logout.jsx'

const Sidebar = () => {
    return (
        <div className=' h-full w-full flex flex-col items-center justify-start pt-10'>
            < div className='w-full h-1/6' >
                <Search />

            </div >
            <div className='  w-full h-5/6 overflow-auto'>
                <Conversations />

            </div>

        </div >
    )
}

export default Sidebar;