import React from 'react'
import mas from '../img/mas.png'
import flecha from '../img/flecha.png'
import flechaabajo from '../img/flechaabajo.png'

export const FooterBloque1 = () => {
  return (
    <div className='bg-white sm:mx-auto justify-between rounded-b-2xl w-574 py-3 gap-4 flex'>
      <div>
        <div className='flex justify-between gap-4'>
          <img src={flecha} className=' w-7' alt="" />
          <button className=' flex w-16 h-7 ring justify-center bg-gray-100 gap-4 items-center ring-gray-400 rounded-lg'>1<img src={flechaabajo} className=' w-3 h-2' alt="" /></button>
          <img src={flecha} className=' w-7 rotate-180' alt="" />
        </div>
        <p>Mostrando 3 de 21</p>
      </div>
      <div >
        <button className='bg-violet-blue flex text-white gap-2 font-nunito rounded-xl items-center justify-center w-365 px-3 py-3'><img src={mas} className=' w-6' /> Registrar reserva externa</button>
      </div>
    </div>
  )
}
