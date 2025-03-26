import React from 'react'

const MyButton = ({ children }) => {
  return (
    <button className='bg-violet-500 text-white px-3 py-2 rounded-lg'>
        {children}

    </button>
  )
}

export default MyButton