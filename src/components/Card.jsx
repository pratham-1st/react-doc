import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { motion } from "framer-motion"

function Card({reference}) {
  return (
    <motion.div drag dragConstraints={reference} className='relative h-64 w-48 bg-zinc-900/90 rounded-[30px] py-10 px-8 text-zinc-300 overflow-hidden'>
       <FaFileAlt />
       <p className='w-full mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
       <div className='footer absolute h-[20%] w-full bottum-0 left-0 mt-5'>
           <div className='flex items-center justify-between px-8 py-3'>
           <h1 className='font-semibold text-md '>.4mb</h1>
           <span className='w-7 h-7 bg-zinc-600 flex items-center justify-center rounded-full'>
           <MdDownloadForOffline />
           </span>
           </div> 
           <div className='tag font-semibold h-10 w-full py-4 px-6 bg-green-600 flex justify-center items-center'>
                <h1>Download Now</h1>
           </div>
       </div>
    </motion.div>
  )
}

export default Card