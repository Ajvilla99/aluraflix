import React from 'react';
import logo from '../assets/img/logo.png';

function Logo() {
  return (
    <div className='flex max-[450px]:w-[100%] max-[450px]:items-center max-[450px]:justify-center'>
      <img className='transition-all ease-linear delay-100 hover:scale-105 w-full' src={logo} alt="Mi Imagen" />
    </div>
  );
}

export default Logo;