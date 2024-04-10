import React from 'react'

export const HeaderBloque1 = ({showBloque2}) => {
  return (
    <div className={`flex overflow-x-scroll overflow-hidden snap-x scroll-smooth gap-2 ${showBloque2 ? 'max-w-577' : 'w-full'}`}>
        <a className='flex text-lg justify-center items-center gap-2 bg-gray-200 font-nunito rounded-t-2xl py-2 px-6'>
        Hoy
        </a>
        <a className='flex text-lg justify-center items-center gap-2 bg-gray-200 font-nunito rounded-t-2xl py-2 px-6'>
        Reservados
        </a>
        <a className='flex text-lg justify-center items-center gap-2 bg-gray-200 font-nunito rounded-t-2xl py-2 px-6'>
        Completados
        </a>
        <a className='flex text-lg justify-center items-center gap-2 bg-white font-nunito rounded-t-2xl py-2 px-6'>
        Todos
        </a>
        <a className='flex text-lg justify-center items-center gap-2 bg-gray-200 font-nunito rounded-t-2xl py-2 px-6'>
        Cancelados
        </a>
        <a className='flex text-lg justify-center items-center gap-2 bg-gray-200 font-nunito rounded-t-2xl py-2 px-6'>
        Reprogramaciones
        </a>
    </div>
  )
}
