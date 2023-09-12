import React from 'react'
import Button from './Button'

const Equipo = ({ data, data2}) => {
  
  const { name } = data
  const images  = data2

  return (
    <div>
          <section className='w-full flex flex-col items-center gap-4 py-5'>
            <div className='w-[80%] flex items-center gap-4'>
             <Button text={ `category` } />
             <p className='text-white text-[18px] font-light'>{ name }</p>
             </div>
            <div className='w-[80%] flex items-center justify-between overflow-hidden'>
              {
                images.map((img, index) => (
                <div className='max-w-[432px] max-h-[260px] border-white border-solid border-4 cursor-pointer mr-[20px]' key={index}>
                  <button className='w-full h-full flex items-center justify-center content-center'>
                    <img className='' src={ img.img } alt={ name } />
                  </button>
                </div>
                ))
              }
            </div>
          </section>
    </div>
  )
}

export default Equipo