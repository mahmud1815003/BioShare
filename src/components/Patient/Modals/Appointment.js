import React, { useState } from 'react'
import { useGetAppointmentMutation } from '../../../redux/Patient/patientApi';
import dayValidator from '../../../util/daysValidator';

const Appointment = ({ modalState, setModalState, data }) => {
    const [week, setWeek] = useState(data?.appointmentDays || []);
    const [getAppointment, {data: appointment, isLoading, error:appointmentError} ] = useGetAppointmentMutation();
    const [selected, setSelected] = useState([]);
    let content = dayValidator(week);
    console.log(content);
    const addDays = (day) => {
        selected.push(day);
        setSelected([
            ...new Set(selected)
        ]);
    }
    const deleteDays = (day) => {
        const x = selected.filter(data => {
            return data != day;
        })
        setSelected(x);
    }
    console.log(data);
    const onSumit = () => {
        getAppointment({
            doctorEmail: data?.email,

        })
    }
    return (
        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] rounded-md translate-y-[-50%] bg-[#150050] w-[650px] py-6'>
            <div className='flex flex-col items-center mx-auto px-6 py-4 rounded-md bg-[#150050]'>
                <h1 className='py-4 text-4xl font-bold bg-[#150050] text-white'>Make Appointment</h1>
                <h1 className='bg-[#150050] text-white text-center font-bold text-2xl'>Doctor's Name: <span className='bg-[#150050] font-bold underline'>{data.name}</span></h1>
                <div className='flex flex-row items-center space-x-1 bg-[#150050] mt-4'>
                    <h1 className='bg-[#150050] text-white text-center'>Available Days: </h1>
                    <div className=' bg-[#150050] flex flex-row space-x-1'>
                        {content?.length !== 0 ?
                            content?.map(day => {
                                return <h1 className='bg-[#150050] text-white border-2 p-1 rounded-md'>{day}</h1>
                            })
                            : <h1 className='bg-[#150050]'>Doctor is not available</h1>}
                    </div>
                </div>
                <h1 className='bg-[#150050] text-white font-bold underline'>Select Your Preferred Appointment Day</h1>
                <div className='my-2 flex flex-row space-x-2 bg-[#150050]'>
                    {
                        content?.length !== 0 ? content.map(day => {
                            return <button className='max-w-[250px] bg-black text-white px-4 py-2 rounded-md my-2' value={day} onClick={(e) => addDays(e.target.value)}>{day}</button>
                        }) : <h1 className='bg-[#150050]'>Doctor is not available</h1>
                    }
                </div>
                {selected?.length && <div className='my-4 bg-[#150050] text-white flex flex-col items-center'>
                    <h1 className='bg-[#150050]'>Selected Days</h1>
                    <div className='bg-[#150050] flex flex-row items-center space-x-2'>
                        {
                            selected?.map(day => {
                                return <button className='bg-[#150050] text-white border-2 p-1 rounded-md hover:bg-red-500' value={day} onClick={(e) => deleteDays(e.target.value)}>{day}</button>; 
                            })
                        }
                    </div>
                </div>}
                <button className='max-w-[250px] bg-[#FB2576] text-white px-4 py-2 rounded-md my-2' type='submit'>Confirm</button>
                <button className='max-w-[250px] bg-[#FB2576] text-white px-4 py-2 rounded-md my-2' onClick={() => setModalState(!modalState)} >Cancel</button>
            </div>
        </div>
    )
}

export default Appointment