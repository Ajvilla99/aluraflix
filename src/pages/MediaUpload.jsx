import React from 'react'
import Footer from '../components/Footer'
import FormUpload from '../components/Forms/FormUpload'


const MediaUpload = () => {

  return (
      <div className='w-full flex flex-col items-center justify-center bg-[#000000E5] pt-[50px]'>
        <FormUpload />
        <Footer />
      </div>
  
  )
}

export default MediaUpload