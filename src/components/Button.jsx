import React from 'react'

const Button = ({ text, color }) => {

  const bgButton = { backgroundColor: color }

  return (
    <div>
        <button style={ bgButton }  className='h-[60px] text-white text-[35px] p-[14px] rounded-[2px] box-border max-[450px]:text-[24px] max-[450px]:max-w-[200px]'>
            { text }
        </button>
    </div>

  )
}

export default Button