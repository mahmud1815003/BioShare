import React from 'react'
import Hospital from './Hospital'
import { useGetHospitalQuery } from '../../redux/Hospital/hospitalApi'

const HospitalHero = () => {
    const {data: hospital, isLoading, isError, error} = useGetHospitalQuery();

    let content;
    console.log(hospital);
    if(hospital && !error){
        content = hospital.map((data, idx) => {
            return <Hospital key={idx} sl={idx+1} name={data.name}
            address={data} />
        })
        console.log(hospital);
    }
    return (
        <div className='w-full h-screen bg-[#5cdb95]'>
            <div className='max-w-[1000px] mx-auto py-6'>
                <div className='grid grid-cols-3 gap-x-4 text-xl font-bold text-center'>
                    <div>SL No.</div>
                    <div>Name</div>
                    <div>Address</div>
                </div>
                {hospital !== undefined ? content : <h1 className='text-4xl font-bold text-center'>No Hospital is Found</h1>}
            </div>
        </div>
    )
}

export default HospitalHero