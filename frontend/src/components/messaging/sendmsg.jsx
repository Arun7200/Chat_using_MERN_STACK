import React from 'react'
import { VscSend } from "react-icons/vsc";

const SendMsg = () => {
    return (
        <div>
            <input type="text" placeholder="Type you message..." className="input input-bordered w-11/12 " />
            <button className='btn btn-square ml-2 bluish font-bold'>
                <VscSend />
            </button>
        </div >
    )
}

export default SendMsg;