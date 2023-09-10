import React from 'react'

const Contact = () => {
  return (
    // <section className='w-full h-screen bg-[#031625] flex justify-center items-center '>
        <div name='talkToUs' className='w-full h-fit flex flex-col bg-[#031625] justify-center items-center self-center py-20 p-5  '>
    <p className='text-gray-100 text-2xl text-center pb-4'>Talk To Us <br /> Lets Here About Your Project </p>
   

    <form action="" className='flex w-full sm:w-[400px] h-fit p-2 mx-3 gap-2 border rounded-md   flex-col justify-center self-center'>
        <div>
        
            {/* <label htmlFor="name"> Your Name:</label> */}
            <input type="text" placeholder='Fullname' className='w-[100%] p-2' /> 
        </div>

        <div>
            {/* <label htmlFor="name"> Companys Name:</label> */}
            <input type="text" placeholder='Companys Name' className='w-[100%] p-2' /> 

        </div>

        <div>
            {/* <label htmlFor="email"'> Email Address:</label> */}
            <input type="email" placeholder='E-mail' className='w-[100%] p-2' />
        </div>

        <div>
            {/* <label htmlFor="phoneNo">Phone No:</label> */}
            <input type="number" placeholder='Phone Number' className='w-[100%] p-2' />
        </div>

        <div className=' bg-white text-black p-2 flex gap-2 '>
            <label htmlFor="project">Brief</label> 
            <input type="file" name="project" id="project" className=' ' />
        </div>

        <div>
            {/* <label htmlFor="info">Project Brief</label> */}
            <textarea name="" id="" cols="30" rows="10" placeholder='Your Project Brief' className='w-[100%] p-2' ></textarea>
        </div>

        <button className='text-gray-50 bg-[#C01111] w-fit self-center p-2 rounded-[10px] text-2xl hover:bg-[#032250] hover:text-3xl '><a href="">Submit</a></button>
       
    </form>

    </div>
    // </section>
    
  )
}

export default Contact