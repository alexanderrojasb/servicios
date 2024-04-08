import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Head } from './components/Head.jsx'
import { Head2 } from './components/Head2.jsx'
import { Bloque1 } from './components/Bloque1.jsx'
import { Bloque2 } from './components/Bloque2.jsx'
import { Etiqueta2 } from './components/Etiqueta2.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-100 py-6 sm:py-12">
      <div className="  sm:mx-auto sm:rounded-lg my-7 w-1210">
          <Head/>
          <Head2/>
        <div className='flex justify-between gap-6'>
          <div>
            <Bloque1/>
          </div>
          <div>
            <Bloque2/>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default App
