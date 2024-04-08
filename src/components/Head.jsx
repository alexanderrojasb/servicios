import React from 'react'
import campana from '../img/campana.svg'

export const Head = () => {
  return (
    <header className="flex justify-between  font-nunito">
        <strong className=" text-2xl text-purple-dark">Servicios</strong>
        <div className='flex gap-5'>
        <img src={campana} alt="" />
        {/* <label className="relative inline-flex cursor-pointer items-center">
          <input type="checkbox" value="" className="peer sr-only" />
          <div
            className=" flex items-center gap-4 rounded-lg px-3 py-1 after:absolute after:left-1 after: after:h-6 after:w-16 after:rounded-lg after:bg-violet-700/40 after:text-white after:transition-all after:content-[''] peer-checked:bg-violet-light peer-checked:after:translate-x-full peer-focus:outline-none dark:bg-violet-light text-sm checked:text-white text-black"
          >
            <span>Abierto</span>
            <span>Cerrado</span>
          </div>
        </label> */}
        <div className=' bg-violet-light flex items-center gap-3 rounded-lg font-nunito'>
            <p className='text-white bg-violet-light2 justify-center rounded-lg py-1 px-2'>Abierto</p>
            <p className='justify-center py-1 pr-2'>Cerrado</p>
        </div>
        </div>
    </header>
  )
}
