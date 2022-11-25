import React, { useState } from 'react'

const Header = () => {
  const [hidePrice, setHidePrice] = useState(false)

  return (
    <div className='header w-full flex flex-col items-center'>
      <div className='price-container flex justify-center'>
        <i class="absolute fa-solid fa-gear text-3xl text-white left-7 top-7"></i>
        <h1 className='text-white font-bold text-5xl mt-[75px]'>
          {
            hidePrice ? ('. . .'):('120.000F')
          }
        </h1>
        <button className='' onClick={() => setHidePrice(!hidePrice)}><i className={ hidePrice ? ' fa-solid fa-eye absolute text-3xl top-[5.2rem] right-8 text-white':' fa-solid fa-eye-slash absolute text-3xl top-[5.2rem] right-8 text-white'}></i></button>
      </div>
      <div className='w-[300px] h-[170px] wave-card mt-6'>
      </div>
    </div>
  )
}

export default Header;
