import React from 'react'
import { FooterBloque1 } from './FooterBloque1'

export const ContenedorBloque1 = ({children}) => {
  return (
    <div className=" bg-white shadow-container ring-gray-900/5 sm:mx-auto  rounded-b-2xl w-574 max-h-bloq1  flex flex-col">
        {children}
        <FooterBloque1/>
    </div>
  )
}
