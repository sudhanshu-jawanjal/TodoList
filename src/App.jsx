import { useState } from 'react'
import {Nav} from './assets/components/nav'
import { Dialog } from './assets/components/dialog'
import { TodoCard } from './assets/components/todoCard'


function App() {
  const [count, setCount] = useState(0)

  const [todo, setTodo] = useState([{
    title: "",
    desc: ""
  }])

  console.log(todo)

  return (
    <div className='w-full h-screen bg-black'>
     <Nav />
     <Dialog setTodo={setTodo} />

     
    </div>
  )
}

export default App
