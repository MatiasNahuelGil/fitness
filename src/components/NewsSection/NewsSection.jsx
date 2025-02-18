import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";

const NewsSection = () => {
  return (
    <section className='flex flex-col md:flex-row mt-10 p-5'>
       <div className='p-10 flex flex-col gap-4'>
          <h2 className='text-2xl'><b>Sign up for the newsletter</b></h2>
          <p>Want to be the first to read our news? Subscribe to the newsletter to keep abreast of all events.</p>
          <div className='w-full'>
            <input className='border-indigo-300 border w-140 p-3' type="email" placeholder='Enter a valid email address'/>
            <button className='bg-orange-400 p-3 mt-10 md:mt-0 w-30'><b>SUBMIT</b></button>
          </div>
       </div>
       <div className='p-10 flex flex-col gap-3'>
         <h2 className='text-3xl'><b>Book your workout</b></h2>
         <div className='flex w-100 gap-2 items-center'>
            <FaPhoneAlt color='gold'/>
            <b> +1 (234) 567-8910</b>
         </div>
         
       </div>
    </section>
  )
}

export default NewsSection
