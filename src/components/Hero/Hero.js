import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {

  return (
    <div className='max-w-full w-full max-h-screen h-screen bg-[#5cdb95]'>
      <div className='flex flex-row justify-center items-center w-full h-full font-["Trispace"] text-4xl'>
        <h1>A Complete System for {' '}
          <span className='text-red-600'>
            <Typewriter
              words={['Doctor', 'Patient', 'Researcher']}
              loop={false}
              cursor
              cursorStyle='_'
              typeSpeed={150}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </div>
    </div>
  )
}

export default Hero