import React, { useState } from 'react'
import logo from '../images/logo1.png'
import { Link } from 'react-scroll'

import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNave] = useState(false)
  const handleClick = () => setNave(!nav)
  return (
    <div name='home' className='flex w-full h-[12vh] justify-between items-center px-5 md:px-20 sm:py-5'>
       <a href=""> <img className='w-[140px] sm:w-[190px]' src={logo} alt="logoImage" /> </a>

        <ul className=' hidden sm:flex w-fit gap-6 text-gray-50 font-semibold'>
        <Link  to="home"  smooth={true}  duration={500} className='cursor-pointer'>
          HOME
        </Link>

        <Link  to="about"  smooth={true}  duration={500} className='cursor-pointer'>
          ABOUT
        </Link>

        <Link  to="services"  smooth={true}  duration={500} className='cursor-pointer'>
          SERVICES
        </Link>

        <Link  to="talkToUs"  smooth={true}  duration={500} className='cursor-pointer'>
          TALK TO US
        </Link>

        <Link  to="footer"  smooth={true}  duration={500} className='cursor-pointer'>
          CONTACT
        </Link>
        </ul>
       
      

        <div onClick={handleClick} className='lg:hidden z-10 cursor-pointer text-2xl text-gray-300'>
         {!nav ? <FaBars /> : <FaTimes />}
         </div>

           {/* MOBILE MENU  */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#08192f] text-gray-300 flex flex-col justify-center items-center'}>
              <li  className='cursor-pointer  py-6 text-4xl'>
                  <Link onClick={handleClick}   to="home"  smooth={true} offset={50} duration={500} >
                    Home
                  </Link>
                </li>

                <li  className='cursor-pointer py-6 text-4xl'>
                  <Link onClick={handleClick}  to="about"  smooth={true} offset={50} duration={500} >
                    About
                  </Link>
                </li>

                <li className='cursor-pointer py-6 text-4xl'>
                  <Link onClick={handleClick} to="services"  smooth={true} offset={50} duration={500} >
                    Services
                  </Link>
                </li>

                <li className='cursor-pointer py-6 text-4xl'>
                  <Link onClick={handleClick} to="talkToUs"  smooth={true} offset={50} duration={500} >
                    Talk To Us
                  </Link>
                </li>

                <li className='cursor-pointer py-6 text-4xl'>
                  <Link onClick={handleClick} to="footer"  smooth={true} offset={50} duration={500} >
                    Contact
                  </Link>
                </li>
            </ul>
    </div>
  )
}

export default Navbar