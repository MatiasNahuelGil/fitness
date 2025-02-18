import React from 'react'


const AmenitiesCard = ({children, backImage}) => {
  return (
    <div className='flex flex-col items-center justify-center h-90 w-90 bg-cover' style={{ backgroundImage: `url(${backImage})` }}>
       {children}
    </div>
  )
}

export default AmenitiesCard
