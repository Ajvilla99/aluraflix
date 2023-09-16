import React, { useState } from 'react'

const Inputs = ( props ) => {

  const { type = 'text', placeholder, value, required, setValue ,warning, valid, validity} = props
  const [touched, setTouched] = useState(false);
  
  const handleChange = (e) => {
    const value = e.target.value
    setValue({ value: value, valid: validity(value)});
  }

  const handleBlur = () => {
    setTouched(true);
  };
  
  const border = valid && type !== 'color' ? 'border-b-[4px] border-solid border-primary' : ''
  const borderRed = !valid && type !== 'color' && touched ? 'border-b-[4px] border-solid border-warning' : ''


  return (
    <div className='w-full flex flex-col items-center justify-center mb-8 relative'>
        <input  type={type}
                placeholder={ placeholder } 
                value={ value }
                required={required}
                onChange={ handleChange }
                onBlur={ handleBlur }
                className={`bg-[#53585D] w-[90%] text-white text-[18px] rounded-[4px] outline-none indent-5 py-[12px] placeholder:text-[#C2C2C2] ${ type === 'color' ? ' h-[40px] py-[5px] px-[20px]' : ''} ${border} ${borderRed}`}
        />
          <span className={`${ !valid && touched ? '' : 'hidden'}  absolute bottom-[-55%] w-[90%] py-[4px] text-left text-warning box-border`}>{warning}</span>

        </div>
  )
}

export default Inputs