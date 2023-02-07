import React, { useState } from 'react'
import { useGetPatientDataQuery, useGetPatientsDoctorsQuery } from '../../redux/Patient/patientApi';
import Body from './Body';
import Profile from './Modals/Profile'

const Hero = () => {
    const [patientModal, setPatientModal] = useState(0);
    const {data: patientData, error: patientError} = useGetPatientDataQuery();
    const {data: doctors, error: doctorsError} = useGetPatientsDoctorsQuery();
    // console.log(patientData);
    return (
        <>
            <div className='w-full h-screen bg-[#5cdb95] grid grid-cols-12'>
                <div className='col-start-1 col-span-3 flex flex-row justify-center items-start pt-32 border-r-[1px] border-black'>
                    <div className='text-center text-xl'>
                        <h1 className='text-4xl text-red-600 font-bold border-red-600 mb-8 border-b-2'>Patient's Details</h1>
                        <h1>Name: {patientData?.patient?.name}</h1>
                        <h1>Email: {patientData?.patient?.email}</h1>
                        <h1>Mobile: {patientData?.patient?.mobile}</h1>
                        {/* <h1>Height: 5' 2''</h1>
                        <h1>Weight: 51 kg</h1>
                        <button className='px-6 py-2 rounded-md bg-purple-600 mt-4' onClick={() => setPatientModal(patientModal^1)}>Edit</button> */}
                    </div>
                </div>
                <div className='col-end-[-1] col-span-9'>
                    <Body />
                </div>
            </div>
            {patientModal == 1 && <Profile modalState={patientModal} setModalState={setPatientModal} />}
        </>
    )
}

export default Hero