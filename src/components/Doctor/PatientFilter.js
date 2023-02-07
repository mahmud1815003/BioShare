import React from 'react'

const PatientFilter = () => {
  return (
    <div className='max-w-[900px] mx-auto border-b-[1px] border-black py-4'>
            <div className='max-w-[720px] w-full mx-auto flex flex-row justify-center items-center '>
                <div className='w-[450px] my-2 flex flex-row justify-center'>
                    <input className='w-full border-b-2 bg-[#5cdb95] border-black px-2 py-1' name='search' type='name' placeholder='Search Patiend (Email)' />
                    <button className='px-6 py-2 rounded-md bg-purple-600 ml-4'>Search</button>
                </div>
            </div>
        </div>
  )
}

export default PatientFilter