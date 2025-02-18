import React from 'react'
import Title from '../Title/Title'
import BeneficCard from './BeneficCard/BeneficCard'
import working1 from '../../assets/working-1.jpg'
import working2 from '../../assets/working-2.jpg'
import working3 from '../../assets/working-3.jpg'
import working4 from '../../assets/working-4.jpg'

const BeneficsSection = () => {
  return (
    <section className='bg-orange-300 w-full h-auto p-5'>
      <Title>
        <h2 className='text-3xl md:text-5xl p-5'>Benefits of sport training</h2>
      </Title>
      <div className='flex flex-col md:flex-row items-center justify-around'>
        <BeneficCard
        title={'Agility'}
        text={'Maximize your potential with speed and precision. Master the movements and push your limits. Enhance coordination and build agility.'}
        />
         <BeneficCard
        title={'Strength'}
        text={'Strength is built through consistency and hard work. Challenge your muscles and embrace the journey. Achieve peak performance each day.'}
        />
         <BeneficCard
        title={'Quickness'}
        text={'Quickness is the key to gaining the upper hand. Sharpen reflexes and accelerate responses. Outpace the competition with sharp agility.'}
        />
         <BeneficCard
        title={'Power'}
        text={'True power comes from inner drive and focus. Harness your energy to overcome obstacles. Build endurance and unleash your strength.'}
        />
      </div>
      <div className='flex flex-col md:flex-row gap-15 justify-center  items-center '>
        <img src={working1} alt="working gim" className='w-70 h-80 mt-15 animate-slideDown'/>
        <img src={working2} alt="working gim" className='w-70 h-90 mt-15 md:mt-50 animate-slideUp'/>
        <img src={working3} alt="working gim" className='w-70 h-90 mt-15 animate-slideDown'/>
        <img src={working4} alt="working gim" className='w-70 h-90 mt-15 md:mt-50 animate-slideUp'/>
      </div>
    </section>
  )
}

export default BeneficsSection
