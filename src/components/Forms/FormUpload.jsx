import React, { useEffect, useState } from 'react'
import ButtonForm from '../../components/ButtonForm'
import Inputs from '../../components/Inputs/Inputs'
import TextArea from '../../components/Inputs/TextArea'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { v4 as uuid } from 'uuid';
import SelectCategory from '../SelectCategory'
import { isValidURL, validData, validDescription, isSelectValid } from '../../validations/validations'
import Table from '../Table'
import { fetchUploads } from '../../api/api'


const FormUpload = (props) => {

    const [ name, setName ] = useState({ value: '', valid: null})
    const [ urlVideo, setUrlVideo] = useState({ value: '', valid: null})
    const [ urlImage, setUrlImage ] = useState({ value: '', valid: null})
    const [ description, setDescription ] = useState({ value: '', valid: null})
    const [ author, setAuthor ] = useState({ value: '', valid: null})
    const [ category, setCategory ] = useState({ value: '', valid: null});
    const [ pageTitle, setPageTitle ] = useState('nuevo video');
    const [ editVideo, setEditVideo ] = useState(null);

    const [ video, setVideo ] = useState([])
    useEffect(() => {
      fetchUploads()
        .then(video => { 
          setVideo(video)
        })
        .catch( error => {
          console.error('Error al cargar datos!')
        })
    })

    const sendPostRequest = async (data) => {
      try {
        const response = await axios.post('https://json-alura-flix.vercel.app/uploads', data);
        console.log('Video creado:', response.data);
      } catch (error) {
        console.error('Error al crear el video:', error);
      }
    };
  
    const editUpload = async (id, updatedData) => {
      try {
        const response = await axios.put(`https://json-alura-flix.vercel.app/uploads/${id}`, updatedData);
        console.log('Video editado:', response.data);
      } catch (error) {
        console.error('Error al editar la categoría:', error);
      }
    };

    const handleEditCategory = (upload) => {
      setName({value: upload.name, valid: validData(upload.name)});
      setUrlVideo({ value: upload.urlVideo, valid: isValidURL(upload.urlVideo)});
      setUrlImage({ value: upload.urlImage, valid: isValidURL(upload.urlImage)});
      setDescription({ value: upload.description, valid: validDescription(upload.description)});
      setCategory({ value: upload.category, valid: isSelectValid(upload.category)});
      setAuthor({ value: upload.author, valid: validData(upload.author)})
      setPageTitle('editar video')
    };

    const submitHandler = (e) => {
      e.preventDefault();

      let data = {
        id: uuid(),
        name,
        urlVideo,
        urlImage,
        description,
        category,
        author,
      };
      if (editVideo !== null) {
        editUpload(editVideo.id, data);
      } else {
        sendPostRequest(data)
      }
      resetForm();
    }
  
    const resetForm = () => {
      setName({ value: '', valid: null});
      setUrlVideo({ value: '', valid: null});
      setUrlImage({ value: '', valid: null});
      setDescription({ value: '', valid: null});
      setAuthor({ value: '', valid: null});
      setPageTitle('nuevo video')
      setEditVideo(null);
    };

  return (
    <div className='w-full flex flex-col items-center pt-[50px]'>
        <div className='min-h-[76vh] flex flex-col items-center w-[100%] pb-20'>
          <form onSubmit={ submitHandler } className='w-[90%] flex flex-col items-center max-[450px]:w-full'>
            <h1 className='text-white text-[60px] mb-10 uppercase max-[450px]:text-[35px]'>{pageTitle}</h1>
            <Inputs 
              placeholder="Titulo" 
              value={ name.value } 
              setValue={ setName } 
              valid={ name.valid }
              validity={ validData }
              warning={'El titulo debe tener minimo 5 caracteres.'}
            />
            <Inputs 
              placeholder="Link del video" 
              value={ urlVideo.value }
              valid={ urlVideo.valid }
              validity={ isValidURL }
              setValue={setUrlVideo} 
              warning={'Debe ser una url valida.'}
              type='url'
              />
            <Inputs 
              placeholder="Link de la imagen del video" 
              value={ urlImage.value }
              valid={ urlImage.valid }
              validity={ isValidURL }
              setValue={setUrlImage} 
              type='url'
              warning={'Debe ser una url valida.'}
              required
              />
            <TextArea  
              value={ description.value } 
              setValue={ setDescription }
              valid={ description.valid }
              validity={ validDescription }
              warning={'La descripcion debe tener minimo 20 palabras.'}
              required
              />
            <SelectCategory 
              value={ category.value }
              valid={ category.valid }
              setValue={ setCategory } 
              validity={ isSelectValid }
              warning={'Debe seleccionar una categoria valida'}
              required
              />
            <Inputs 
              placeholder="Autor" 
              value={ author.value } 
              setValue={ setAuthor }
              valid={ author.valid }
              validity={ validData }
              warning={ 'El titulo debe tener minimo 5 caracteres.' }
              />
            <div className='w-[90%] flex justify-between max-[450px]:flex-col max-[450px]:gap-5'>
              <div className='flex gap-10 max-[750px]:gap-2'>
                <ButtonForm text="Guardar" type='submit'/>
                <ButtonForm text="Limpiar" onClick={resetForm} />
              </div>
              <Link to={'/newCategory'}>
                <ButtonForm text="Nueva categoria"/>
              </Link>
            </div>
          </form>
          <Table  data={video} clickEdit={handleEditCategory}/>
        </div>
    </div>
  )
}

export default FormUpload