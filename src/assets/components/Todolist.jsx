import React from 'react'
import { TodoCard } from './todoCard'


export  function Todolist({todo}) {

  return (
    <div className='bg-[#D9D9D9] w-[90%] h-1/4 w-full max-w-7xl mx-auto text-3xl  items-center justify-center  p-6 rounded-2xl mt-9'>
        {
            todo.map(todo =>  <TodoCard title={todo.title} desc={todo.desc} />)
        }
       
    </div>
  )
}
