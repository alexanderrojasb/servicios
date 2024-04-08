import React from 'react'
import flecha from '../img/flecha.png'
export const Etiqueta2 = () => {
  return (
    <div className='bg-white absolute right-918 top-550 shadow-container rounded-tl-2xl rounded-bl-2xl w-12 h-24'>
        <div className='flex justify-center'>
            <img src={flecha} className=' w-8 mt-8 rotate-180' alt="" />
        </div>
    </div>
  )
}
