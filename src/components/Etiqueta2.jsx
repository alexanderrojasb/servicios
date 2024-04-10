import React, { useState } from 'react'
import flecha from '../img/flecha.png'
import horario from '../img/horario.png'
export const Etiqueta2 = ({toggleBloque2}) => {

  const [showBloque2, setShowBloque2] = useState(true);

  const handleClick = () => {
    setShowBloque2(!showBloque2);
    toggleBloque2();
  };
  return (
    <div onClick={handleClick} className='bg-white mt-88 shadow-container rounded-tl-lg rounded-bl-lg w-10 h-24'>
        <div className='flex justify-center'>
            {showBloque2 && (
              <img src={flecha} className=' w-8 mt-8 rotate-180' alt="" />
            )}
            {!showBloque2 && (
              <img src={horario} className='mt-8' alt="" />
            )}
        </div>
    </div>
  )
}
