import React from 'react'

const Appointment = () => {
    return (
        <div className='w-[750px] grid grid-cols-3 mx-auto mt-4'>
            <div className='border-black border-[1px] p-2'>
                <h1 className='text-lg font-bold'>Doctor's Name:</h1>
                <h1>None</h1>
            </div>
            <div className='border-black border-[1px] p-2'>
                <h1 className='text-lg font-bold'>Hospital:</h1>
                <h1>None</h1>
            </div>
            <div className='border-black border-[1px] p-2'>
                <h1 className='text-lg font-bold'>Time:</h1>
                <h1>None</h1>
            </div>
        </div>
    )
}

export default Appointment