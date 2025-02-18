import React from 'react';
import banner1 from '../../assets/banner-1.jpg'
import Title from '../Title/Title';
import Button from '../Button/Button';

const BookSection = () => {
  return (
    <section className='flex justify-around items-center flex-col h-150 w-full bg-cover mt-10' style={{backgroundImage: `url(${banner1})`}}>
       <Title>
         <h2 className='text-white text-2xl sm:text-4xl animate-slideDown'>Work Hard Get Results</h2>
       </Title>
       <Button
       className="animate-slideUp" 
       background={'bg-orange-400'} 
       textButton={'BOOK A TOUR TODAY'}
       border={'border-none'}
       animation={'animate-slideUp'}
       />
    
    </section>
  )
}

export default BookSection
