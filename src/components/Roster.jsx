import React from 'react'
import { pic5 } from '../assets'

const roster = () => {
  return (
    <div id='about' className='h-screen w-screen'>
      <div className=' h-full w-full'>
        <img src={pic5} className='absolute blur-sm opacity-30 sm:opacity-50 h-full w-full object-cover' alt="" />
        <div className='relative text-white'>
          <h1 className='text-2xl md:text-5xl sm:text-6xl font-[800] underline decoration-secondary underline-offset-[12px] text-white space-x-2 p-6 tracking-widest'>02 - ROSTER</h1>
          {/* container for player roster data */}
          <div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default roster