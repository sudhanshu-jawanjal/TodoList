import { useState } from 'react'
import {Nav} from './assets/components/nav'
import { Dialog } from './assets/components/dialog'

import { Todolist } from './assets/components/Todolist'


function App() {
  

  const [todo, setTodo] = useState([])

  console.log(todo)

  return (
    <div className='w-full h-[200vh] bg-black'>
     <Nav />
     <Dialog setTodo={setTodo} />
      <Todolist todo={todo} />
     
    </div>
  )
}

export default App
