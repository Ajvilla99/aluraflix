import React from 'react'
import logo from '../assets/img/logo-footer.png'

const Footer = () => {
  return (
    <div className='w-full h-28 relative bottom-0 bg-opacity-0 flex items-center justify-center border-t-2 border-solid border-[#2A7AE4] mt-5'>
        <img className="w-[250px]" src={logo} alt="" />
    </div>
  )
}

export default Footer