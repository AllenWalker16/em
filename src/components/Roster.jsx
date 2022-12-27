import React from 'react'
import { pic5, pic1, embg, chaos, allen, prez, ujo, lykos, oracle } from '../assets'

const roster = () => {
  return (
    <section>
      <h1 className='text-xl md:text-4xl sm:text-5xl font-[800] tracking-wider underline decoration-secondary underline-offset-[12px] text-white space-x-2 p-6 font-oct'>03 - ROSTER</h1>
      <div className='p-6'>
        <a href="https://tracker.gg/valorant/profile/riot/EM%20Oracle%235589/overview" className='hover:opacity-40 hover:ease-in duration-300'><img src={oracle} alt="" /></a>
        <a href="https://tracker.gg/valorant/profile/riot/Monarch%23FQR/overview" className='hover:opacity-40 hover:ease-in duration-300'><img src={chaos} alt="" /></a>
        <a href="https://tracker.gg/valorant/profile/riot/LykosX%238233/overview" className='hover:opacity-40 hover:ease-in duration-300'><img src={lykos} alt="" /></a>
        <a href="https://tracker.gg/valorant/profile/riot/PreziGaming%23PREZI/overview" className='hover:opacity-40 hover:ease-in duration-300'><img src={prez} alt="" /></a>
        <a href="https://tracker.gg/valorant/profile/riot/ujo4eva%23MAIN/overview" className='hover:opacity-40 hover:ease-in duration-300'><img src={ujo} alt="" /></a>
        <a href="https://tracker.gg/valorant/profile/riot/Allen%231616/overview" className='hover:opacity-40 hover:ease-in duration-300'><img src={allen} alt="" /></a>
      </div>
    </section>

  )
}

export default roster