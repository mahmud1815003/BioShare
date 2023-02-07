import React, { useState, useEffect } from 'react'
import { useAddPatientMutation } from '../../redux/Patient/patientApi'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('patient');
    const [dataSending, setDataSending] = useState(true);
    const [addPatient, { data: responseData, isLoading, isError, error, isSuccess }] = useAddPatientMutation();

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
        addPatient({
            email,
            mobile,
            name,
            password,
            role,
            dataSending,
        });
    }

    const clearForm = () => {
        setEmail("");
        setMobile("");
        setName("");
        setPassword("");
        setRole("patient");
    }
    return (
        <div className='w-full h-full mx-auto'>
            <h1 className='text-4xl text-center py-4 font-bold'>Pateint/Researcher Sign Up</h1>
            <form onSubmit={handleSubmit} className='bg-purple-500 max-w-[550px] flex flex-col items-center mx-auto px-6 py-4 rounded-md'>
                <div className='my-2 flex flex-col'>
                    <input className='max-w-[250px] border-b-2 bg-purple-500 border-black px-2 py-1' name='username' value={name} type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} />
                    {error?.data?.name && <p className='text-[#DC143C] text-sm bg-purple-500'>{error?.data?.name?.msg}</p>}
                </div>
                <div className='my-2 flex flex-col'>
                    <input className='max-w-[250px] border-b-2 bg-purple-500 border-black px-2 py-1' name='email' type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                    {error?.data?.email && <p className='text-[#DC143C] text-sm bg-purple-500'>{error?.data?.email?.msg}</p>}
                </div>
                <div className='my-2 flex flex-col'>
                    <input className='max-w-[250px] border-b-2 bg-purple-500 border-black px-2 py-1' name='mobile' type='text' placeholder='Mobile (Ex: 017XX..)' onChange={(e) => setMobile(e.target.value)} value={mobile} />
                    {error?.data?.mobile && <p className='text-[#DC143C] text-sm bg-purple-500'>{error?.data?.mobile?.msg}</p>}
                </div>
                <div className='my-2 flex flex-col'>
                    <input className='max-w-[250px] border-b-2 bg-purple-500 border-black px-2 py-1' name='password' type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} />
                    {error?.data?.password && <p className='text-[#DC143C] text-sm bg-purple-500'>{error?.data?.password?.msg}</p>}
                </div>
                {role == 'patient' && <div className='my-2 flex flex-col items-start bg-purple-500'>
                    <p className='text-black text-sm bg-purple-500'>Share your data with Resarcher</p>
                    <label className='bg-purple-500'>Yes</label>
                    <input className='border-b-2 bg-purple-500 border-black px-2 py-1' name='password' type='radio' placeholder='Password' onClick={() => setDataSending(true)} checked={dataSending} />
                    <label className='bg-purple-500'>No</label>
                    <input className='border-b-2 bg-purple-500 border-black px-2 py-1' name='password' type='radio' placeholder='Password' onClick={() => setDataSending(false)} checked={!dataSending} />
                </div>}
                <div className='my-2 flex flex-col bg-purple-500'>
                    <label className="text-lg font-bold py-1 bg-purple-500">Select Your Account Type</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)} className='max-w-[250px] bg-purple-500 text-lg rounded-md border-2 border-black' name="types">
                        <option value="patient">Patient</option>
                        <option value="researcher">Researcher</option>
                    </select>
                </div>
                <button className='max-w-[250px] bg-black text-white px-4 py-2 rounded-md my-2' type='submit'>SignUp</button>
                <h1 className='bg-purple-500'>*Give Institutional Mail For Researcher</h1>
                {responseData?.message && <h1 className='bg-purple-500'>{responseData.message}</h1>}
            </form>

        </div>
    )
}

export default SignUp