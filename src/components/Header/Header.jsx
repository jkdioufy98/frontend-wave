import React from 'react'

const Header = () => {

  return (
    <div className='header w-full flex flex-col items-center'>
      <div className='price-container flex justify-center'>
        <i class="absolute fa-solid fa-gear text-3xl text-white left-7 top-7"></i>
        <h1 className='text-white font-bold text-5xl mt-[75px]'>120.000F</h1>
      </div>
      <div className='w-[300px] h-[170px] wave-card mt-6'>
      </div>
    </div>
  )
}

export default Header;
