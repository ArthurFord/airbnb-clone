import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-columns-3 bg-white shadow-md p-5 md:p-10'>
      {/* left */}

      <div className='relative flex items-center h-10 my-auto col-span-1'>
        <Image
          src={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_Bélo.svg/2560px-Airbnb_Logo_Bélo.svg.png'
          }
          alt={'Airbnb Logo'}
          height={24}
          width={77}
          className='cursor-pointer object-contain object-left'
        />
      </div>
      {/* middle - search */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto col-span-1 col-start-2 md:border-2 rounded-full py-2 md:shadow-sm'>
        <input
          type='text'
          placeholder='Start your search'
          className='pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400'
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-8 h-8 text-orange-400 hidden md:inline-flex mx-auto md:mx-0.5'>
          <path d='M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z' />
          <path
            fillRule='evenodd'
            d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z'
            clipRule='evenodd'
          />
        </svg>
      </div>
      {/* right */}
      <div className='relative flex space-x-4 justify-end text-gray-500 items-center h-10 cursor-pointer my-auto col-span-1 col-start-3'>
        <p className='hidden md:inline-flex cursor-pointer'>Become a Host</p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
          />
        </svg>
        <div className='flex border-2 p-2 rounded-full items-center space-x-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
            />
          </svg>
        </div>
      </div>
    </header>
  )
}

export default Header
