import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useGetHospitalQuery } from '../../../redux/Hospital/hospitalApi'
import { useGetPatientsDoctorsQuery } from '../../../redux/Patient/patientApi';
import { addFilter, addTags } from '../../../redux/Patient/patientSlice';
const DoctorFilter = () => {
    const [hospitals, setHospitals] = useState('----select----')
    const [tags, setTags] = useState('')
    const {data: hospital, isLoading, isError, error} = useGetHospitalQuery();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addTags(tags));
        dispatch(addFilter(hospitals));
    }, [tags,hospitals])
    let content;
    if(hospital && !error){
        content = hospital.map((data, idx) => {
            return <option value={`${data.name}`}>{data.name}</option>
        })
    }
    return (
        <div className='max-w-[900px] mx-auto border-b-[1px] border-black py-4'>
            <div className='max-w-[720px] w-full mx-auto flex flex-row justify-between items-center '>
                <div className='my-2 flex flex-row justify-center items-center'>
                    <label className="text-lg font-bold py-1 px-2">Select Hospital</label>
                    <select value={hospitals} onChange={(e) => setHospitals(e.target.value)} className='max-w-[250px] bg-[#5cdb95] text-center text-lg rounded-md border-2 border-black' name="types">
                        <option value="none">----select----</option>
                        {hospital != undefined ? content : null}
                    </select>
                </div>
                {/* <div className='w-[250px] my-2 flex flex-row'>
                    <input className='border-b-2 bg-[#5cdb95] border-black px-2 py-1' name='search' type='name' placeholder='Name/Speciality' value={tags} onChange={(e) => setTags(e.target.value)} />
                </div> */}
            </div>
        </div>
    )
}

export default DoctorFilter