import React from 'react'
import Logo from './Logo'
import '../assets/css/button.css'


const Menu = () => {
  return (
    <div className='w-full h-16 bg-black flex items-center justify-center fixed z-10'>
        <div className='w-[90%] h-full flex justify-between items-center'>
        <Logo />
        <button className='button-after border-2 p-[10px] text-white text-[16px] font-roboto overflow-hidden inline-block'>
            Nuevo video
        </button>
        </div>
    </div>
  )
}

export default Menu