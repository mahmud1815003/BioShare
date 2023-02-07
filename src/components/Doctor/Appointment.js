import React from 'react'
import Patient from './Patient'

const Appointment = () => {
  return (
    <div className='max-w-[1000px] bg-[#5cdb95] w-full mx-auto py-4'>
        <div className='text-center text-4xl'>
            <h1 className='border-b-[1px] border-black mb-4 pb-2'>Total Patients For Today is 20</h1>
        </div>
        <div className='w-full'>
            <Patient />
        </div>
    </div>
  )
}

export default Appointment