import React from 'react'
import Menu from '../components/Menu'
import '../assets/css/section-home.css'
import video from '../assets/img/video-1.png'
import Button from '../components/Button'

const Home = () => {
  return (
    <div className='min-h-screen bg-[#030a1a]'>
        <Menu />
        <section className='section-home bg-img-section bg-cover bg-center w-full h-screen fixed box-border flex items-end justify-center pb-20'>
          <div className='flex justify-between z-[2] w-[90%]'>
            <div className='inline-block w-[50%] font-roboto box-border pt-10'>
              <h1 className='text-white text-[60px] box-bord inline-block p-[10px] bg-[#6BD1FF] '>Front End</h1>
              <h3 className='text-white text-[46px] box-border mt-10'>Challenge React</h3>
              <p  className='text-white text-[18px] font-light leading-5 text-justify box-border pr-10 mt-4'>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </div>
            <div className=''>
              <img src={video} alt='Logo' />
            </div>
          </div>
        </section>
        <section className='w-full flex flex-col'>
          <section className='w-full flex flex-col items-center gap-4 py-5'>
            <div className='w-[90%] flex items-center gap-4'>
             <Button text="Front End" />
             <p className='text-white text-[18px] font-light'>Formación Back End de Alura Latam</p>
             </div>
            <div className='w-[90%] flex items-center justify-between overflow-hidden'>
              <div className='w-[432px] h-[260px] border-white border-solid border-4 cursor-pointer'></div>
              <div className='w-[432px] h-[260px] border-white border-solid border-4 cursor-pointer'></div>
              <div className='w-[432px] h-[260px] border-white border-solid border-4 cursor-pointer'></div>
            </div>
          </section>
        </section>
    </div>
  )
}

export default Home