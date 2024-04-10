import React from 'react'
import { FooterBloque1 } from './FooterBloque1'

export const ContenedorBloque1 = ({children, showBloque2}) => {
  return (
    <div className={`bg-white shadow-container ring-gray-900/5 sm:mx-auto rounded-b-2xl  max-h-bloq1 flex flex-col ${showBloque2 ? 'w-574' : 'w-1152'}`}>
        {children}
        <FooterBloque1 showBloque2={showBloque2}/>
    </div>
  )
}
