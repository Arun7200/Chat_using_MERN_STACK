import React, { useState } from 'react'
import { VscSend } from "react-icons/vsc";
import useSendMessage from '../../hooks/useSendMessage';

const SendMsg = () => {
    const [message, setMessage] = useState('');
    const { loading, sendMessage } = useSendMessage();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;
        await sendMessage(message);
        setMessage("");

    }
    return (
        <div className='flex w-full'>
            <form onSubmit={handleSubmit} className='flex w-full' >
                <div className='grow'>
                    <input className="input input-bordered w-full  " type="text" placeholder="Type you message..." autoFocus value={message} onChange={(e) => setMessage(e.target.value)} />

                </div>
                <div className='grow-0'>
                    <button className='btn  btn-square ml-2 bluish font-bold' type='submit' >
                        <VscSend />
                    </button>

                </div>

            </form>
        </div >
    )
}

export default SendMsg;