import axios from 'axios';
import React, { useEffect, useState } from 'react'


const SelectCategory = ({ setValue, value, valid ,validity ,required, warning}) => {

      const [data, setData] = useState([])
        useEffect(() => {
          axios
            .get('https://json-alura-flix.vercel.app/categories')
            .then((response) => {
              setData(response.data);
            })
            .catch((error) => {
              console.log('Error de: ', error);
            });
        });
  
        const handleChange = (e) => {
          const value = e.target.value          
          setValue({ value: value, valid: validity(value)});
        };

        const [touched, setTouched] = useState(false);
        const handleBlur = () => {
          setTouched(true);
        };

        const border = valid  ? 'border-b-[4px] border-solid border-primary' : ''
        const borderRed = !valid && touched ? 'border-b-[4px] border-solid border-warning' : ''

    return (
      <div className='w-full flex flex-col items-center justify-center mb-8 relative'>
        <select 
          value={ value } 
          onChange={ handleChange } 
          required={ required}
          onBlur={ handleBlur }
          className={`bg-[#53585D] w-[90%] text-white text-[18px] rounded-[4px] outline-none indent-5 py-[12px] ${border} ${borderRed}`}
        >
          <option className='' value="" disabled hidden>
            Seleccionar equipo
          </option>
          {
             data?.map((data, index)=> <option key={index} value={data.id}>{data.name}</option>)
          }
        </select>
        <span className={`${ !valid && touched ? '' : 'hidden'} absolute bottom-[-55%] w-[90%] py-[4px] text-left text-warning box-border`}>
          {warning}
        </span>
      </div>
    );
  };
  
  export default SelectCategory;