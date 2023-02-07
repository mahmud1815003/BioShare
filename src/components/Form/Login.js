import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../redux/Login/loginApi';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('patient');
    const navigate = useNavigate();

    const [login, { data: responseData, isLoading, isError, error, isSuccess }] = useLoginMutation();

    useEffect(() => {
        console.log(error);
        if (!error && responseData) {
            console.log("HELlo");
            clearForm();
        }
        if(responseData?.token && responseData?.user){
            const user = responseData?.user?.role;
            if(user == 'patient'){
                navigate('/patient')
            }else if(user == 'doctor'){
                navigate('/doctor');
            }else if(user == 'staff'){
                navigate('/null');
            }else if(user == 'researcher'){
                navigate('/null');
            }else if(user == 'hospitaladmin'){
                navigate('/hospitaladmin');
            }else if(user == 'admin'){
                navigate('/admin');
            }
        }
    }, [responseData, error]);
    const handleSubmit = (e) => {
        e.preventDefault();
        login({
            email,
            password,
            role,
        });
    }

    const clearForm = () => {
        setEmail("");
        setPassword("");
        setRole("patient");
    }

    return (
        <div className='w-full h-full mx-auto'>
            <form onSubmit={handleSubmit} className='max-w-[550px] flex flex-col items-center mx-auto px-6 py-4 bg-purple-500 rounded-md'>
                <div className='my-2 flex flex-col bg-purple-500'>
                    <input className='max-w-[250px] border-b-2 bg-purple-500 border-black px-2 py-1' name='username' type='text' placeholder='User Name' value={email} onChange={(e) => setEmail(e.target.value)} />
                    {error?.data?.email && <p className='text-red-600 font-bold bg-purple-500'>{error?.data?.email?.msg}</p>}
                </div>
                <div className='my-2 flex flex-col'>
                    <input className='max-w-[250px] border-b-2 bg-purple-500 border-black px-2 py-1' name='password' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    {error?.data?.password && <p className='text-red-600 font-bold bg-purple-500'>{error?.data?.password?.msg}</p>}
                </div>
                <div className='my-2 flex flex-col bg-purple-500'>
                    <label className="text-lg font-bold py-1 bg-purple-500">Select Your Account Type</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)} className='max-w-[250px] bg-purple-500 text-lg rounded-md border-2 border-black' name="types">
                        <option value="patient">Patient</option>
                        <option value="doctor">Doctor</option>
                        <option value="researcher">Researcher</option>
                        <option value="hospitaladmin">Hospital Admin</option>
                        <option value="staff">Hospital Operator</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button className='max-w-[250px] bg-black text-white px-4 py-2 rounded-md my-2' type='submit'>Login</button>
                {error?.data?.message && <p className='text-red-600 font-bold bg-purple-500'>{error?.data?.message}</p>}
            </form>
        </div>
    )
}

export default Login