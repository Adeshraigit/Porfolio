'use client'
import React from 'react'

function Navbar() {
  return (
    <div className='bg-zinc-800 w-full items-center min-h-12 rounded-lg p-3 grid grid-cols-2 border border-zinc-700' >
      <div className='flex items-center gap-4' >      
        <img className='rounded-full' src="https://avatars.githubusercontent.com/u/100000001?v=4" alt="img" height={30} width={30} />
        <h1 className='text-xl font-bold text-white' >Adesh rai</h1>
      </div>
      <div className='' >
        <ul className='flex gap-4 md:gap-8' >
          <li className='hover:bg-gray-700 hover:rounded-xl p-2' >About</li>
          <li className='hover:bg-gray-700 hover:rounded-xl p-2' >Projects</li>
          <li className='hover:bg-gray-700 hover:rounded-xl p-2' >Blog</li>
        </ul>
      </div>
   </div>
  )
}

export default Navbar