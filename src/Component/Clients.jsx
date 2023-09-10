import React from 'react'
import valueSeed from '../images/lekkihill.jpg'
import spill from '../images/spill.png'

const Clients = () => {
  return (
    <div name='name' className='w-full h-fit  bg-gray-50 flex flex-col justify-center items-center text-center py-[100px] gap-9 '>
       <p className='text-2xl text-black'>Clients That Trust us</p>

         <div className='gap-12 sm:gap-20 grid grid-cols-2 sm:flex justify-center items-center text-center '>
            <img className=' w-[80px] sm:w-[100px]' src={spill} alt="value seed" /> 
             <img className=' w-[110px] sm:w-[150px]' src={valueSeed} alt="value seed" />
             <img className=' w-[80px] sm:w-[100px]' src={spill} alt="value seed" /> 
            <img className=' w-[110px] sm:w-[150px]' src={valueSeed} alt="value seed" />
         </div>

    </div>

   
  )
}

export default Clients