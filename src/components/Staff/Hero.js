import React from 'react'
import Body from './Body';

const Hero = () => {
    let doctorData;
    return (
        <>
            <div className='w-full h-screen bg-[#5cdb95] grid grid-cols-12'>
                <div className='col-start-1 col-span-3 flex flex-row justify-center items-start pt-32 border-r-[1px] border-black'>
                    <div className='text-center text-xl'>
                        <h1 className='text-4xl text-red-600 font-bold border-red-600 mb-8 border-b-2'>Staff's Profile</h1>
                        <h1>Name: {doctorData?.doctor?.name}</h1>
                        <h1>Email: {doctorData?.doctor?.email}</h1>
                        <h1>Mobile: {doctorData?.doctor?.mobile}</h1>
                        <h1>Posting: {doctorData?.doctor?.posting}</h1>
                    </div>
                </div>
                <div className='col-end-[-1] col-span-9'>
                    <Body />
                </div>
            </div>
        </>
    )
}

export default Hero