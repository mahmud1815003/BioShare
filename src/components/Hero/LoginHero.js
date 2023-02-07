import React from 'react'
import Login from '../Form/Login'

const LoginHero = () => {
    return (
        <>
            <div className='w-full h-screen bg-[#5cdb95] mx-auto'>
                <div className='max-w-[1000px] py-6 mx-auto'>
                    <Login />
                </div>
            </div>
        </>
    )
}

export default LoginHero