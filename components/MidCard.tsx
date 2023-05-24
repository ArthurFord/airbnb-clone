import Image from 'next/image'
import React from 'react'

function MidCard(props) {
  return (
    <>
      <main className='p-5 cursor-pointer hover:scale-105 transition-transform duration-300 ease-out'>
        <div className='relative h-48 w-48'>
          <Image
            src={props.img}
            alt={props.title}
            fill
            className='rounded-md'
          />
        </div>
        <div>
          <h2 className='text-md mt-3'>{props.title}</h2>
        </div>
      </main>
    </>
  )
}

export default MidCard
