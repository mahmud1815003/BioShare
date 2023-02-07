import React from 'react'

const Hospital = ({ sl, name, address }) => {
  return (
    <div className='grid grid-cols-3 gap-4 text-center py-4 border-[1px] border-black m-4'>
      <div className='flex flex-row justify-center items-center'>
      <h1>{sl}</h1>
      </div>
      <div className='flex flex-row justify-center items-center'>
        <h1 className='font-bold text-center'>{name}</h1>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1><span className='font-bold'>Address:</span> {address.address}</h1>
        <h1><span className='font-bold'>Mobile:</span> {address.mobile}</h1>
        <h1><span className='font-bold'>Email:</span> {address.email}</h1>
      </div>
    </div>
  )
}

export default Hospital