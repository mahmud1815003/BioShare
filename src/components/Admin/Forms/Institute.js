import React, { useEffect, useState } from 'react'
import { useAddInstituteMutation } from '../../../redux/Instittute/instituteApi'
const Institute = () => {
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [name, setName] = useState('')
    const [shortName, setShortName] = useState('')
    const [address, setAddress] = useState('')
    const [domains, setDomain] = useState('')
    const [addInstitute, { data: responseData, isLoading, isError, error, isSuccess }] = useAddInstituteMutation();
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
        addInstitute({
            email,
            mobile,
            name,
            shortName,
            address,
            domains,
        });
    }
    const clearForm = () => {
        setEmail("");
        setMobile("");
        setDomain("");
        setAddress("");
        setShortName("");
        setName("");
    }
    return (
        <div className='bg-[#150050] w-[650px] mx-auto py-6 mt-6'>
            <form className='flex flex-col items-center mx-auto px-6 py-4 rounded-md bg-[#150050]' onSubmit={handleSubmit}>
                <h1 className='py-4 text-4xl font-bold bg-[#150050] text-white'>Affiliate a Institue</h1>
                <div className='my-2 flex flex-col bg-[#150050]'>
                    <div className='bg-[#150050]'>
                        <input className='w-[350px] border-b-2 bg-[#150050] border-white px-2 py-1 text-white' name='email' type='text' placeholder='Registrar Email (Required)' value={email} onChange={(e) => setEmail(e.target.value)} />
                        {error?.data?.email && <p className='bg-[#150050] text-red-600 w-full '>{error?.data?.email?.msg}</p>}
                    </div>
                    <div className='bg-[#150050]'>
                        <input className='w-[350px] border-b-2 bg-[#150050] border-white px-2 py-1 mt-8 text-white' type='text' placeholder='Institute Name (Required)' value={name} onChange={(e) => setName(e.target.value)} />
                        {error?.data?.name && <p className='bg-[#150050] text-red-600 w-full '>{error?.data?.name?.msg}</p>}
                    </div>
                    <div className='bg-[#150050]'>
                        <input className='w-[350px] border-b-2 bg-[#150050] border-white px-2 py-1 mt-8 text-white' name='time' type='text' placeholder='Mobile/Phone (Required)' value={mobile} onChange={(e) => setMobile(e.target.value)} />
                        {error?.data?.mobile && <p className='bg-[#150050] text-red-600 w-full '>{error?.data?.mobile?.msg}</p>}
                    </div>
                    <div className='bg-[#150050]'>
                        <input className='w-[350px] border-b-2 bg-[#150050] border-white px-2 py-1 mt-8 text-white' name='time' type='text' placeholder='Short Form of Institute (Required)' value={shortName} onChange={(e) => setShortName(e.target.value)} />
                        {error?.data?.shortName && <p className='bg-[#150050] text-red-600 w-full '>{error?.data?.shortName?.msg}</p>}
                    </div>
                    <div className='bg-[#150050]'>
                        <input className='w-[350px] border-b-2 bg-[#150050] border-white px-2 py-1 mt-8 text-white' name='time' type='text' placeholder='Address (Required)' value={address} onChange={(e) => setAddress(e.target.value)} />
                        {error?.data?.address && <p className='bg-[#150050] text-red-600 w-full '>{error?.data?.address?.msg}</p>}
                    </div>
                    <div className='bg-[#150050]'>
                        <textarea className='w-[350px] border-b-2 bg-[#150050] border-white px-2 py-8 mt-8 text-white' placeholder='Enter the Email Domains of the Institute (Required). Ex: @stud.kuet.ac.bd, @bme.kuet.ac.bd, @cse.kuet.ac.bd' value={domains} onChange={(e) => setDomain(e.target.value)}></textarea>
                        {error?.data?.domains && <p className='bg-[#150050] text-red-600 w-full '>{error?.data?.domains?.msg}</p>}
                    </div>
                </div>
                <button className='max-w-[250px] bg-[#FB2576] text-white px-4 py-2 rounded-md my-2' type='submit'>Confirm</button>
                <button className='max-w-[250px] bg-[#FB2576] text-white px-4 py-2 rounded-md my-2' type='button'>Delete</button>
                {responseData?.message && <p className='bg-[#150050] text-white'>{responseData.message}</p>}
                {error?.data && <p className='bg-[#150050] text-red-600'>{error?.data?.errors}</p>}
            </form>
        </div>
    )
}

export default Institute