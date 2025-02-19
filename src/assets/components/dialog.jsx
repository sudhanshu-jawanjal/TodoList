import React, { useRef, useState } from 'react'

export const Dialog = ({setTodo}) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const titleRef = useRef()
    const descRef = useRef()

    const addTodo = () => {
        setTodo(todo => [...todo, {
            title: title,
            desc: desc
        }])
    }


  return (
    <>
        <div className='bg-[#D9D9D9] w-[90%] h-1/4 w-full max-w-7xl mx-auto text-3xl  items-center justify-center  p-6 rounded-2xl mt-9'>
            <h1 className='text-3xl'>Title</h1>
        
            <input ref={titleRef} onChange={()=>setTitle(titleRef.current.value)} className=" text-2xl w-3XS border-2 border-gray-400 rounded-2xl p-0.5 pl-3 mt-4" type="text" placeholder='Title' />
            <h1 className='text-3xl mt-4'>Desciption</h1>
        
            <textarea ref={descRef} onChange={()=>setDesc(descRef.current.value)} className="text-2xl w-[70%] border-2 border-gray-400 rounded-2xl p-0.5 pl-3 mt-4 " type="text" placeholder='Description' />
            <br />
            <button onClick={addTodo} className='h-16 w-48 rounded-xl mt-5 bg-black  text-white'>ADD</button>
        </div>
    </>
  ) 
}
