import React from 'react'
import Navbar from './Navbar'
import Button from './Button'


const Header = () => {
  return (
    <div className='w-full h-screen items-center header '>
        <Navbar />
        <div className='w-full h-[88vh] hero flex flex-col justify-center items-center'>
            <p className='text-gray-100 text-3xl  font-bold md:text-6xl sm:text-center pb-5 pt-[200px]'>Information Technology <br /> 
            & Software Development <br />
            Firm You Can Trust</p>

            {/* desktop  */}
            <div className='hidden sm:flex gap-10 text-white highlights pb-12 '>
              <p className='border-l-8 border-[#C01111] bg-[#032250] p-3 text-[18px] hover:text-[20px] '>Technology Services</p>
              <p className='border-l-8 border-[#C01111] bg-[#032250] p-3 text-[18px] hover:text-[20px]'>IT Project Management</p>
              <p className='border-l-8 border-[#C01111] bg-[#032250] p-3 text-[18px] hover:text-[20px] '>Web & Mobile Application Development</p>
            </div>

            {/* mobile  */}
            <div className='sm:hidden flex flex-col  gap-5 text-white highlights pb-12 '>
              <p className='border-l-8 border-[#C01111] bg-[#032250] p-3 text-[18px] hover:text-[20px] '>Technology Services</p>
              <p className='border-l-8 border-[#C01111] bg-[#032250] p-3 text-[18px] hover:text-[20px]'>IT Project Management</p>
              <p className='border-l-8 border-[#C01111] bg-[#032250] p-3 text-[18px] hover:text-[20px] '>Web & Mobile Application Development</p>
            </div>

            <Button />


        </div>
    </div>
  )
}

export default Header