import React from 'react'
import { pic5, pic1, embg, chaos, allen, prez, ujo, lykos, oracle } from '../assets'

const roster = () => {
  return (
    <section>
      <h1 className='text-2xl md:text-5xl sm:text-6xl font-[800] underline decoration-secondary underline-offset-[12px] text-white space-x-2 p-6 tracking-widest'>03 - ROSTER</h1>
      <div className='p-6'>
        <a href="" className='hover:opacity-40 hover:ease-in duration-300'><img src={oracle} alt="" /></a>
        <a href="https://tracker.gg/valorant/profile/riot/Monarch%23FQR/overview" className='hover:opacity-40 hover:ease-in duration-300'><img src={chaos} alt="" /></a>
        <a href="" className='hover:opacity-40 hover:ease-in duration-300'><img src={lykos} alt="" /></a>
        <a href="" className='hover:opacity-40 hover:ease-in duration-300'><img src={prez} alt="" /></a>
        <a href="https://tracker.gg/valorant/profile/riot/ujo4eva%23MAIN/overview" className='hover:opacity-40 hover:ease-in duration-300'><img src={ujo} alt="" /></a>
        <a href="https://tracker.gg/valorant/profile/riot/Allen%231616/overview" className='hover:opacity-40 hover:ease-in duration-300'><img src={allen} alt="" /></a>
      </div>
    </section>

  )
}

export default roster