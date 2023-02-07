import React from 'react'
import { useSelector } from 'react-redux'
import { useGetHospitalInfoQuery } from '../../redux/HospitalAdmi/hospitalAdminApi';
import Body from './Body'

const Hero = () => {
    const hospitalEmail = useSelector(state => state?.login?.user?.email);
    const {data, isError} = useGetHospitalInfoQuery(hospitalEmail);
    // console.log(hospital);
    return (
        <>
            <div className='w-full h-screen bg-[#5cdb95] grid grid-cols-12'>
                <div className='col-start-1 col-span-3 flex flex-row justify-center items-start pt-32 border-r-[1px] border-black'>
                    <div className='text-center text-xl'>
                        <h1 className='text-4xl text-red-600 font-bold border-red-600 mb-8 border-b-2'>Hospital Details</h1>
                        <h1 className='text-2xl pb-4 font-bold'>{data?.hospital?.name}</h1>
                        <h1>Email: {data?.hospital?.email}</h1>
                        <h1>Mobile: {data?.hospital?.mobile}</h1>
                        <h1>Address: {data?.hospital?.address}</h1>
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