import React from 'react'
import Button from './Button'

const Categories = (props) => {

    const { id, name, description, color } = props.data
    const card = props.dataCards
    const changeStyle = { borderColor: color }
  return (
    <section className='w-full flex flex-col items-center gap-4 py-5'>
            <div className='w-full flex items-center gap-4'>
             <Button color={color} text={ name } />
             <p className='text-white text-[18px] font-light'>{description}</p>
             </div>
            <div className='w-full flex items-center justify-between overflow-hidden'>
              { card.map((img, index) => (
                  <div style={ changeStyle } key={index} className='w-[432px] h-[260px] border-[4px] border-solid cursor-pointer mr-[20px]'>
                    <button className='w-full h-full flex items-center justify-center content-center'>
                      <img src={img.urlImage} alt={img.name} />
                    </button>
                  </div>
                ))
              }
            </div>
          </section>
  )
}

export default Categories