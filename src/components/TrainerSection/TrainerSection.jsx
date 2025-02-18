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
            <p className='text-3xl text-center'>Our trainers are dedicated to helping individuals reach their full potential. They provide expert guidance, ensuring that every participant receives the support needed to succeed. With a focus on progress and personal growth, they offer tailored exercises and feedback. Whether you're looking to improve strength, endurance, or flexibility, our trainers are committed to your success every step of the way. Their knowledge and passion for fitness make them invaluable assets to your journey.</p>
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
