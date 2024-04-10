import React, { useState } from 'react';
import subirfactura from '../img/subirfactura.png'
import subirfacturamodal from '../img/subirfacturamodal.png'

const Modal = ({ onClose}) => {

    const [showMiniModal, setShowMiniModal] = useState(false);
    const [showMiniModal2, setShowMiniModal2] = useState(false);

    const handleDetallesClick = () => {
        setShowMiniModal(true);
    };

    const handleCloseMiniModal = () => {
        setShowMiniModal(false);
    };

    const handleSubirClick = () => {
        setShowMiniModal2(true);
    };

    const handleCloseMiniModal2 = () => {
        setShowMiniModal2(false);
    };

  return (
    <>
        <div className='fixed inset-0 z-50 overflow-auto bg-black bg-opacity-20 flex justify-center items-center transition-opacity duration-300'>
            <div className="bg-white rounded-2xl W-849 px-20 py-7">
                <strong className='text-xl flex justify-center text-purple-dark'>Consulta dermatológica</strong>
                <br />
                <form className='mt-6 font-nunito w-656'>
                    <div className='flex py-1 justify-between'><strong>Cliente:</strong>Luis Alfonso Gutierrez Suarez</div>
                    <hr />
                    <div className='flex py-1 justify-between'><strong>Mascota:</strong>Coco</div>
                    <hr />
                    <div className='flex py-1 justify-between'><strong>Fecha de compra:</strong>DD/MM/AA</div>
                    <hr />
                    <div className='flex py-1 justify-between'><strong>Fecha de la reserva:</strong>DD/MM/AA</div>
                    <hr />
                    <div className='flex py-1 justify-between'><strong>Hora de la reserva:</strong>HH:MM</div>
                    <hr />
                    <div className='flex py-1 justify-between'><strong>Dirección del servicio:</strong>Av. Dirección 123, Santiago de Surco</div>
                    <hr />
                    <div className='flex py-1 justify-between'><strong>Ciclo de facturación:</strong>7 días</div>
                    <hr />
                    <div className='flex py-1 justify-between'><strong>Ventas:</strong>S/ 52.00</div>
                    <hr />
                    <div className='flex py-1 justify-between'><strong>Comisiones:</strong><div className=' flex gap-3 items-center'><div onClick={handleDetallesClick} className='font-nunito cursor-pointer font-semibold text-violet-blue text-xs'>Detalles</div><div>S/ 15.00</div></div></div>
                    <hr />
                    <div className='flex py-1 justify-between'><strong>Ingreso:</strong>S/ 37.00</div>
                    <br />
                    <img onClick={handleSubirClick} className='cursor-pointer' src={subirfactura} alt="" />
                    {showMiniModal && (
                        <div className='fixed inset-0 z-60 overflow-auto flex justify-center items-center'>
                            <div className="bg-white rounded-2xl w-491 shadow-container px-4 py-2">
                                <strong className='text-xl flex justify-center text-purple-dark'>Consulta dermatológica</strong>
                                <div className='mt-6 font-nunito px-10'>
                                    <div className='flex py-1 justify-between'><strong>Comisión app:</strong>S/ 10.00</div>
                                    <hr />
                                    <div className='flex py-1 justify-between'><strong>Comisión mkt:</strong>S/ 2.00</div>
                                    <hr />
                                    <div className='flex py-1 justify-between'><strong>Comisión financiera:</strong>S/ 3.00</div>
                                    <hr />
                                    <div className='flex py-1 justify-between'><strong>Comisión total:</strong>S/ 15.00</div>
                                    <hr />
                                </div>
                                <div className='flex justify-center my-7'>
                                    <button onClick={handleCloseMiniModal} className='rounded-xl h-8 border items-center flex border-black py-1 px-4 font-nunito text-lg'>Cerrar</button>
                                </div>
                            </div>
                        </div>
                    )}
                    {showMiniModal2 && (
                        <div className='fixed inset-0 z-60 overflow-auto flex justify-center items-center'>
                            <div className="bg-white rounded-2xl w-364 shadow-container px-1 py-2">
                                <strong className='text-xl flex justify-center'>¿Subir factura?</strong>
                                <div className='flex justify-center mt-4'>
                                    <img src={subirfacturamodal} alt="" />
                                </div>
                                <div className='flex justify-center my-7 gap-4'>
                                    <button onClick={handleCloseMiniModal2} className='rounded-xl h-8 border items-center flex border-black py-1 px-4 font-nunito text-lg'>Cancelar</button>
                                    <div className='rounded-xl h-8 border items-center flex border-gray-300 text-gray-300 bg-gray-100 py-1 px-4 font-nunito text-lg'>Guardar</div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className='flex justify-center'>
                        <button className='bg-violet-blue flex text-white font-nunito rounded-lg items-center justify-center w-300 px-3 py-3 my-9'>Falta(n) 1 día</button> 
                    </div>
                </form>
                <div className='flex justify-center gap-3 mt-4'>
                    <button  className='rounded-xl h-8 items-center text-red-600 flex py-1 px-4 shadow-button font-nunito text-lg'>Cancelar</button>
                    <button  className='rounded-xl h-8 border items-center flex border-black py-1 px-4 font-nunito text-lg'>Reprogramar</button>
                    <button  onClick={onClose} className='rounded-xl h-8 border items-center flex border-black py-1 px-4 font-nunito text-lg'>Cerrar</button>
                    <button type="submit" className='rounded-xl h-8 border items-center flex justify-center text-gray-300 border-gray-300 bg-gray-100 py-1 px-6 font-nunito text-lg'>Marcar como completado</button>
                </div>
            </div>
        </div>
    </>
  );
};

export default Modal;
