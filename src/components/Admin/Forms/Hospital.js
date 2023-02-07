import React, { useState, useEffect } from 'react'
import { useAddHospitalMutation } from '../../../redux/Hospital/hospitalApi'

const Hospital = () => {
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('');
    
    const [addHospital, { data: responseData, isLoading, isError, error, isSuccess }] = useAddHospitalMutation();
    
    useEffect(() => {
        console.log(error);
        console.log(responseData);
        if (!error && responseData){
            console.log("HELlo");
            clearForm();
        }
    }, [responseData, error]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addHospital({
            email,
            mobile,
            name,
            address,
            password,
        });
    }

    const clearForm = () => {
        setEmail("");
        setMobile("");
        setAddress("");
        setName("");
        setPassword("");
    }
    
    return (
        <div className='bg-[#150050] w-[650px] mx-auto py-6 mt-6'>
            <form onSubmit={handleSubmit} className='flex flex-col items-center mx-auto px-6 py-4 rounded-md bg-[#150050]'>
                <h1 className='py-4 text-4xl font-bold bg-[#150050] text-white'>Add a Hospital</h1>
                <div className='my-2 flex flex-col bg-[#150050]'>
                    <div className='bg-[#150050]'>
                        <input className='w-[350px] border-b-2 bg-[#150050] border-white px-2 py-1 text-white' name='email' type='text' placeholder='Hospital Email (Required)' value={email} onChange={(e) => setEmail(e.target.value)} />
                        {error?.data?.email && <p className='bg-[#150050] text-red-600 w-full '>{error?.data?.email?.msg}</p>}
                    </div>
                    <div className='bg-[#150050]'>
                        <input className='w-[350px] border-b-2 bg-[#150050] border-white px-2 py-1 mt-8 text-white' type='text' placeholder='Hospital Name (Required)' value={name} onChange={(e) => setName(e.target.value)} />
                        {error?.data?.name && <p className='bg-[#150050] text-red-600 w-full '>{error?.data?.name?.msg}</p>}
                    </div>
                    <div className='bg-[#150050]'>
                        <input className='w-[350px] border-b-2 bg-[#150050] border-white px-2 py-1 mt-8 text-white' name='time' type='text' placeholder='Mobile/Phone (Required)' value={mobile} onChange={(e) => setMobile(e.target.value)} />
                        {error?.data?.mobile && <p className='bg-[#150050] text-red-600 w-full '>{error?.data?.mobile?.msg}</p>}
                    </div>
                    <div className='bg-[#150050]'>
                        <input className='w-[350px] border-b-2 bg-[#150050] border-white px-2 py-1 mt-8 text-white' name='time' type='text' placeholder='Address (Required)' value={address} onChange={(e) => setAddress(e.target.value)} />
                        {error?.data?.address && <p className='bg-[#150050] text-red-600 w-full '>{error?.data?.address?.msg}</p>}
                    </div>
                    <div className='bg-[#150050]'>
                        <input className='w-[350px] border-b-2 bg-[#150050] border-white px-2 py-1 mt-8 text-white' name='time' type='password' placeholder='Password (Required)' value={password} onChange={(e) => setPassword(e.target.value)} />
                        {error?.data?.password && <p className='bg-[#150050] text-red-600 w-full '>{error?.data?.password?.msg}</p>}
                    </div>
                </div>
                <button className='max-w-[250px] bg-[#FB2576] text-white px-4 py-2 rounded-md my-2' type='submit'>Confirm</button>
                {/* <button className='max-w-[250px] bg-[#FB2576] text-white px-4 py-2 rounded-md my-2' type='submit'>Delete</button> */}
                {responseData?.message && <p className='bg-[#150050] text-white'>{responseData.message}</p>}
                {error?.data && <p className='bg-[#150050] text-red-600'>{error?.data?.errors}</p>}
            </form>
        </div>
    )
}

export default Hospital