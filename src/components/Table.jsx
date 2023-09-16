import React from 'react'
import { BsFillTrashFill, BsPencilFill } from 'react-icons/bs';

const Table = ({ data, clickEdit }) => {

  return (
    <div className='w-[90%] flex flex-col justify-center items-center box-border '>
        <div className='w-[90%] h-[40px] flex items-center border-solid border-x-[3px] border-primary bg-primary mt-10 max-[450px]:w-full'>
            <div className=' max-[750px]:text-[14px] min-w-[90px] w-[22%] h-full px-[10px] border-r-[3px] border-solid border-[#81888f] flex items-center text-[#eee] text-[18px] font-semibold uppercase max-[450px]:text-[14px] max-[550px]:p-0 max-[550px]:justify-center max-[550px]:overflow-hidden'><span>nombre</span></div>
            <div className=' max-[750px]:text-[14px] min-w-[90px] w-[50%] h-full px-[10px] border-r-[3px] border-solid border-[#81888f] flex items-center text-[#eee] text-[18px] font-semibold uppercase max-[450px]:text-[14px] max-[550px]:p-0 max-[550px]:justify-center max-[550px]:overflow-hidden'><span>descripcion</span></div>
            <div className=' max-[750px]:text-[14px] min-w-[80px] w-[14%] h-full border-r-[3px] border-solid border-[#81888f] flex items-center text-[#eee] text-[18px] font-semibold uppercase gap-2'><span className='w-full h-full flex items-center justify-center max-[450px]:text-[14px]'>editar</span></div>
            <div className=' max-[750px]:text-[14px] min-w-[80px] w-[14%] h-full flex items-center text-[#eee] text-[18px] font-semibold uppercase gap-2'><span className='w-full h-full flex items-center justify-center max-[450px]:text-[14px]'>Remover</span></div>
        </div>
        {
            data.map((value, index) => 
                <div key={index} className='w-[90%] h-[40px] flex items-center border-b-[3px] border-x-[3px] border-solid border-[#53585D] max-[450px]:w-full'>
                    <div className='max-[750px]:text-[14px] min-w-[90px] w-[22%] h-full px-[10px] border-r-[3px] border-solid border-[#81888f] flex items-center text-[#eee] text-[16px] font-light'><span className='first-letter:uppercase max-[450px]:text-[14px] line-clamp-1'>{value.name}</span></div>
                    <div className='max-[750px]:text-[14px] min-w-[90px] w-[50%] h-full px-[10px] border-r-[3px] border-solid border-[#81888f] flex items-center text-[#eee] text-[16px] font-light first-letter:uppercase'><span className='first-letter:uppercase line-clamp-1 max-[450px]:text-[14px]'>{ value.description }</span></div>
                    <div className='max-[750px]:text-[14px] min-w-[80px] w-[14%] h-full border-r-[3px] border-solid border-[#81888f] flex items-center text-[#eee] text-[16px] font-light text-center'><button onClick={() => clickEdit(value)}  className='w-full h-full flex gap-2 items-center justify-center hover:text-primary max-[450px]:text-[14px]'><BsPencilFill /><span className='max-[750px]:hidden'>Editar</span></button></div>
                    <div className='max-[750px]:text-[14px] min-w-[80px] w-[14%] h-full flex items-center text-[#eee] text-[16px] font-light text-center'><button className='w-full h-full flex gap-2 items-center justify-center hover:text-warning max-[450px]:text-[14px]'><BsFillTrashFill /><span className='max-[750px]:hidden'>Remover</span></button></div>
                </div>
            )
        }
    </div>
  )
}

export default Table