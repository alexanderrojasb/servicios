import React from 'react'

export const HeaderBloque2 = () => {
  return (
    <div className='flex justify-between items-center px-6 py-3'>
        <strong className=' text-lg text-purple-dark font-nunito'>Calendario</strong>
        <div className='flex items-center gap-3'>
            <button className='bg-violet-blue flex text-white font-nunito rounded-xl justify-center w-28 h-11 items-center px-3 py-3'>Importar</button>
            <button className='bg-violet-blue flex text-white font-nunito rounded-xl justify-center w-28 h-11 items-center px-3 py-3'>Exportar</button>
        </div>
    </div>
  )
}
