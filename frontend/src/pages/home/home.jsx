import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar/sidebar.jsx';
import MessageArea from '../../components/messaging/messageArea.jsx';
import Logout from '../../components/sidebar/logout.jsx';
import './messages.css';
import useConversation from '../../zustand/useConversation';


const Home = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    const [width, setwidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', () => {
            setwidth(window.innerWidth);
        }
        )
    })


    if (width > 863) {

        return (
            <div className='border border-gray-700  flex flex-row items-center justify-center w-11/12 p lighter h-[90vh] '>
                <div className="w-full h-full flex">

                    <div className=' w-1/12  flex justify-center items-center bluish  ' >
                        <Logout />
                    </div>
                    <div className='  grow h-full w-3/12'>

                        <Sidebar />
                    </div>
                    <div className='  grow  w-8/12 h-full p-10'>
                        <MessageArea />
                    </div>
                </div>

            </div>
        )
    }
    else {
        return (
            <div className='border border-gray-700  flex flex-col items-center justify-center w-10/12 p lighter h-3/5 '>
                <div className='mt-10 absolute bottom-4 text-cyan-100'>
                    <Logout />
                </div>
                <div className="relative w-full h-full flex flex-col items-center justify-center">


                    <div className='grow  w-full h-full p-10'>
                        <MessageArea />
                    </div>
                    <div className='fixed top-10   grow  w-2/4 m-auto flex items-center justify-center'>
                        <div className="drawer drawer-end">
                            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor="my-drawer-4" className="drawer-button btn bg-cyan-350 border-cyan-100 w-full">Users</label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                    <Sidebar />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }

}
export default Home;