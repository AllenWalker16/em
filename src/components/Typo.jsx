import React from 'react'
import {pic8, embg} from '../assets'

const Typo = () => {
  return (
    <section className='h-screen w-screen'>
      <div className=' h-full w-full'>
        <img src={pic8} className='absolute blur-sm opacity-30 sm:opacity-50 h-full w-full object-cover' alt="" />
        <div className='relative text-white'>
          <h1 className='text-xl md:text-4xl sm:text-5xl font-[800] underline decoration-secondary underline-offset-[12px] text-white space-x-2 p-6 font-oct'>04 - TYPOGRAPHY/ COLORS</h1>
          <div className='p-6 flex items-center font-oct'>
            <p className='text-lg'>TTOctosquares</p>
            <div className='ml-2 border-l-4 border-secondary'>
              <p className='ml-2'>Regular</p> 
              <p className='ml-2'>Medium</p>
              <p className='ml-2'>Bold</p> 
            </div>
          </div>
          <div className='p-6 flex items-center font-ral'>
            <p className='text-lg font-semibold mr-[102px]'>Raleway</p>
            <div className='ml-2 border-l-4 border-secondary'>
              <p className='ml-2'>Regular</p> 
              <p className='ml-2'>Medium</p>
              <p className='ml-2'>Bold</p> 
            </div>
          </div>
          <div className='p-6 flex items-center font-jose'>
            <p className='text-lg font-semibold mr-[102px]'>Revanox</p>
            <div className='ml-2 border-l-4 border-secondary'>
              <p className='ml-2'>Regular</p> 
              <p className='ml-2'>Medium</p>
              <p className='ml-2'>Bold</p> 
            </div>
          </div>
          <div className='p-6 flex space-x-5'>
            <div className='w-[120px] h-[130px] bg-secondary clipped flex items-center justify-center text-primary font-bold font-oct text-sm border-2 border-primary'>#cf0038</div>
            <div className='w-[120px] h-[130px] bg-primary clipped flex items-center justify-center text-dimWhite font-bold font-oct text-sm border-2 '>#292d39</div>
            <div className='w-[120px] h-[130px] bg-white clipped flex items-center justify-center text-secondary font-bold font-oct text-sm border-2 border-secondary'>#FFFFFF</div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Typo