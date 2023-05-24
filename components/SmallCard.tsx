import Image from 'next/image'
import React from 'react'

function SmallCard(props) {
  return (
    <>
      <main className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-out'>
        <div>
          <Image
            src={props.img}
            alt={props.fname}
            width={48}
            height={48}
            className='rounded-lg'
          />
        </div>
        <div className=''>
          <h2>
            {props.fname} {props.lname}
          </h2>
          <h3 className='text-gray-500'>
            {props.city}, {props.state}
          </h3>
        </div>
      </main>
    </>
  )
}

export default SmallCard
