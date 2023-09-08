import React, { useEffect, useState } from 'react'
import '../assets/css/section-home.css'
import Footer from '../components/Footer'
import axios from 'axios';
import Categories from '../components/Categories'
// import Equipo from '../components/Equipo';
// import { v4 as uuid } from 'uuid';
import { fetchCategories } from '../api/api';

const Home = () => {


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

  const [ uploads, setUploads ] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5000/uploads')
      .then((response) => {
        setUploads(response.data);
      })
      .catch((error) => {
        console.log('Error de: ', error);
      });
  }, []);

  return (
    <div className='min-h-screen bg-[#030a1a] '>
        <section className='section-home bg-img-section bg-cover bg-center w-full h-screen fixed box-border flex items-end justify-center pb-20 px-[10%]'>
          <div className='flex justify-between z-[2] w-[100%]'>
            <div className='inline-block w-[50%] font-roboto box-border pt-10'>
              <h1 className='text-white text-[60px] box-bord inline-block p-[10px] bg-[#6BD1FF] '>Front End</h1>
              <h3 className='text-white text-[46px] box-border mt-10'>Challenge React</h3>
              <p  className='text-white text-[18px] font-light leading-5 text-justify box-border pr-10 mt-4'>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </div>
            <div className=''>
            <iframe width="560" height="315" src='https://www.youtube.com/embed/ov7vA5HFe6w?si=R3NVmBD8TkxZncQ5' title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
          </div>
        </section>
        <section className='w-full flex flex-col px-[10%]'>
        {categories.map((category, index) => (
          <Categories dataCards={uploads.filter((upload) => upload.category === category.id)} data={category} key={index} /> ))}
        </section>
        <Footer/> 
    </div>
  )
}

export default Home