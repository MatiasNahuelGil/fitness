

const BeneficCard = ({title,text}) => {
  return (
    <div className='flex flex-col w-60 h-80 mt-10 bg-white p-5 items-center justify-around text-center animate-slideDown'>
       <h3 className="text-2xl"><b>{title}</b></h3>
       <p>{text}</p>
       <b><u>MORE</u></b>
    </div>
  )
}

export default BeneficCard
