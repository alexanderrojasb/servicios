import React from 'react'

export const Estadisticas = ({texto1, texto2, texto3, texto4, texto5, texto6, texto7}) => {
  return (
    <>
      <strong className='text-lg mx-6 text-purple-dark'>{texto1 || 'Estadísticas generales'}</strong>
      <div className='mx-6 pb-3 max-h-24 overflow-y-scroll'>
          <div className='flex justify-between font-nunito'>{texto6 || 'Servicios del mes'}<p>{texto2 || '31'}</p></div>
          <div className='flex justify-between font-nunito'>{texto7 || 'Ingreso del mes'}<p>{texto3 || 'S/ 312'}</p></div>
          <div className='flex justify-between font-nunito'>Servicios completados <p>{texto4 || '21'}</p></div>
          <div className='flex justify-between font-nunito'>Servicios completados <p>{texto5 || '21'}</p></div>
          <div className='flex justify-between font-nunito'>Consulta cardiológica <p>10:00 AM</p></div>
      </div>
    </>
  )
}
