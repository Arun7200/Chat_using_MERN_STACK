import React, { useEffect, useRef } from 'react'
import HeaderTo from './headerTo'
import Message from './message';
import SendMsg from './sendmsg';
import { PiChatsFill } from "react-icons/pi";
import { AiFillWechat } from "react-icons/ai";

import useConversation from '../../zustand/useConversation';
import useGetMessages from '../../hooks/useGetMessages';
import { useAuthContext } from '../../context/AuthContext';
import useListenMessages from '../../hooks/useListenMessages';



const MessageArea = () => {
    const { authUser } = useAuthContext();
    const { selectedConversation, setSelectedConversation } = useConversation();

    useListenMessages()

    useEffect(() => {
        setSelectedConversation(null);
    }, [setSelectedConversation])

    const lasMsg = useRef();

    const { messages, loading } = useGetMessages();
    useEffect(() => {
        setTimeout(() => {
            lasMsg.current?.scrollIntoView({ behavior: "smooth" })

        }, 50);
    }, [messages])

    if (selectedConversation && messages.length > 0) {
        return (
            <div className=' relative flex flex-col w-full h-full justify-center items-center '>
                <div className='absolute top-1 w-full p-1 flex flex-row items-center justify-center lighter2 rounded-lg'>
                    <HeaderTo selectedConversation={selectedConversation} />
                </div>
                <div id='messagearea' className='flex flex-col w-full  overflow-y-scroll p-4  h-2/3'>
                    {
                        Array.from(messages).map((msg, idx) => {
                            return <div ref={lasMsg} key={msg._id}><Message msg={msg} /></div>
                        })
                    }
                </div>
                <div className='w-full absolute bottom-4 '>
                    <SendMsg />
                </div>


            </div>

        )
    }
    else if (selectedConversation && messages.length === 0) {
        return (
            <>
                <div className='relative flex flex-col w-full h-full items-center justify-center'>
                    <div className=' w-full absolute top-1 p-1 flex flex-row items-center justify-center lighter2 rounded-lg'>
                        <HeaderTo selectedConversation={selectedConversation} />
                    </div>
                    <div className='text-6xl mt-3 bluish'>
                        <AiFillWechat />
                    </div>
                    <div className='text-1xl flex'>
                        <div className='text-white ml-3'>Send message to start a chat with {selectedConversation.fullName}</div>
                    </div>
                    <div className=' w-full absolute bottom-4'>
                        <SendMsg />
                    </div>


                </div>

            </>
        )


    }
    else {
        return (
            <>
                <div className='flex flex-col w-full h-full items-center justify-center'>
                    <div className='text-4xl flex'>
                        Welcome, <div className='bluish ml-3'>{authUser.fullName}</div>
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