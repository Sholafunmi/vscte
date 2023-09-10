import React from 'react'
import { Link } from 'react-scroll'

const Button = () => {
  return (
    <div>
        <button className='w-fit h-full p-2 rounded-[10px] text-2xl text-gray-50 bg-[#C01111] hover:bg-[#032250] hover:text-3xl '>
        <Link  to="contact"  smooth={true}  duration={500} className='cursor-pointer'>
          Talk To Us
        </Link>
        </button>
    </div>
  )
}

export default Button