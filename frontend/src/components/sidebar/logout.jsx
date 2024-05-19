import React from 'react'
import { TbLogout2 } from "react-icons/tb";
import uselogout from '../../hooks/useLogout';

const Logout = () => {
    const { loading, logout } = uselogout();
    return (
        <div className=' mt-5 flex items-center p-4 justify-start'>
            <button className='text-3xl' onClick={logout} >
                <TbLogout2 />

            </button>

        </div>
    )
}

export default Logout;