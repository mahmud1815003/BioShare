import React from 'react'
import { useSelector } from 'react-redux'
import Doctor from './Doctor'

const DoctorList = () => {
  const doctorList = useSelector(state => state?.patient);
  let content = null;
  if(doctorList?.doctors){
    content = doctorList?.doctors?.map((data, index) => {
       if(data.posting == doctorList.filter){
          return <Doctor key={index} data={data} />
       }
    });
  }
  return (
    <div className='max-w-[1000px] bg-[#5cdb95] w-full mx-auto py-4'>
        {doctorList?.doctors && content}
    </div>
  )
}

export default DoctorList