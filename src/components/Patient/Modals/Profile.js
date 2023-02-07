import React from 'react'

const Profile = ({modalState, setModalState}) => {
  return (
    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <form className='max-w-[550px] flex flex-col items-center mx-auto px-6 py-4 bg-purple-500 rounded-md'>
            <h1 className='py-4 text-xl font-bold bg-purple-500'>Update Patient's Profile</h1>
            <div className='my-2 flex flex-col'>
                <input className='max-w-[250px] border-b-2 bg-purple-500 border-black px-2 py-1' name='height' type='text' placeholder='Height (cm)' />
            </div>
            <div className='my-2 flex flex-col'>
                <input className='max-w-[250px] border-b-2 bg-purple-500 border-black px-2 py-1' name='weight' type='text' placeholder='Weight (Kg)' />
            </div>
            <button className='max-w-[250px] bg-black text-white px-4 py-2 rounded-md my-2' type='submit'>Update</button>
            <button className='max-w-[250px] bg-black text-white px-4 py-2 rounded-md my-2' onClick={() => setModalState(modalState^1)} >Cancel</button>
            <p className='text-red-600 font-bold bg-purple-500'>Error Goes Here</p>
        </form>
    </div>
  )
}

export default Profile