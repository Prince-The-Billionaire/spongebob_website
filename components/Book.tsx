import React from 'react'
import Image from 'next/image'

const Book = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-white'>
        <p className='text-yellow-500 text-4xl md:text-6xl text-center font-semibold mt-4 '>Buy Book Now </p>
        <p className='text-yellow-500 text-xl md:text-3xl text-center font-semibold mt-4 '>Reading my book is really helpful - Trust me Bro </p>
        <button
          className="bg-yellow-400 hover:bg-pink-400 transition-colors text-white 
                     px-6 py-3 rounded-xl text-base md:text-2xl font-bold shadow-xl
                     backdrop-blur-lg bg-opacity-90"
        >
          Buy For $6.99
        </button>
        <Image src={'/rudeboy.png'} alt='Rudeboy' width={500} height={500} className='mx-auto mt-10' />
    </div>
  )
}

export default Book