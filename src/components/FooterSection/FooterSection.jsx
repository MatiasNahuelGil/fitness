import React from 'react'
import logo from '../../assets/logo.png'
import logoIg from '../../assets/logo-ig.png'

const FooterSection = () => {
  return (
    <footer className='flex flex-col md:flex-row gap-10 justify-between bg-black p-10 text-white items-center'>
         <img src={logo} alt="Logo" className='w-20 h-20'/>
         <h2 className='text-3xl'>Health & Fitness club</h2>
         <div className='flex gap-2'>
            <img src={logoIg} alt="Logo instagram" className='w-7 h-7'/>
            <p>@fitnessportclub</p>
         </div>
    </footer>
  )
}

export default FooterSection
