import React from 'react'

const TextArea = ({ value, setValue }) => {

  const setChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className='w-full flex flex-col items-center justify-center mb-8'>
        <textarea placeholder='Descripción' value={ value } onChange={ setChange }
        className='bg-[#53585D] w-[90%] h-[180px] pl-[20px] pt-[12px] text-[18px] text-white outline-none resize-none placeholder:text-[#C2C2C2]'></textarea>
    </div>
  )
}

export default TextArea