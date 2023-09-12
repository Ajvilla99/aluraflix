import React, { useEffect, useState } from 'react';
import '../assets/css/section-home.css';
import Footer from '../components/Footer';
import axios from 'axios';
import Categories from '../components/Categories';
import { fetchCategories } from '../api/api';
import GetCards from '../components/GetCards';
import { upload } from '@testing-library/user-event/dist/upload';


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
      .get('https://json-alura-flix.vercel.app/uploads')
      .then((response) => {
        setUploads(response.data);
      })
      .catch((error) => {
        console.log('Error de: ', error);
      });
  }, []);

  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (cardData) => {
    setSelectedCard(cardData);
  };

  return (
    <div className='min-h-screen bg-[#030a1a] overflow-hidden'>
        <section className='section-home bg-img-section bg-cover bg-center w-full h-[80vh] fixed box-border flex items-end justify-center pb-20 px-[10%]'>
        <GetCards uploadData={upload} data={selectedCard} dataCategories={categories} />
        </section>
        <section className='w-full flex flex-col px-[10%]'>
        {categories.map((category, index) => (
          <Categories dataCards={uploads.filter((upload) => upload.category === category.id)} onClick={handleCardSelect} data={category} key={index}/> ))}
        </section>
        <Footer/> 
    </div>
  )
}

export default Home