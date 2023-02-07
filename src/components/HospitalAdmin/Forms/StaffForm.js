import React, { useState, useEffect } from 'react'
import { useGetHospitalQuery } from '../../../redux/Hospital/hospitalApi'
import { useAddStaffMutation } from '../../../redux/HospitalAdmi/hospitalAdminApi';
const StaffForm = () => {

    const { data: hospital, isLoading, isError, error: Error } = useGetHospitalQuery();

    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('');
    const [education, setEducation] = useState('');
    const [designation, setDesignation] = useState('');
    const [posting, setSetposting] = useState('----select----');

    const [addDoctor, { data: responseData, error, isSuccess }] = useAddStaffMutation();

    useEffect(() => {
        console.log(error);
        console.log(responseData);
        if (!error && responseData) {
            console.log("HELlo");
            clearForm();
        }
    }, [responseData, error]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addDoctor({
            email,
            mobile,
            name,
            password,
            education,
            designation,
            posting
        });
    }

    const clearForm = () => {
        setEmail("");
        setMobile("");
        setName("");
        setPassword("");
        setDesignation("");
        setEducation("");
        setSetposting('----select----');
    }

    let content;
    if (hospital && !error) {
        content = hospital.map((data, idx) => {
            return <option className='bg-[#150050] text-white' value={`${data.name}`}>{data.name}</option>
        })
    }
    return (
        <div className='bg-[#150050] w-[650px] mx-auto py-6 mt-6'>
            <form onSubmit={handleSubmit} className='flex flex-col items-center mx-auto px-6 py-4 rounded-md bg-[#150050]'>
                <h1 className='py-4 text-4xl font-bold bg-[#150050] text-white'>Add/Update a Staff</h1>
                <div className='my-2 flex flex-col bg-[#150050]'>
                    <div className='bg-[#150050]'>
                        <input className='text-white w-[350px] border-b-2 bg-[#150050] border-white px-2 py-1' name='email' type='text' placeholder='Email (Required)' value={email} onChange={(e) => setEmail(e.target.value)} />
                        {error?.data?.email && <p className='bg-[#150050] text-red-600 w-full '>{error?.data?.email?.msg}</p>}
                    </div>
                    <div className='bg-[#150050]'>

                        <input className='text-white w-[350px] border-b-2 bg-[#150050] border-white px-2 py-1 mt-2' type='text' placeholder='Name (Required)' value={name} onChange={(e) => setName(e.target.value)} />
                        {error?.data?.name && <p className='bg-[#150050] text-red-600 w-full '>{error?.data?.name?.msg}</p>}
                    </div>
                    <div className='bg-[#150050]'>
                        <input className='text-white w-[350px] border-b-2 bg-[#150050] border-white px-2 py-1 mt-2' name='time' type='text' placeholder='Mobile' value={mobile} onChange={(e) => setMobile(e.target.value)} />
                        {error?.data?.mobile && <p className='bg-[#150050] text-red-600 w-full '>{error?.data?.mobile?.msg}</p>}
                    </div>
                    <div className='my-2 flex flex-col bg-[#150050] text-white'>
                        <label className="bg-[#150050] text-md font-bold py-1 px-2">Select Hospital</label>
                        <select onChange={(e) => setSetposting(e.target.value)} value={posting} className='bg-[#150050] max-w-[250px] text-center text-lg rounded-md border-2 border-black' name="types">
                            <option className='bg-[#150050] text-white' selected value="none">----select----</option>
                            {hospital != undefined ? content : null}
                        </select>
                    </div>
                    <div className='bg-[#150050]'>
                        <input className='text-white w-[350px] border-b-2 bg-[#150050] border-white px-2 py-1 mt-2' name='time' type='text' placeholder='Designation (Required)' value={designation} onChange={(e) => setDesignation(e.target.value)} />
                        {error?.data?.designation && <p className='bg-[#150050] text-red-600 w-full '>{error?.data?.designation?.msg}</p>}
                    </div>
                    <div className='bg-[#150050]'>
                        <input className='text-white w-[350px] border-b-2 bg-[#150050] border-white px-2 py-1 mt-2' name='time' type='text' placeholder='Education' value={education} onChange={(e) => setEducation(e.target.value)} />
                        {error?.data?.education && <p className='bg-[#150050] text-red-600 w-full '>{error?.data?.education?.msg}</p>}
                    </div>
                    <div className='bg-[#150050]'>
                        <input className='text-white w-[350px] border-b-2 bg-[#150050] border-white px-2 py-1 mt-2' name='time' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        {error?.data?.password && <p className='bg-[#150050] text-red-600 w-full '>{error?.data?.password?.msg}</p>}
                    </div>
                </div>
                <button className='max-w-[250px] bg-[#FB2576] text-white px-4 py-2 rounded-md my-2' type='submit'>Confirm</button>
                <button className='max-w-[250px] bg-[#FB2576] text-white px-4 py-2 rounded-md my-2' type='submit'>Delete</button>
                {responseData?.message && <p className='bg-[#150050] text-white'>{responseData?.message}</p>}
                {error?.data?.message && <p className='bg-[#150050] text-white'>{error?.data?.message}</p>}
            </form>
        </div>
    )
}

export default StaffForm