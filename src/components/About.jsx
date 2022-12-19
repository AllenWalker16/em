import {pic5, pic1} from '../assets'

const About = () => {
  return (
    <div id='about' className='h-screen w-screen'>
      <div className=' h-full w-full'>
        <img src={pic5} className='absolute blur-sm opacity-30 sm:opacity-50 h-full w-full object-cover' alt="" />
        <div className='relative text-white'>
          <h1 className='text-2xl md:text-5xl sm:text-6xl font-[800] underline decoration-secondary underline-offset-[12px] text-white space-x-2 p-6 tracking-widest'>01 - PROLOGUE</h1>
          <p className='text-sm leading-8 tracking-wider p-8 sm:text-lg sm:leading-[48px]'>
            <br />
            Evil Monxrchs are a premier Nigerian based esports organization dedicated to building championship caliber esports teams competing in the most successful new video games. We are one of the fastest growing esports organizations in Africa, as we connect passionate fans with fun and engaging original content. Evil Monxrchs roster includes the world champions in the most popular video game titles in the world including VALORANT, PUBG, Apex Legends and Call of Duty.
            <br />
            <br />
            It is our goal to build competitive teams across esports while connecting as many passionate fans as possible into our network. We want to give them access to our players and content and develop a strong, connected community around esports.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About