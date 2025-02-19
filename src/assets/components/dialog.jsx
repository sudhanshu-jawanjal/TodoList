import React from 'react'

export const Dialog = () => {
  return (
    <>
        <div className='bg-[#D9D9D9] w-[90%] h-96 w-full max-w-7xl mx-auto text-3xl  items-center justify-center  p-6 rounded-2xl mt-9'>
            <h1 className='text-3xl'>Title</h1>
        
            <input className=" text-2xl w-3XS border-2 border-gray-400 rounded-2xl p-0.5 pl-3 mt-4" type="text" placeholder='Title' />
            <h1 className='text-3xl mt-4'>Desciption</h1>
        
            <input className="text-2xl w-[70%] border-2 border-gray-400 rounded-2xl p-0.5 pl-3 mt-4 " type="text" placeholder='Description' />
        </div>
    </>
  ) 
}
