import React from 'react'
import arrowRight from '../../../assets/arrow.png'

const ServicesCard = ({title,text,image}) => {
  return (
    <div className='flex flex-col  items-center justify-around bg-orange-400 w-60 h-70 relative text-center animate-slideUp '>
       <div className='h-20 w-20 border-8 border-orange-300 p-3 bg-white relative bottom-10 shadow-lg animation-rotate'>
           <img src={image} alt="service logo" />
       </div>
       <h2 className='text-2xl text-gray-950'><b>{title}</b></h2>
       <p>{text}</p>
       <img src={arrowRight} alt="Arrow logo" className='w-10 h-10'/>
    </div>
  )
}

export default ServicesCard
