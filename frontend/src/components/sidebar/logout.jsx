import React from 'react'
import { TbLogout2 } from "react-icons/tb";

const Logout = () => {
    return (
        <div className=' mt-5 flex items-center w-80 justify-start'>
            <button className='text-3xl'>
                <TbLogout2 />

            </button>

        </div>
    )
}

export default Logout;