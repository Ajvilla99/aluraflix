import React, { useEffect, useState } from 'react'
import ButtonForm from '../../components/ButtonForm'
import Inputs from '../../components/Inputs/Inputs'
import TextArea from '../../components/Inputs/TextArea'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { v4 as uuid } from 'uuid';
import SelectCategory from '../SelectCategory'


const FormUpload = (props) => {

    const [ title, setTitle ] = useState('')
    const [ urlVideo, setUrlVideo] = useState('')
    const [ urlImage, setUrlImage ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ author, setAuthor ] = useState('')
    const [category, setCategory] = useState('');

    const sendPostRequest = async (data) => {
      try {
        const response = await axios.post('http://localhost:5000/uploads', data);
        console.log('Video creado:', response.data);
      } catch (error) {
        console.error('Error al crear el video:', error);
      }
    };

    const submitHandler = (e) => {
      e.preventDefault();
      let data = {
        id: uuid(),
        title,
        urlVideo,
        urlImage,
        description,
        category,
        author,
      };
      sendPostRequest(data);
      resetForm();
    }
  
    const resetForm = () => {
      setTitle('');
      setUrlVideo('');
      setUrlImage('');
      setDescription('');
      setAuthor('');
    };

  return (
    <div className='w-full flex flex-col items-center pt-[50px]'>
        <div className='min-h-[76vh] flex flex-col items-center w-[100%] pb-20'>
          <form onSubmit={ submitHandler } className='w-[90%] flex flex-col items-center max-[450px]:w-full'>
            <h1 className='text-white text-[60px] mb-10 uppercase max-[450px]:text-[35px]'>Nuevo Video</h1>
            <Inputs placeholder="Titulo" value={ title } setValue={setTitle} />
            <Inputs placeholder="Link del video" value={ urlVideo } setValue={setUrlVideo} type='url'/>
            <Inputs placeholder="Link de la imagen del video" value={ urlImage } setValue={setUrlImage} type='url'/>
            <TextArea  value={ description } setValue={ setDescription }/>
            <SelectCategory category={category} setValue={ setCategory } required/>
            <Inputs placeholder="Autor" value={ author } setValue={ setAuthor } />
            <div className='w-[90%] flex justify-between max-[450px]:flex-col max-[450px]:gap-5'>
              <div className='flex gap-10'>
                <ButtonForm text="Guardar" type='submit'/>
                <ButtonForm text="Limpiar" onClick={resetForm} />
              </div>
              <Link to={'/newCategory'}>
                <ButtonForm text="Nueva categoria"/>
              </Link>
            </div>
          </form>
        </div>
    </div>
  )
}

export default FormUpload