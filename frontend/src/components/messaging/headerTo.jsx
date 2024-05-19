import React from 'react'

const HeaderTo = ({ selectedConversation }) => {
    return (
        <div className='flex flex-row items-center w-full pl-3 h-12 justify-start'>
            <div className='bluish'>To :</div>
            <div className="font-bold ml-2">{selectedConversation.fullName}</div>
        </div>
    )
}


export default HeaderTo;