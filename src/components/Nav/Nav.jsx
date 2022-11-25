import React from 'react'

const Nav = () => {

    const nav = [
        {
            icon: 'fa-solid fa-user',
            title: 'TRANSFERT'
        },
        {
            icon: 'fa-solid fa-cart-shopping',
            title: 'PAIEMENTS'
        },
        {
            icon: 'fa-solid fa-mobile-button',
            title: 'CREDIT'
        }
    ]

    return (
        <div className='nav w-full h-full flex justify-center items-center mt-[3rem]'>
            <div className="nav-container flex justify-between bg-white rounded shadow-2xl">
                {
                    nav.map((nav,index) => (
                        <div key={index} className='relative w-[110px] h-[110px] nav-card'>
                            <div className='w-full bg-yellow-200 nav-card-container flex flex-col items-center justify-center mt-7'>
                                <div className='icon-container bg-red-300 top-0'>
                                    <i className={nav.icon}></i>
                                </div>
                                <div className='title-container bg-yellow-300'>
                                    <h1>{nav.title}</h1>
                                </div>
                            </div>
                        </div>
                        ))
                }
            </div>
        </div>
    )
}

export default Nav