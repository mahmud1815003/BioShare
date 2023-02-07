import React from 'react'
import Hospital from './Hospital'
import {useGetInstitutesQuery} from '../../redux/Instittute/instituteApi';

const InstituteHero = () => {
    const {data: uni, isLoading, isError, error} = useGetInstitutesQuery();

    let content;
    if(uni && !error){
        content = uni.map((data, idx) => {
            return <Hospital sl={idx+1} name={data.name}
            address={data} />
        })
    }
    return (
        <>
            <div className='w-full h-screen bg-[#5cdb95]'>
                <div className='max-w-[1000px] mx-auto py-6'>
                    <div className='grid grid-cols-3 gap-x-4 text-xl font-bold text-center'>
                        <div>SL No.</div>
                        <div>Name</div>
                        <div>Address</div>
                    </div>
                    {uni !== undefined ? content : <h1 className='text-4xl font-bold text-center'>No Affiliated Institue is Found</h1>}
                </div>
            </div>
        </>
    )
}

export default InstituteHero