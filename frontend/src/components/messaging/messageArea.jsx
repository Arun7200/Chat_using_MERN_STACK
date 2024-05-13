import React from 'react'
import HeaderTo from './headerTo'
import Message from './message';
import SendMsg from './sendmsg';
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { PiChatsFill } from "react-icons/pi";



const MessageArea = () => {
    const chatSelected = false;
    if (chatSelected) {

        return (
            <div className='flex flex-col ml-9  w-3/5 h-full'>
                <div className=' p-1 flex flex-row items-center justify-center lighter2 rounded-lg'>
                    <HeaderTo />
                </div>
                <div id='messagearea' className='mt-3 flex flex-col h-3/4 overflow-y-auto mr-2'>
                    <Message />
                    <Message />
                    <Message />

                    <Message />
                    <Message />
                    <Message />


                </div>
                <div className=' '>
                    <SendMsg />
                </div>


            </div>

        )
    } else {
        return (
            <>
                <div className='flex flex-col ml-9  w-3/5 h-full items-center justify-center'>
                    <div className='text-4xl flex'>
                        Welcome, <div className='bluish ml-3'>Jon Gandu</div>
                    </div>
                    <div className='text-1xl'>
                        Select a chat to start messaging
                    </div>
                    <div className='text-6xl mt-3 bluish'>
                        <PiChatsFill />

                    </div>

                </div>

            </>
        )
    }

}

export default MessageArea;