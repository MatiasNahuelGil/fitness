import React from 'react'
import Button from '../Button/Button'
import AmenitiesCard from './AmenitiesCard/AmenitiesCard'
import amenities1 from '../../assets/amenities-1.jpg'
import amenities2 from '../../assets/amenities-2.jpg'
import amenities3 from '../../assets/amenities-3.jpg'
import amenities4 from '../../assets/amenities-4.jpg'
import amenities5 from '../../assets/amenities-5.jpg'
import amenities6 from '../../assets/amenities-6.jpg'


const AmenitiesSection = () => {
  return (
    <section className='flex flex-col items-center justify-center mt-70'>
        <div className='text-center'>
            <h2 className='text-3xl sm:text-5xl'><b>Amenities</b></h2>
            <p className='w-160 mt-10  sm:text-2xl'>Modern design and comfortable, all-inclusive luxury. With our extensive range of amenities, that includes sprawling outdoor terraces, we offer a space unlike any other in New York City. You'll love your time here.</p>
        </div>
        <div className='p-15 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-7'>
           <AmenitiesCard backImage={amenities1}>
             <Button
               textButton={'OUTDOOR SPACES'}
               background={'bg-orange-400'}
               border={'border-none'}
             />
           </AmenitiesCard>
           <AmenitiesCard backImage={amenities2}>
             <Button
               textButton={'SAUNA'}
               background={'bg-orange-400'}
               border={'border-none'}
             />
           </AmenitiesCard>
           <AmenitiesCard backImage={amenities3}>
             <Button
               textButton={'BASKETBALL COURT'}
               background={'bg-orange-400'}
               border={'border-none'}
             />
           </AmenitiesCard>
           <AmenitiesCard backImage={amenities4}>
             <Button
               textButton={'STUDIOS'}
               background={'bg-orange-400'}
               border={'border-none'}
             />
           </AmenitiesCard>
           <AmenitiesCard backImage={amenities5}>
             <Button
               textButton={'POOL AND JACUZZI'}
               background={'bg-orange-400'}
               border={'border-none'}
             />
           </AmenitiesCard>
           <AmenitiesCard backImage={amenities6}>
             <Button
               textButton={'LOUNGE AND CAFE'}
               background={'bg-orange-400'}
               border={'border-none'}
             />
           </AmenitiesCard>
            
           
        </div> 
    </section>
  )
}

export default AmenitiesSection
