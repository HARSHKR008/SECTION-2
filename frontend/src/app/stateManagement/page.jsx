'use client'
import React from 'react'

const stateManagement = () => {
  return (
    <div className='container mx-auto'>
        <h1 className='text-center font-bold text-3xl my-6'>Event handling</h1>
        <button 
         className='border p-2'
         onClick={() => {alert('button was clicked');            
         }}
         >
         submit
        </button>
        <input type='text' className='border p-2'
        onChange={(e) => 
        console.log(e.target.value)}
        />
        <input type="text" className='border p-2' placeholder='Key Event'
        onKeyDown={(e) =>{
          console.log(e.code)

        }}
        />
      </div>
  )
}

export default stateManagement