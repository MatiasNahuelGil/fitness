import React from 'react'
import Button from '../Button/Button'
import trainerImage1 from '../../assets/trainer-1.jpg'
import trainerImage2 from '../../assets/trainer-2.jpg'
import trainerImage3 from '../../assets/trainer-3.jpg'
import trainerImage4 from '../../assets/trainer-4.jpg'

const TrainerSection = () => {
  return (
    <section className='flex flex-col lg:flex-row p-5 sm:p-10 md:p-25 justify-center gap-15'>
       <div className='w-full lg:w-150 flex flex-col items-center justify-evenly gap-5'>
            <h2 className='text-2xl sm:text-3xl md:text-5xl'><b>Our Trainers</b></h2>
            <p className='text-3xl text-center'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Button
            textButton={'LEARN MORE'}
            background={'bg-orange-400'}
            border={'border-none'}
            />
       </div>
       <div className='bg-cover grid grid-cols-1 justify-items-center sm:grid-cols-2 gap-6'>
           <img src={trainerImage1} alt="Trainer" className='w-80 h-90'/>
           <img src={trainerImage2} alt="Trainer" className='w-80 h-90'/>
           <img src={trainerImage3} alt="Trainer" className='w-80 h-90'/>
           <img src={trainerImage4} alt="Trainer" className='w-80 h-90'/>
       </div>
    </section>
  )
}

export default TrainerSection
