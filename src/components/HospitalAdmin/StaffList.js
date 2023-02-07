import React from 'react'

const StaffList = () => {
  return (
    <div className='w-[1000px] mx-auto bg-[#5cdb95] grid grid-cols-3 mt-2 border-[1px] border-black'>
            <div className='flex flex-row justify-center items-center py-4'>
                <h1 className='text-xl font-bold'>Bro Dad</h1>
            </div>
            <div className='flex flex-col py-4'>
                <h1><span className='font-bold text-red-600'>Mail:</span> mahmud1815003@stud.kuet.ac.bd</h1>
                <h1><span className='font-bold text-red-600'>Mobile:</span> +8801834728015</h1>
                <h1><span className='font-bold text-red-600'>Age:</span> 22</h1>
                <h1><span className='font-bold text-red-600'>Height:</span> 165 (cm)</h1>
                <h1><span className='font-bold text-red-600'>Weight:</span> 51 (kg)</h1>
            </div>
            <div className='flex flex-row justify-center items-center'>
                <button className='font-bold px-6 py-2 rounded-md bg-purple-600'>Delete</button>
            </div>
        </div>
  )
}

export default StaffList