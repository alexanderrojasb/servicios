import React, { Children } from 'react'
import logo from '../img/logo-pethub.png'
import externo from '../img/externo.png'

export const Etiqueta = ({width, children}) => {
  return (
    <header className='mt-4 px-4.4'>
        <img src={children} alt=""  className={width}/>
    </header>
  )
}
