import React from 'react'
import styles from '../style'
import {discount, robot, pic5, pic1, embg} from '../assets'
import Typed from 'react-typed';

const Hero = () => (
  <section id='home' className='h-screen'>
    <div className='z-10 h-full w-full'>
      <img src={pic1} alt="" className='absolute blur-sm opacity-30 sm:opacity-40 h-full w-full object-cover'/>
      <div className='relative flex flex-col items-center w-full justify-center h-full text-white'>
        <p className='font-semibold text-sm p-2'>Greetings Mortal, welcome to the Netherealm .</p>
        <h1 className="text-4xl sm:text-6xl md:text-8xl text-white py-8 uppercase tracking-widest font-[1000]">Evil Monxrchs</h1>
        <div className='flex'>
          <p className="text-xl md:text-4xl font-semibold sm:text-3xl text-white space-x-2">we are&nbsp;</p>
          <Typed className='text-2xl text-secondary font-[900] md:text-4xl sm:text-3xl' strings={[' 3vil.',' Monarchs.', ' the Undead.',]} typeSpeed={200} backSpeed={150} loop />
        </div>
      </div>
    </div>
  </section>
)

export default Hero