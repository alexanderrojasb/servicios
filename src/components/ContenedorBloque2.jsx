import React, { Children } from 'react'

export const ContenedorBloque2 = ({children}) => {
  return (
    <div className=" bg-white static shadow-container flex flex-col gap-4 ring-1 ring-gray-900/5 sm:mx-auto rounded-2xl  pt-3 w-563">
        {children}
    </div>
  )
}
