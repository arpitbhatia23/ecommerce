import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() { 
    const navItem = [
        {
            name: "home",
            slug: "/home",
        },
        {
            name: "product",
            slug: "/product"
        },
        {
            name: "cart",
            slug: "/cart"
        },
        {
            name: "order",
            slug: "/order"
        },
        {
            name: "signup",
            slug: "/signup"
        },
        {
            name: "signin",
            slug: "/signin"
        }
    ]

    return (
        <header className='bg-gray-600 text-white'>
        <div className='flex '>
            {
                navItem.map((item) => (
                    <div key={item.slug} className='mr-8'>
                        <NavLink to={item.slug} >{item.name}</NavLink>
                    </div>
                ))
            }
        </div>
        </header>
    )
}

export default Header
