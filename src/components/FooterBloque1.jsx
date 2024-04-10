import React, { useState } from 'react'
import mas from '../img/mas.png'
import flecha from '../img/flecha.png'
import flechaabajo from '../img/flechaabajo.png'

export const FooterBloque1 = ({showBloque2}) => {

  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  
  return (
    <div className='bg-white mx-6 justify-between rounded-b-2xl py-3 gap-4 flex'>
       <div>
        <div className='flex justify-between gap-4'>
          <img src={flecha} className='w-7' alt="" />
          <button className='flex w-16 h-7 ring justify-center bg-gray-100 gap-4 items-center ring-gray-400 rounded-lg relative' onClick={toggleDropdown}>
            1
            <img src={flechaabajo} className={`w-3 h-2 transition-transform transform ${showDropdown ? 'rotate-180' : ''}`} alt=""/>
          </button>
          <img src={flecha} className='w-7 rotate-180' alt="" />
        </div>
        {showDropdown && (
          <div className="bg-gray-100 ml-11 w-16 border border-violet-blue rounded-lg shadow-lg mt-1 absolute z-10">
            <div className="p-2 cursor-pointer left-2 flex relative px-1 py-1 rounded-xl hover:bg-purple-300/20">1</div>
            <div className="p-2 cursor-pointer left-2 flex relative px-1 py-1 rounded-xl hover:bg-purple-300/20">2</div>
            <div className="p-2 cursor-pointer left-2 flex relative px-1 py-1 rounded-xl hover:bg-purple-300/20">3</div>
          </div>
        )}
        <p>Mostrando 3 de 21</p>
      </div>
      <div>
        <button className='bg-violet-blue flex text-white gap-2 font-nunito rounded-xl items-center justify-center w-365 px-3 py-3' onClick={toggleModal}>
          <img src={mas} className='w-6' alt="mas" /> Registrar reserva externa
        </button>
      </div>
      {!showBloque2 && (
        <div>
          <button className='rounded-xl items-center text-violet-blue flex py-3 px-4 shadow-button font-nunito text-lg'>Exportar reporte</button>
        </div>
      )}
      {showModal && (
        <div className={`fixed inset-0 z-50 overflow-auto bg-black bg-opacity-20 flex justify-center items-center transition-opacity duration-300 ${showModal ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-white p-6 rounded-2xl">
          <strong className='text-lg text-purple-dark'>Registrar reserva externa</strong>
          <br />
          <form className='mt-6'>
              <input type="text" placeholder='Cliente' className='block p-2 my-2 text-sm w-474 text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-violet-blue focus:border-violet-blue' />
              <input type="text" placeholder='Servicio' className='block p-2 my-2 text-sm w-474 text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-violet-blue focus:border-violet-blue' />
              <input type="text" placeholder='Mascota' className='block p-2 my-2 text-sm w-474 text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-violet-blue focus:border-violet-blue' />
              <div className='flex justify-between'>
                <label className='flex items-center gap-2'>Fecha: <input type="text" placeholder='DD/MM/AA' className='block w-28 p-2 my-2 text-sm  text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-violet-blue focus:border-violet-blue'/></label>
                <div className='flex items-center gap-3'>
                  <label className='flex items-center gap-2'>De: <input type="text" placeholder='00:00' className='block w-14 p-2 my-2 text-sm  text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-violet-blue focus:border-violet-blue'/></label>
                  <label className='flex items-center gap-2'>A: <input type="text" placeholder='00:00' className='block w-14 p-2 my-2 text-sm  text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-violet-blue focus:border-violet-blue'/></label>
                </div>
              </div>
          </form>
          <div className='flex justify-end gap-3 mt-4'>
            <button onClick={toggleModal} className='rounded-xl h-9 border items-center flex border-black py-1 px-4 font-nunito text-lg'>Cerrar</button>
            <button type="submit" className='rounded-xl w-32 h-9 border items-center flex justify-center border-violet-blue text-white bg-violet-blue py-1 px-6 font-nunito text-lg'>Enviar</button>
          </div>
          </div>
        </div>
      )}
    </div>
  )
}
