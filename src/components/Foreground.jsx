import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {

    const ref = useRef(null)
  return (
    <div ref={ref} className='w-full h-full z-[3] flex gap-10 p-8 fixed top-0 left-0'>
        <Card  reference={ref}/>
        <Card  reference={ref}/>
        <Card  reference={ref}/>
    </div>
  )
}

export default Foreground