import React, { useState } from 'react'
import { ContenedorBloque2 } from './ContenedorBloque2'
import { HeaderBloque2 } from './HeaderBloque2'
import { Calendario } from './Calendario'
import { Estadisticas } from './Estadisticas'
import { FooterBloque2 } from './FooterBloque2'
import { Etiqueta2 } from './Etiqueta2'

export const Bloque2 = () => {

  const [texto1, setTexto1] = useState(null);
  const [texto2, setTexto2] = useState(null);
  const [texto3, setTexto3] = useState(null);
  const [texto4, setTexto4] = useState(null);
  const [texto5, setTexto5] = useState(null);
  const [texto6, setTexto6] = useState(null);
  const [texto7, setTexto7] = useState(null);

  const actualizarDatoEstadisticas = (nuevoDato1, nuevoDato2, nuevoDato3, nuevoDato4, nuevoDato5, nuevoDato6, nuevoDato7) => {
    setTexto1(nuevoDato1);
    setTexto2(nuevoDato2);
    setTexto3(nuevoDato3);
    setTexto4(nuevoDato4);
    setTexto5(nuevoDato5);
    setTexto6(nuevoDato6);
    setTexto7(nuevoDato7);
  };

  return (
    <ContenedorBloque2>
      <HeaderBloque2/>
      <Calendario actualizarDatoEstadisticas={actualizarDatoEstadisticas} />
      <hr className='mx-6'/>
      <Estadisticas texto1={texto1} texto2={texto2} texto3={texto3} texto4={texto4} texto5={texto5} texto6={texto6} texto7={texto7}/>
      <FooterBloque2/>
    </ContenedorBloque2>
  )
}
