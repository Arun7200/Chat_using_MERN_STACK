import React from 'react'
import { RiUserSearchFill } from "react-icons/ri";
import { useState } from "react";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const Search = () => {
    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetConversations();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        if (search.length < 3) {
            return toast.error("Search term must be at least 3 characters long");
        }

        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

        if (conversation) {
            setSelectedConversation(conversation);
            setSearch("");
        } else toast.error("No such user found!");
    };
    return (
        <div className=' flex w-full'>
            <form className='flex w-full ' onSubmit={handleSubmit}>
                <div className='grow'>
                    <input type="text" placeholder="Search user..." className="input input-bordered w-full " value={search} onChange={(e) => { setSearch(e.target.value) }} />

                </div>
                <div className='grow-0'>
                    <button type='submit' className='border-none bluish text-2xl btn border-slate-700 ml-2 text-white'>
                        <RiUserSearchFill />
                    </button>

                </div>
            </form>
        </div>

    )
}

export default Search;