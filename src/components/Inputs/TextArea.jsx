import React, { useState } from 'react'

const TextArea = (props) => {

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
      <textarea 
        placeholder={ placeholder }
        value={ value }
        onChange={ handleChange }
        onBlur={ handleBlur }
        required={ required }
        className={`bg-[#53585D] w-[90%] h-[180px] pl-[20px] pt-[12px] pr-[10px] text-[18px] text-white outline-none resize-none placeholder:text-[#C2C2C2] ${border} ${borderRed}`}>
      </textarea>
      <span className={`${ !valid && touched ? '' : 'hidden'} absolute bottom-[-15%] w-[90%] py-[4px] text-left text-warning box-border`}>{warning}</span>
    </div>
  )
}

export default TextArea