import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className='relative h-72 sm:h-96 md:h-auto'>
      <Image
        src={
          'https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg'
        }
        alt={''}
        height={600}
        width={1900}
        className='object-cover'
      />
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
        <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
          I'm flexible
        </button>
      </div>
    </div>
  )
}

export default Banner
