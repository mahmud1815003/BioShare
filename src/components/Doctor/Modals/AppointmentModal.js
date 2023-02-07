import React, { useEffect, useState } from 'react'
import { useUpdateDoctorMutation } from '../../../redux/Doctor/DoctorApi';

const Appointment = ({ modalState, setModalState, doctor }) => {
    const [days, setDays] = useState([...doctor?.appointmentDays]);
    const week = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const [updateDoctor, {data: doctordays, isLoading, isSuccess, isError, error}] = useUpdateDoctorMutation();
    
    console.log(days)
    const addDays = (day) => {
        if(!days){
            setDays([]);
            let x = [];
            x.push(day);
            setDays(x);
        }else{
            const bool = days?.find(data => {
                return data === day;
            });
            if(!bool){
                days.push(day);
                const x = [...days];
                setDays(x);
            }
        }
    }
    const deleteDay = (day) => {
        if(days){
            console.log(day);
            const x = days?.filter(data => {
                return data !== day;
            })
            console.log(x);
            setDays(x);
        }
    }

    const update = () => {
        updateDoctor(days);
        setDays([]);
    }

    useEffect(() => {
        if(doctordays){
            setDays([...doctordays.appointmentDays]);
        }
    }, [doctordays])
    return (
        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] rounded-md translate-y-[-50%] bg-[#150050] w-[650px] py-6'>
            <div className='flex flex-col items-center mx-auto px-6 py-4 rounded-md bg-[#150050]' disabled={true}>
                <h1 className='py-4 text-4xl font-bold bg-[#150050] text-white'>Select Appointment Date</h1>
                <h1 className='bg-[#150050] text-white text-center font-bold text-2xl'>{doctor.name}</h1>
                <div className='my-2 flex flex-col bg-[#150050]'>
                    <h1 className='bg-[#150050] text-white text-center text-xl font-bold border-b-2 border-white mb-2'>selected days</h1>
                    <div className='grid grid-cols-2 bg-[#150050] gap-1'>
                        {days?.map((day) => {
                            return <button className='bg-[#150050] text-white border-2 px-1 py-1 border-white hover:bg-red-500 hover:cursor-pointer hover:border-red-500' onClick={(e) => deleteDay(e.target.value)} value={day}>{day}</button>
                        })}
                    </div>
                </div>
                    <h1 className='w-full text-center text-xl bg-[#150050] text-white font-bold'>Select Days</h1>
                <div className='my-2 flex flex-wrap flex-row bg-[#150050] space-x-2 border-2 border-white p-2'>
                        {week.map(day => {
                            return <button className='max-w-[250px] bg-black text-white px-4 py-2 rounded-md my-2' value={day} onClick={(e) => addDays(e.target.value)}>{day}</button>
                        })}
                </div>
                <button className='max-w-[250px] bg-[#FB2576] text-white px-4 py-2 rounded-md my-2' onClick={update} >Confirm</button>
                <button className='max-w-[250px] bg-[#FB2576] text-white px-4 py-2 rounded-md my-2' onClick={() => setModalState(!modalState)} >Cancel</button>
            </div>
            {isSuccess && <h1 className='text-white text-xl text-center bg-[#150050]'>Updated Successfully</h1>}
            {isError && <h1 className='text-white text-xl text-center bg-[#150050]'>{error.msg}</h1>}
        </div>
    )
}

export default Appointment