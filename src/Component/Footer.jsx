import React from 'react'
import logo from '../images/logo1.png'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail} from 'react-icons/hi'



const Footer = () => {
  return (
    <section name='footer' className='w-full h-fit bg-[#202020] flex  justify-center items-center '>
        <div  className=' w-[80%] text-gray-200 flex  justify-between  py-8 footer'>
            <div className=' flex flex-col gap-2 items-center footLogo'>
                 <a href=""> <img className='w-[180px]' src={logo} alt="logoImage" /> </a>
                <p>VSCTE 2023 All Rights Reservedhh</p>
                
            </div>

            <div className='flex flex-col '>
                <p>10 Moore road</p> 
                <p>Yaba, Lagos Nigeria</p>
                <p>Tel:08189980876</p>
                <p>Email:itsvibrantconsultancy@gmail.com</p>

            </div>

            <div>
              <ul className='flex gap-5 justify-center mt-4 md:mt-0 '>
                  <a className=' text-gray-300' target='_blank' href="https://www.instagram.com/vibrant_consultancy_enterprise"> <FaInstagram size={30} /> </a>
                  <a className=' text-gray-300' target='_blank' href=" "> <FaTwitter size={30} /> </a>
                  <a className=' text-gray-300' target='_blank' href="mailto:itsvibrantconsultancy@@gmail.com"> <HiOutlineMail size={30} /> </a>                    
              </ul>
            </div>
    
        </div>
    </section>
    
  )
}

export default Footer