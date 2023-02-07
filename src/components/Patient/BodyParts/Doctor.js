import React, { useState } from 'react'
import male from '../../../Images/male.jpg';
import female from '../../../Images/female.png';
import Appointment from '../Modals/Appointment';

const Doctor = ({data}) => {
    const [appointment,setAppointment] = useState(false);
    return (
        <div className='w-full bg-[#5cdb95] grid grid-cols-3 mt-2 border-[1px] border-black'>
            <div className='flex flex-col items-center py-4'>
                <img src={male} className="object-cover w-[128px] h-[128px]" />
                <h1 className='text-xl font-bold'>{data.name}</h1>
            </div>
            <div className='flex flex-col py-4'>
                <h1><span className='font-bold text-red-600'>Education:</span> {data.education}</h1>
                {/* <h1><span className='font-bold text-red-600'>Speciality:</span> Expert Dermatologist, Sexologist & Venereologist</h1> */}
                <h1><span className='font-bold text-red-600'>Current Posting:</span> {data.posting}</h1>
            </div>
            <div className='flex flex-row justify-center items-center'>
                <button onClick={() => setAppointment(!appointment)} className='font-bold px-6 py-2 rounded-md bg-purple-600'>Get Appointment</button>
            </div>
            {appointment && <Appointment modalState={appointment} setModalState={setAppointment} data={data} />}
        </div>
    )
}

export default Doctor