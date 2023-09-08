import React from 'react'
import Logo from './Logo'
import '../assets/css/button.css'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {

  const location = useLocation();

  const isHidden = location.pathname === '/'

  return (
    <div className='w-full h-[90px] bg-[#000] flex items-center justify-center z-10'>
        <div className={`w-[80%] h-full flex justify-between items-center ${ isHidden ? '' : 'max-[450px]:w-[100%] max-[450px]:justify-center'}`}>
        <Link to={'/'}>
          <Logo />
        </Link>
          { isHidden && 
          <Link to={'/upload'}>
              <button className='button-after border-2 p-[14px] text-white text-[16px] font-roboto overflow-hidden inline-block'>
                Nuevo video
              </button>
            </Link>}
        </div>
    </div>
  )
}

export default Header