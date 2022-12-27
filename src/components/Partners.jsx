import React from 'react'
import { embg, razer, binance, twitter, aimlab, logo, instagram, emvar, facebook, youtube, twitch } from '../assets'

const Partners = () => {
  return (
    <section>
      <div className='h-screen w-screen'>
        <img src={embg} className='absolute blur-sm opacity-30 sm:opacity-40 h-full w-full object-cover' alt="" />
        <div className='relative w-full h-full'>
          <h1 className='text-xl md:text-4xl sm:text-5xl font-[800] underline decoration-secondary underline-offset-[12px] text-white space-x-2 p-6 font-oct tracking-wider'>05 - PARTNERS</h1>
          <div className='w-full h-2/3 sm:w-1/2 p-6'>
            <img src={aimlab} alt="" className='w-1/2'/>
            <br />
            <img src={binance} alt="" className='w-1/2'/>
            <br />
            <img src={razer} alt="" className='w-1/2'/>
          </div>
          {/* footer properties */}
          <div className=' h-1/3 bg-primary'>
            <br />
            <br />
            <div className='w-full h-full'>
              <div className='flex justify-center space-x-5'>
                <a href=""><img src={twitter} alt=""/></a>
                <a href=""><img src={instagram} alt=""/></a>
                <a href=""><img src={facebook} alt=""/></a>
                <a href=""><svg className='-mt-[10px]' fill="#ffffff" width="40px" height="40px" viewBox="-2.5 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" d="M13.07 6.503a1.592 1.592 0 0 0-1.12-1.128A37.622 37.622 0 0 0 7 5.11a37.622 37.622 0 0 0-4.95.266A1.592 1.592 0 0 0 .93 6.503a16.7 16.7 0 0 0-.265 3.07A16.7 16.7 0 0 0 .93 12.64a1.592 1.592 0 0 0 1.12 1.128 37.62 37.62 0 0 0 4.95.266 37.62 37.62 0 0 0 4.95-.266 1.592 1.592 0 0 0 1.12-1.128 16.7 16.7 0 0 0 .265-3.069 16.7 16.7 0 0 0-.265-3.07zM8.95 9.587 5.701 7.74v3.694z"></path></g></svg></a>
                <a href=""><svg fill="#FFFFFF" width="24px" height="24px" viewBox="-0.5 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"><path d="m11.481 6.259v6.259h-2.091v-6.259zm5.74 0v6.259h-2.091v-6.259zm0 10.962 3.649-3.663v-11.467h-17.221v15.13h4.702v3.13l3.13-3.13zm5.74-17.221v14.61l-6.259 6.259h-4.702l-3.13 3.13h-3.13v-3.129h-5.74v-16.702l1.572-4.168z"></path></g></svg></a>
              </div>
              <p className='mt-1 font-oct tracking-widest text-white text-center'>Evil Monarchs</p>
              <p className='mt-1 text-sm text-white text-center'>Copyright &copy; 2023.</p>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners