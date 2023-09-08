import React, { useState } from 'react'
import ButtonForm from '../../components/ButtonForm'
import Inputs from '../../components/Inputs/Inputs'
import TextArea from '../../components/Inputs/TextArea'
import Table from '../../components/Table'
import axios from 'axios'
import { v4 as uuid } from 'uuid';

const FormCategory = (props) => {
  const [ name, setName ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ color, setColor ] = useState('')
  const [ code, setCode ] = useState('')

  const sendPostRequest = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/categories', data);
      console.log('Categoria creada:', response.data);
    } catch (error) {
      console.error('Error al crear la categoria:', error);
    }
  };

  const submitHandler = (e) => {
      e.preventDefault()
      let data = {
        id: uuid() ,
        name,
        description,
        color,
        code,
      }
      sendPostRequest(data);
      resetForm();
  } 

  const resetForm = () => {
      setName('');
      setDescription('');
      setColor('');
      setCode('');
    };

  return (
    <div className='w-full flex flex-col items-center pt-[50px]'>
        <div className='min-h-[76vh] flex flex-col items-center w-[100%] pb-20' >
        <form onSubmit={ submitHandler } className='w-[90%] flex flex-col items-center max-[450px]:w-full'>
            <h1 className='text-white text-[60px] mb-10 max-[450px]:text-[30px] uppercase'>Nueva categoria</h1>
            <Inputs placeholder="Nombre" value={ name } setValue={ setName } warning='mensaje'/>
            <TextArea  value={ description } setValue={ setDescription } warning='mensaje'/>
            <Inputs type="color" placeholder="Color" value={ color } setValue={ setColor } warning='mensaje'/>
            <Inputs placeholder="Codigo de seguridad" value={ code } setValue={ setCode } warning='mensaje'/>
            <div className='w-[90%] flex flex-col justify-between'>
              <div className='flex gap-10 max-[450px]:gap-0 max-[450px]:justify-between'>
                <ButtonForm text="Guardar" type='submit'/>
                <ButtonForm text="Limpiar" onClick={resetForm}/>
              </div>
              <Table />
            </div>
          </form>
        </div>
    </div>
  )
}

export default FormCategory