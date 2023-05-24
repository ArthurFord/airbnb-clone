import Image from 'next/image'
import React from 'react'
import { largeItem } from '@/types'

function LargeCard(props: largeItem) {
  return (
    <>
      <main>
        <div className='relative h-96 w-auto'>
          <Image
            src={props.thumbnail}
            alt={props.title}
            fill
            className='rounded-2xl object-cover'
          />
          <div className='absolute z-50 top-1/4 px-11'>
            <div>
              <h1 className='text-3xl font-semibold pb-4'>
                The Greatest <br />
                Outdoors
              </h1>
              <h2 className='text-md pb-5'>Wishlists curated by Airbnb.</h2>
            </div>
            <button className='bg-gray-900 text-white py-2 px-4 rounded-lg hover:shadow-xl active:scale-90 transition duration-150'>
              Get Inspired
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default LargeCard
