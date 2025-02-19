import { useState } from 'react'
import {Nav} from './assets/components/nav'
import { Dialog } from './assets/components/dialog'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen bg-black'>
     <Nav />

     <Dialog />
     
    </div>
  )
}

export default App
