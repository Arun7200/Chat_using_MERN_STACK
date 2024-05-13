import React from 'react'
import { RiUserSearchFill } from "react-icons/ri";

const Search = () => {
    return (
        <div className='w-80'>
            <form action="" className='flex'>
                <input type="text" placeholder="Search user..." className="input input-bordered w-full max-w-xs" />
                <button type='submit' className='bluish btn border-slate-700 ml-2 text-white'>
                    <RiUserSearchFill />
                </button>

            </form>
        </div>
    )
}

export default Search;