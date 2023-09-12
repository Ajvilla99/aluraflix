import React, { useState } from 'react'
import Footer from '../components/Footer'
import FormCategory from '../components/Forms/FormCategory'
import { v4 as uuid } from 'uuid';

const NewCategory = (props) => {

  const [ category, setCategory ] = useState([])

  const createCategory = (newCategory) => {
    setCategory([...category, {...newCategory, id: uuid()} ])
  }

  return (
    <div className='w-full flex flex-col items-center bg-[#000000E5] pt-[50px]'>
        <FormCategory createCategory={createCategory} />
        <Footer />
    </div>
  )
}

export default NewCategory