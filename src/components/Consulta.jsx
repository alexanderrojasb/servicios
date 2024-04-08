import React from 'react'
import mensaje from '../img/mensaje.svg'
import documento from '../img/documento.svg'
import { ConsultaFooter } from './ConsultaFooter'

export const Consulta = ({ children}) => {
  return (
    <>
        <div className='flex justify-between pt-2'>
            <div className='flex gap-2'>
                <p>000123</p>
                <p className='text-violet-blue'>|</p>
                <p>Consulta dermatológica</p>
            </div>
            <div className='flex gap-5'>
                <img src={mensaje} alt="" />
                <img src={documento} alt="" />
            </div>
        </div>
        <div className='flex justify-between text-sm my-3'>
            <div>
                <p className='font-nunito'><strong>Cliente:</strong> Luis Alfonso Gutierrez Suarez</p>
                <p className='font-nunito'><strong>Mascota:</strong> Coco</p>
                <p>Av.Direccion 123, Santiago de Surco</p>
            </div>
            <div className='font-nunito'>
                <strong className='text-purple-dark text-base'>{children}</strong>
                <p className='text-sm pl-5'>12:30 - 13:30</p>
            </div>
        </div>
        
    </>
  )
}
