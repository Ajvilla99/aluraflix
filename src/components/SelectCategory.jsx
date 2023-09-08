import axios from 'axios';
import React, { useEffect, useState } from 'react'


const SelectCategory = (props) => {

      const [data, setData] = useState([])
        useEffect(() => {
          axios
            .get('http://localhost:5000/categories')
            .then((response) => {
              setData(response.data);
            })
            .catch((error) => {
              console.log('Error de: ', error);
            });
        });
  
        const handleCategoryChange = (e) => {
          props.setValue(e.target.value);
        };

    return (
      <div className='w-full flex flex-col items-center justify-center mb-8 relative'>
        <select value={ props.category } onChange={ handleCategoryChange } className="bg-[#53585D] w-[90%] text-white text-[18px] rounded-[4px] outline-none indent-5 py-[12px]"
          required={props.required}
        >
          <option className='' value="" disabled hidden>
            Seleccionar equipo
          </option>
          {
             data?.map((data, index)=> <option key={index} value={data.id}>{data.name}</option>)
          }
        </select>
        <span className='hidden absolute bottom-[-55%] w-[90%] py-[4px] text-left text-warning box-border border-solid border-t-[4px] border-warning'>
          Seleccionar Categoria
        </span>
      </div>
    );
  };
  
  export default SelectCategory;