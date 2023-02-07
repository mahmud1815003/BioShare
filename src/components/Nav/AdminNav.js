import React, { useState } from 'react'
import { RiHospitalFill } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseSquare } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const AdminNav = () => {
    const [ham, setHam] = useState(false);
    return (
        <div className='max-w-full w-full h-[80px] bg-[#5cdb95] sm:px-6 px-4 flex flex-row justify-between items-center text-[#05386b] font-["Noto_Sans"]'>
            <div className='flex flex-row items-center'>
                <Link to={'/'} className="flex flex-row items-center">
                    <RiHospitalFill size={40} className="mr-2" />
                    <h1 className='xl:text-3xl sm:text-xl text-[#05386b]'>{process.env.REACT_APP_APP_NAME}</h1>
                </Link>
            </div>
            <div className='lg:block hidden'>
                <ul className='flex flex-row text-lg font-bold cursor-pointer items-center'>
                    <Link to={'/'}><li>Home</li></Link>
                    <Link to={'/hospitals'}><li className='ml-6'>Hospitals</li></Link>
                    <Link to={'/institues'}><li className='ml-6'>Affiliated Institutions</li></Link>
                    <Link to={'/doctor'}><li className='ml-6 text-white bg-[#05386b] px-3 py-3 rounded-md'>Dashboard</li></Link>
                    <li className='ml-6 text-white bg-[#05386b] px-3 py-3 rounded-md'>Log Out</li>
                </ul>
            </div>
            <div className='lg:hidden block' onClick={() => setHam(!ham)}>
                {!ham ? <GiHamburgerMenu size={30} /> : <AiFillCloseSquare size={30} />}
            </div>
            {
                ham && <div className='absolute top-[80px] left-0 w-full p-6 bg-[#5cdb95] lg:hidden block z-50'>
                    <ul className='flex flex-col text-lg font-bold cursor-pointer w-full items-center'>
                        <Link to={'/'}><li className='ml-6'>Home</li></Link>
                        <Link to={'/hospitals'}><li className='ml-6 mt-4'>Hospitals</li></Link>
                        <Link to={'/institues'}><li className='ml-6 mt-4'>Affiliated Institutions</li></Link>
                        <Link to={'/doctor'}><li className='ml-6 mt-4 text-white bg-[#05386b] px-3 py-3 rounded-md'>Dashboard</li></Link>
                        <li className='ml-6 mt-4 text-white bg-[#05386b] px-3 py-3 rounded-md'>Log Out</li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default AdminNav