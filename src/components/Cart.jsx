import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { motion } from "framer-motion"

export default function Cart({data, reference}) {
    
  return (
        <motion.div  drag dragConstraints={reference} className=' h-72 w-60 rounded-[18px] bg-sky-200 text-black p-5 relative font-semibold'>
            <FaFileAlt />
            <p className='pt-4'>{data.text}</p>

            <div className='footer absolute left-0 bottom-0 items-center w-full '>

                <div className='flex justify-between p-8'>
                    <h1>{data.mb}</h1>
                    {
                        data.downloadorNot?
                        <span className=' rounded-full bg-red-500 p-1 text-white'> <MdDownload /> </span>
                        : 
                        <span className=' rounded-full bg-red-500 p-1 text-white'> <RxCrossCircled /> </span>
                    }
                    
                </div>
                {
                    data.footer?
                    <div className=' bg-green-400  bottom-0 left-0 text-white rounded-b-[18px] p-3'>
                        <h1 className=' text-center'> {data.words}</h1>
                    </div>
                    :
                    ''
                }
            </div>
            
        </motion.div>
  )
}
