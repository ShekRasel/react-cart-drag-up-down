import React, { useRef } from 'react'
import Cart from './Cart'

export default function Forground() {
    const ref =  useRef(null)
    const cart = [
        {
            text:'Lorem ipsum dolor, rasel sit amet consectetur adipisicing elit. Nemo?',
            mb:'0.5 MB',
            downloadorNot:true,
            footer: false,
            words:'Words'
        },
        {
            text:'What ever you want to say , you can say here , just say it',
            mb:'0.8 MB',
            downloadorNot:false,
            footer: true,
            words:'Too Slow'
        },
        {
            text:'Lorem ipsum dolor, rasel sit amet consectetur adipisicing elit. Nemo?',
            mb:'0.9 MB',
            downloadorNot:true,
            footer: false,
            words:'No Deals'
        },

        
    ]
  return (
    <div ref={ref} className=' text-white h-screen w-full z-[3] fixed bg-slate-800/50 flex gap-5 p-6'>
        {cart.map((v,i)=>(
        <Cart key={i} data={v} reference = {ref}/>
        ))}
    </div>
  )
}
