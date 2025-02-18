import React from 'react'


const MemberShipCard = ({title,text,children}) => {
  return (
    <div className='bg-white w-80 h-100 flex flex-col justify-around text-center items-center p-3 relative top-50 animate-slideUp' >
        <h2 className='text-2xl'>{title}</h2>
        {children}
    </div>
  )
}

export default MemberShipCard
