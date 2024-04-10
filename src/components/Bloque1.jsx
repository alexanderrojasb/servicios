import React, { useState } from 'react'
import { ContenedorBloque1 } from './ContenedorBloque1'
import { HeaderBloque1 } from './HeaderBloque1'
import { Consulta } from './Consulta'
import { Etiqueta } from './Etiqueta'
import logo from '../img/logo-pethub.png'
import externo from '../img/externo.png'
import { ConsultaFooter } from './ConsultaFooter'
import Modal from './Modal'

export const Bloque1 = ({ showBloque2 }) => {

  const [modalVisible, setModalVisible] = useState(false);

  const handleDivClick = () => {
    setModalVisible(true);
  };

  return (
    <>
      <HeaderBloque1 showBloque2={showBloque2}/>
      <ContenedorBloque1 showBloque2={showBloque2}>
        <div className={`overflow-y-scroll pb-3 ${showBloque2 ? '' : 'grid grid-cols-2'}`}>
          <div>
            <Etiqueta width={"w-14"}>
              {logo}
            </Etiqueta>
            <div className='w-532 px-5 ml-5 ring-2 ring-violet-blue rounded-tr-md rounded-b-md cursor-pointer' onClick={handleDivClick}>
              <Consulta>
                10 de Octubre
              </Consulta>
              <ConsultaFooter texto={"font-nunito text-sm text-violet-blue"} num={"font-nunito font-bold text-lg text-violet-blue"}>
                COMPLETADO
              </ConsultaFooter>
            </div>
          </div>

          <div>
            <Etiqueta width={"w-14"} >
              {logo}
            </Etiqueta>
            <div className='w-532 px-5 ml-5 ring-2 ring-violet-blue rounded-tr-md rounded-b-md'>
              <Consulta>
                08 de Octubre
              </Consulta>
              <ConsultaFooter texto={"font-nunito text-sm"} num={"font-nunito font-bold text-lg text-violet-blue"}>
                RESERVADO
              </ConsultaFooter>
            </div>
          </div>

          <div>
            <Etiqueta width={"w-24"}>
              {externo}
            </Etiqueta>
            <div className='w-532 px-5 ml-5 ring-2 ring-gray-400 rounded-tr-md rounded-b-md'>
              <Consulta>
                10 de Octubre
              </Consulta>
              <ConsultaFooter texto={"font-nunito text-sm text-purple-dark"} num={"font-nunito font-bold text-lg text-purple-dark"}>
                COMPLETADO
              </ConsultaFooter>
            </div>
          </div>

          <div>
            <Etiqueta width={"w-14"} >
              {logo}
            </Etiqueta>
            <div className='w-532 px-5 ml-5 ring-2 ring-violet-blue rounded-tr-md rounded-b-md'>
              <Consulta>
                08 de Octubre
              </Consulta>
              <ConsultaFooter texto={"font-nunito text-sm text-violet-blue"} num={"font-nunito font-bold text-lg text-violet-blue"}>
                COMPLETADO
              </ConsultaFooter>
            </div>
          </div>
          
          <div>
            <Etiqueta width={"w-14"}>
              {logo}
            </Etiqueta>
            <div className='w-532 px-5 ml-5 ring-2 ring-violet-blue rounded-tr-md rounded-b-md cursor-pointer' onClick={handleDivClick}>
              <Consulta>
                10 de Octubre
              </Consulta>
              <ConsultaFooter texto={"font-nunito text-sm text-violet-blue"} num={"font-nunito font-bold text-lg text-violet-blue"}>
                COMPLETADO
              </ConsultaFooter>
            </div>
          </div>

          <div>
            <Etiqueta width={"w-14"} >
              {logo}
            </Etiqueta>
            <div className='w-532 px-5 ml-5 ring-2 ring-violet-blue rounded-tr-md rounded-b-md'>
              <Consulta>
                08 de Octubre
              </Consulta>
              <ConsultaFooter texto={"font-nunito text-sm"} num={"font-nunito font-bold text-lg text-violet-blue"}>
                RESERVADO
              </ConsultaFooter>
            </div>
          </div>

          <div>
            <Etiqueta width={"w-24"}>
              {externo}
            </Etiqueta>
            <div className='w-532 px-5 ml-5 ring-2 ring-gray-400 rounded-tr-md rounded-b-md'>
              <Consulta>
                10 de Octubre
              </Consulta>
              <ConsultaFooter texto={"font-nunito text-sm text-purple-dark"} num={"font-nunito font-bold text-lg text-purple-dark"}>
                COMPLETADO
              </ConsultaFooter>
            </div>
          </div>

          <div>
            <Etiqueta width={"w-14"} >
              {logo}
            </Etiqueta>
            <div className='w-532 px-5 ml-5 ring-2 ring-violet-blue rounded-tr-md rounded-b-md'>
              <Consulta>
                08 de Octubre
              </Consulta>
              <ConsultaFooter texto={"font-nunito text-sm text-violet-blue"} num={"font-nunito font-bold text-lg text-violet-blue"}>
                COMPLETADO
              </ConsultaFooter>
            </div>
          </div>
          {modalVisible && (
            <Modal onClose={() => setModalVisible(false)}>
            </Modal>  
          )}
        </div>
      </ContenedorBloque1>
    </>
  )
}
