import {useState} from 'react'
import {close, emv, emvar, menu, emlogo, spike} from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full py-[0.5] flex-1 flex justify-between items-center'>
      <img src={emvar} alt="Evil Monxrchs" className='sm:w-1/5 h-32 -ml-14' />


      <ul className='list-none sm:flex hidden justify-end items-center navbar font-ral w-3/5'>
        <img src={spike} alt="Evil Monxrchs" className='w-1/5 h-32 z-10 absolute object-contain opacity-40' />
        {navLinks.map((nav,index) => (
          <li key={nav.id} className={`relative w-full flex justify-around font-ral z-20 cursor-pointer text-sm ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'} text-white`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center font-ral'>
        <img src={spike} alt="Evil Monxrchs" className='w-1/5 h-16 z-10 absolute opacity-40' />
        <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain z-20 relative' onClick={()=> setToggle((prev)=> !prev) } />
      </div>
      <div className={`${toggle ?'flex': 'hidden' } z-20 p-6 bg-primary absolute shadow-sm shadow-zinc-900 top-[100px] right-0 mx-4 my-2 min-w-[140px] rounded-none sidebar`}>
      <ul className='list-none flex flex-col justify-end items-center navbar w-full'>
        {navLinks.map((nav,index) => (
          <li key={nav.id} className={`relative w-full flex justify-around font-ral z-20 cursor-pointer text-xs ${index === navLinks.length-1 ? 'mr-0' : 'mb-4'} text-white`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      </div>
    </nav>
  )
}

export default Navbar