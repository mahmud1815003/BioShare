import React, { useState } from 'react'
import DoctorForm from './Forms/DoctorForm'
import StaffForm from './Forms/StaffForm';

const AddStaff = () => {
    const [doctor, setDoctor] = useState(true);
    const [staff, setStaff] = useState(false);

    const doc = () => {
        setDoctor(true);
        setStaff(false);
    }
    const staf = () => {
        setDoctor(false);
        setStaff(true);
    }
    return (
        <div className='w-[1000px] mx-auto'>
            <div className='w-[550px] mx-auto p-4 flex flex-row justify-around items-center mt-4 border-b-[1px] border-black'>
                <button className='px-6 py-4 bg-purple-500 rounded-md' onClick={doc}>Add Doctor</button>
                <button className='px-6 py-4 bg-purple-500 rounded-md' onClick={staf}>Add Staff</button>
            </div>
            {doctor && <div>
                <DoctorForm />
            </div>
            }
            {staff && <div>
                <StaffForm />
            </div>

            }
        </div>
    )
}

export default AddStaff