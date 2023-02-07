import React, { useState } from 'react'
import { useGetDocInfoQuery } from '../../redux/Doctor/DoctorApi'
import Body from './Body'
import Appointment from './Modals/AppointmentModal';

const Hero = () => {
    const { data: doctorData, error: doctorError } = useGetDocInfoQuery();
    const [modalState, setModalState] = useState(false);
    console.log(doctorData);
    return (
        <>
            <div className='w-full h-screen bg-[#5cdb95] grid grid-cols-12 relative'>
                <div className='col-start-1 col-span-3 flex flex-row justify-center items-start pt-32 border-r-[1px] border-black'>
                    <div className='text-center text-xl'>
                        <h1 className='text-4xl text-red-600 font-bold border-red-600 mb-8 border-b-2'>Doctor's Profile</h1>
                        <h1>{doctorData?.doctor?.name}</h1>
                        <h1>Email: {doctorData?.doctor?.email}</h1>
                        <h1>Mobile: {doctorData?.doctor?.mobile}</h1>
                        <h1>Posting: {doctorData?.doctor?.posting}</h1>
                        <div className='flex flex-row space-x-2 pt-2 items-center'>
                            <h1>Visiting Days: </h1>
                            {doctorData?.doctor?.appointmentDays?.map(day => {
                                return <h1 className='border-2 border-gray-500 rounded-md p-1'>{day}</h1>
                            })}
                        </div>
                        <button className='max-w-[250px] bg-black text-white px-4 py-2 rounded-md my-2' onClick={() => setModalState(true)}>Update</button>
                    </div>
                </div>
                <div className='col-end-[-1] col-span-9'>
                    <Body />
                </div>
                {modalState && <Appointment modalState={modalState} setModalState={setModalState} doctor={doctorData?.doctor} />}
            </div>
        </>
    )
}

export default Hero