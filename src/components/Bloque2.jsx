import React from 'react'
import { ContenedorBloque2 } from './ContenedorBloque2'
import { HeaderBloque2 } from './HeaderBloque2'
import { Calendario } from './Calendario'
import { Estadisticas } from './Estadisticas'
import { FooterBloque2 } from './FooterBloque2'
import { Etiqueta2 } from './Etiqueta2'

export const Bloque2 = () => {
  return (
    <ContenedorBloque2>
      <HeaderBloque2/>
      <Calendario/>
      <Etiqueta2/>
      <hr className='mx-6'/>
      <strong className='text-lg mx-6 text-purple-dark'>Estadísticas generales</strong>
      <Estadisticas/>
      <FooterBloque2/>
    </ContenedorBloque2>
  )
}
