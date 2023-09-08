import React from 'react'
import { BsFillTrashFill, BsPencil } from 'react-icons/bs';



const Table = () => {
  return (
    <div className='w-full box-border'>
        <table className='w-full mt-20'>
            <thead>
                <tr className='bg-primary'>
                    <th className="w-[20%] px-4 py-2 text-[#eee] font-semibold uppercase border-x-[2px] border-solid border-[#53585c]">Nombre</th>
                    <th className="w-[50%] px-4 py-2 text-[#eee] font-semibold uppercase border-x-[2px] border-solid border-[#53585c]">Descripción</th>
                    <th className="w-[15%] px-2 py-2 text-[#eee] font-semibold uppercase border-x-[2px] border-solid border-[#53585c]">Editar</th>
                    <th className="w-[15%] px-2 py-2 text-[#eee] font-semibold uppercase border-x-[2px] border-solid border-[#53585c]">Remover</th>
                </tr>
            </thead>
            <tbody className='w-full'>
                <tr className='border-[2px] border-solid border-[#53585c] min-h-[40px]'>
                    <td className='w-[20%] h-full border-x-[2px] border-solid border-[#53585c] px-2 py-2 text-[#eee] text-[18px] font-light'>Lorem, ipsum.</td>
                    <td className='w-[50%] h-full border-x-[2px] border-solid border-[#53585c] px-2 py-2 text-[#eee] text-[18px] font-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, expedita!</td>
                    <td className='w-[15%] h-full border-x-[2px] border-solid border-[#53585c] px-2 py-2 text-[#eee] text-[18px] text-center font-light'><button className='w-full h-[100%] flex items-center justify-center gap-3 hover:text-primary'><BsPencil /> Editar</button></td>
                    <td className='w-[15%] h-full border-x-[2px] border-solid border-[#53585c] px-2 py-2 text-[#eee] text-[18px] text-center font-light'><button className='w-full h-[100%] flex items-center justify-center gap-3 hover:text-warning'><BsFillTrashFill /> Remover</button></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table