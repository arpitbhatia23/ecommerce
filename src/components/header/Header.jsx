import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'

function Header() { 
    const authStautus=useSelector(state=>state.auth.status)
    console.log(authStautus)
    const navItem = [
        {
            name: "home",
            slug: "/",
            active:authStautus
        },
        {
            name: "product",
            slug: "/product",
            active:authStautus

        },
        {
            name: "cart",
            slug: "/cart",
            active:authStautus

        },
        {
            name: "order",
            slug: "/order",
            active:authStautus

        },
        {
            name: "signup",
            slug: "/signup",
            active:!authStautus

        },
        {
            name: "signin",
            slug: "/signin",
            active:!authStautus

        }
    ]

    return (
        <header className='bg-gray-600 text-white'>
        <div className='flex '>
            {
                navItem.map((item) => item.active?(
                    <div key={item.slug} className='mr-8'>
                        <NavLink to={item.slug} >{item.name}</NavLink>
                    </div>
                ):null)

            }
            {
                authStautus && (
                    <Logout/>
                )
            }
        </div>
        </header>
    )
}

export default Header
