import React, { useState } from 'react'
import flechaabajo2 from '../img/flechaabajo2.png'

export const Calendario = ({ actualizarDatoEstadisticas }) => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    if (clickCount === 1) {
      window.location.reload();
    } else {
      setClickCount(clickCount + 1);
      actualizarDatoEstadisticas('Estadísticas del día', '4','S/321', '2', '2', 'Servicios del día', 'Ingresos del día');
    }
  };
  return (
    <div className="max-w-screen-lg mx-6 bg-violet-blue  rounded-3xl px-4 py-8">
        <div className='flex justify-center'>
            <button><strong className=" flex items-center gap-2 text-white font-nunito font-bold text-xl mb-2">Octubre 2023<img src={flechaabajo2} className='w-3 h-2' /></strong></button>
        </div>
        <hr/>
        <br />
        <div className="grid grid-cols-7 text-white font-nunito gap-4">
            {['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sáb', 'Dom'].map(day => (
            <div key={day} className="text-center mb-3 font-bold">{day}</div>
            ))}
            <strong className="text-center text-gray-400 font-nunito">29</strong>
            <strong className="text-center text-gray-400 font-nunito">30</strong>
            {[...Array(4)].map((_, index) => (
            <strong key={index + 1} className="text-center text-white font-nunito">{index + 1}<p>‎ </p></strong>
            ))}
            <strong className="text-center text-gray-400 font-nunito">5</strong>
            {[...Array(2)].map((_, index) => (
            <strong key={index} className="text-center text-white font-nunito">{index + 6}</strong>
            ))}
            <button className=' cursor-pointer focus:bg-orange-500 rounded-2xl'><strong className="text-center text-white font-nunito flex flex-col" onClick={handleClick}>8<p>•</p></strong></button>
            <strong className="text-center text-white font-nunito">9</strong>
            <strong className="text-center text-white font-nunito flex flex-col">10<p>•</p></strong>
            <strong className="text-center text-white font-nunito">11</strong>
            <strong className="text-center text-gray-400 font-nunito">12</strong>
            <strong className="text-center text-white font-nunito">13</strong>
            {[...Array(2)].map((_, index) => (
            <strong key={index} className="text-center text-gray-400 font-nunito">{index + 14}<p>‎ </p></strong>
            ))}
            {[...Array(3)].map((_, index) => (
            <strong key={index} className="text-center text-white font-nunito">{index + 16}<p>‎ </p></strong>
            ))}
            <strong className="text-center text-gray-400 font-nunito">19</strong>
            {[...Array(6)].map((_, index) => (
            <strong key={index} className="text-center text-white font-nunito">{index + 20}<p>‎ </p></strong>
            ))}
            <strong className="text-center text-gray-400 font-nunito">26</strong>
            {[...Array(3)].map((_, index) => (
            <strong key={index} className="text-center text-white font-nunito">{index + 27}<p>‎ </p></strong>
            ))}
            <strong className="text-center text-white font-nunito flex flex-col">30<p>•</p></strong>
            <strong className="text-center text-white font-nunito flex flex-col">31<p>•</p></strong>
            <strong className="text-center text-white font-nunito flex flex-col">1</strong>
            <strong className="text-center text-gray-400 font-nunito">2</strong>
        </div>
    </div>
  )
}
