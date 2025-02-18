import React from 'react'

const ContactSection = () => {
  return (
    <section className='h-200 flex items-center justify-center bg-orange-400' >
         <div className='flex flex-col items-center bg-white p-25 h-160 justify-around'>
            <h2 className='text-center text-2xl md:text-4xl'><b>Contact Us</b></h2>
            <div className='flex w-full flex-col sm:flex-row gap-3'>
                <input className='w-full sm:w-60 p-3 mt-2 border border-gray-600' type="text" placeholder='Enter your address'/>
                <input  className='w-full sm:w-60 p-3 mt-2 border border-gray-600'type="text" placeholder='Enter your name'/>
            </div>
            <div className='flex flex-col w-full sm:flex-row gap-3'>
              <input className='w-full sm:w-60 p-3 mt-2 border border-gray-600' type="number" placeholder='Enter your phone'/>
              <input className='w-full sm:w-60 p-3 mt-2 border border-gray-600' type="date" />
            </div>
            <div>
                <textarea className='w-124 mt-3 h-30 border border-gray-600' placeholder='Enter your message'></textarea>
            </div>
            <button className='bg-black text-white w-full mt-3 p-3'>SUBMIT</button>
         </div>
    </section>
  )
}

export default ContactSection
