import React from 'react'

export default function Background() {
  return (
     
    <div className=' w-full h-screen fixed z-[2]'>
        <nav className=' text-white  py-[5%] absolute flex justify-center w-full'>
            <h1>Documents</h1>
        </nav>
        <h1 className=' text-white text-[12vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] leading-none'>Docs.</h1>
    </div>
   
  )
}
