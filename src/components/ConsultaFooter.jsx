import React from 'react'

export const ConsultaFooter = ({texto,num, children}) => {
  return (
    <div className='justify-between flex border-t py-1'>
        <div className='flex gap-1 items-center'>
            <input type="checkbox" className='text-violet-blue'/>
            <label className={texto}>{children}</label>
        </div>
        <div>
            <label className={num}>S/ 120.00</label>
        </div>
    </div>
  )
}
