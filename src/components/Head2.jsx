import React from 'react'
import buscador from '../img/buscador.svg'

export const Head2 = () => {
  return (
    <header className="flex justify-between my-6  font-nunito">
        <div className='flex items-center justify-center gap-8'>
            <strong className="text-lg font-nunito text-violet-blue">Ordenar por:</strong>
            <p>Lugar de compra</p>
            <p>Factura</p>
            <p>Más próximo</p>
            <p>Ingreso</p>
            <p>Ubicación</p>
        </div>
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <img src={buscador} alt="" />
            </div>
            <input type="search" id="default-search" className="block w-336 p-2 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-violet-blue focus:border-violet-blue" placeholder="Buscar cliente o servicio" required />
        </div>
        {/* <input className="w-428 h-7 bg-gray-search2 ring ring-gray-300 rounded-md text-sm px-4" type="search" placeholder='Buscar cliente o servicio'/> */}
    </header>
  )
}
