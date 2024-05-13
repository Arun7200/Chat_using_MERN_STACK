import React from 'react'
import Sidebar from '../../components/sidebar/sidebar.jsx';
import MessageArea from '../../components/messaging/messageArea.jsx';
import Logout from '../../components/sidebar/logout.jsx';
import './messages.css';

const Home = () => {
    return (
        <div className='border border-gray-700  flex flex-row items-center justify-center w-10/12 p-8 lighter h-3/5'>
            <div className='w-20  flex justify-center items-center bluish' >
                <Logout />
            </div>
            <Sidebar />
            <MessageArea />

        </div>

    )
}

export default Home;