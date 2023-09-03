import React from 'react'

const Button = ({ text }) => {
  return (
    <div>
        <button className='bg-front h-[60px] text-white text-[35px] p-[14px] rounded-[4px] box-border'>
            { text }
        </button>
    </div>

  )
}

export default Button