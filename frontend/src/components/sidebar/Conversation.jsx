import React from 'react'

const Conversation = () => {
    return (
        <div className='border  border-b-slate-700 border-transparent hover:bg-slate-800 w-80 flex flex-col items-center justify-center p-2'>
            <div className='flex items-center justify-around '>

                <div className="avatar offline mr-3">
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className='text-lg font-bold'>
                    John Bosdika
                </div>
            </div>
            {/* <div className='divider'></div> */}
        </div>
    )
}

export default Conversation;