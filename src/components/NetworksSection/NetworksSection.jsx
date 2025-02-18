import React from 'react'
import logoIg from '../../assets/logo-ig.png'
import banner from '../../assets/banner-3.jpg'

const NetworksSection = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-6 h-170 bg-cover text-white' style={{backgroundImage : `url(${banner})`}}>
       <img src={logoIg} alt="Logo Instagram" />
       <h2 className='text-2xl md:text-4xl'>See more, follow us on</h2>
       <p className='md:text-2xl'>Instagram <span className='text-orange-400 text-2xl'>@fitnessportclub</span></p>
    </section>
  )
}

export default NetworksSection
