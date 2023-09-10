import React from 'react'
import Button from './Button'

const Services = () => {
  return (
    <div name='services' className='w-full h-fit flex flex-col justify-center items-center py-4'>
      <p className='pb-12 text-4xl'>Our Services</p>

       <div className="services w-[90%] h-fit flex flex-col gap-20 ">
          {/* services 1  */}
        <div className='flex flex-col w-full h-[60vh] sm:gap-20 service1'>
          <div className="left w-[50%] rounded-3xl  ">   </div>
      
          <div className="right w-[50%] flex flex-col justify-center gap-3 ">
              <p className='sm:text-3xl'>INCREASE YOUR VELOCITY</p>
            <p className='sm:text-4xl'>Go to market 5x faster & better</p>
            <p className='sm:text-[18px]'>Cut through the tedious process of posting a job, shortlisting and reviewing hundreds of CVs - fill open roles faster with vetted candidates. Once we understand your needs, we will provide you with potential teammates to onboard immediately.</p>
            <Button />
          </div>
        </div>

        {/* services 2  */}
        <div className='flex md:flex-row-reverse w-full h-[60vh] gap-20  service2'>
          <div className="left w-[50%] rounded-3xl  ">   </div>
      
          <div className="right w-[50%] flex md:flex-col justify-center gap-3 ">
              <p className='text-3xl'>INCREASE YOUR VELOCITY</p>
            <p className='text-4xl'>Go to market 5x faster & better</p>
            <p className='text-[18px]'>Cut through the tedious process of posting a job, shortlisting and reviewing hundreds of CVs - fill open roles faster with vetted candidates. Once we understand your needs, we will provide you with potential teammates to onboard immediately.</p>
            <Button />
          </div>
        </div>

        {/* service3  */}
        <div className='flex w-full h-[60vh] gap-20 service3'>
          <div className="left w-[50%] rounded-3xl  ">   </div>
      
          <div className="right w-[50%] flex flex-col justify-center gap-3 ">
              <p className='text-3xl'>INCREASE YOUR VELOCITY</p>
            <p className='text-4xl'>Go to market 5x faster & better</p>
            <p className='text-[18px]'>Cut through the tedious process of posting a job, shortlisting and reviewing hundreds of CVs - fill open roles faster with vetted candidates. Once we understand your needs, we will provide you with potential teammates to onboard immediately.</p>
            <Button />
          </div>
        </div>
       </div>
       


    </div>
  )
}

export default Services