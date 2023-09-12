import React from 'react'

const Cards = ( props ) => {

  return (
    <div>
        <div style={ props.color } className='w-[432px] h-[245px] border-[4px] border-solid cursor-pointer mr-[20px]
          max-[450px]:w-[280px] max-[450px]:h-[180px]'>
            <button onClick={() => props.onClick()} className='w-full h-full flex items-center justify-center content-center'>
              <img className='w-full h-full' src={props.src} alt={props.name} />
            </button>
        </div>
    </div>
  )
}

export default Cards