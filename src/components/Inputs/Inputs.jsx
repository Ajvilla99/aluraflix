import React from 'react'

const Inputs = ( props ) => {

  const { type = 'text', placeholder, value, required, setValue, warning } = props

  const setChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className='w-full flex flex-col items-center justify-center mb-8 relative'>
        <input type={type} placeholder={ placeholder } value={ value } required={required} onChange={ setChange }
          className={`bg-[#53585D] w-[90%] text-white text-[18px] rounded-[4px] outline-none indent-5 py-[12px] placeholder:text-[#C2C2C2] ${ type === 'color' ? ' h-[40px] py-[5px] px-[20px]' : ''}`}
        />
        <span className='hidden absolute bottom-[-55%] w-[90%] py-[4px] text-left text-warning box-border border-solid border-t-[4px] border-warning'>{ warning }</span>
    </div>
  )
}

export default Inputs