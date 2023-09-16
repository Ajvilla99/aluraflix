import React, { useEffect, useState } from 'react'
import ButtonForm from '../../components/ButtonForm'
import Inputs from '../../components/Inputs/Inputs'
import TextArea from '../../components/Inputs/TextArea'
import Table from '../../components/Table'
import axios from 'axios'
import { v4 as uuid } from 'uuid';
import { fetchCategories } from '../../api/api'
import { validData, validDescription, validCode } from '../../validations/validations'
import { isValidColorFormat } from '../../validations/validations'


const FormCategory = (props) => {
  const [ name, setName ] = useState({value: '', valid: null});
  const [ description, setDescription ] = useState({value: '', valid: null});
  const [ color, setColor ] = useState({value: '#000000', valid: null});
  const [ code, setCode ] = useState({value: '', valid: null});
  const [ editCategory, setEditCategory ] = useState(null);
  const [ pageTitle, setPageTitle ] = useState('Nueva categoría');
  const [ categories, setCategories ] = useState([])

  useEffect(() => {
    fetchCategories()
      .then(categories => {
        setCategories(categories);
      })
      .catch(error => {
        console.error('Error al cargar categorías:', error);
      });
  }, []);

  const sendPostRequest = async (data) => {
    try {
      const response = await axios.post('https://json-alura-flix.vercel.app/categories', data);
      console.log('Categoria creada:', response.data);
    } catch (error) {
      console.error('Error al crear la categoria:', error);
    }
  };

  const handleEditCategory = (category) => {
    setName({value: category.name});
    setDescription({ value: category.description});
    setColor({ value: category.color});
    setCode({ value: category.code});
    setPageTitle('Editar Categoria')
    setEditCategory(category);
  };


  const editCategory2 = async (id, updatedData) => {
    try {
      const response = await axios.put(`https://json-alura-flix.vercel.app/categories/${id}`, updatedData);
      console.log('Categoría editada:', response.data);
    } catch (error) {
      console.error('Error al editar la categoría:', error);
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
      if (editCategory !== null) {
        editCategory2(editCategory.id, data);
      } else {
        sendPostRequest(data);
      }
      resetForm();
    }

  const resetForm = () => {
      setName({value: '', valid: null});
      setDescription({value: '', valid: null});
      setColor({value: '#000000', valid: null});
      setCode({value: '', valid: null});
      setPageTitle('Nueva categoría');
      setEditCategory(null);
    };

  return (
    <div className='w-full flex flex-col items-center pt-[50px]'>
        <div className='min-h-[76vh] flex flex-col items-center w-[100%] pb-20' >
        <form onSubmit={ submitHandler } className='w-[90%] flex flex-col items-center max-[450px]:w-full'>
            <h1 className='text-white text-[60px] mb-10 max-[450px]:text-[30px] uppercase'>{ pageTitle }</h1>
            <Inputs 
              placeholder="Nombre"
              type={'text'}
              value={ name.value }
              valid={ name.valid }
              validity={ validData }
              setValue={ setName } 
              warning={'El nombre debe tener minimo 5 caracteres.'}
            />
            <TextArea 
              value={ description.value }
              valid={ description.valid }
              validity={ validDescription }
              setValue={ setDescription }
              warning={'La descripcion debe tener minimo 20 palabras.'}
            />
            <Inputs 
              type="color" 
              placeholder="Color" 
              value={ color.value }
              valid={ color.valid }
              validity={isValidColorFormat}
              setValue={ setColor }
              warning='Selecciona el color'
              />
            <Inputs 
              placeholder="Codigo de seguridad"
              value={ code.value }
              valid={ code.valid }
              validity={ validCode }
              setValue={ setCode }
              warning='El codigo debe tener minimo 6 caracteres entre numeros, letras, mayusculas y minusculas.'
            />
            <div className='w-[90%] flex flex-col justify-between'>
              <div className='flex gap-10 max-[450px]:gap-0 max-[450px]:justify-between'>
                <ButtonForm text="Guardar" type='submit'/>
                <ButtonForm text="Limpiar" onClick={resetForm}/>
              </div>
            </div>
          </form>
              <Table data={categories} clickEdit={handleEditCategory}/>
        </div>
    </div>
  )
}

export default FormCategory