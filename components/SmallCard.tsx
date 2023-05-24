import { exploreItem } from '@/types'
import Image from 'next/image'
import React from 'react'

function SmallCard(props: exploreItem) {
  return (
    <>
      <main className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-out'>
        <div>
          <Image
            src={props.image}
            alt={props.firstName}
            width={48}
            height={48}
            className='rounded-lg'
          />
        </div>
        <div className=''>
          <h2>
            {props.firstName} {props.lastName}
          </h2>
          <h3 className='text-gray-500'>
            {props.address.city}, {props.address.state}
          </h3>
        </div>
      </main>
    </>
  )
}

export default SmallCard
