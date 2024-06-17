import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'
import Logo from '../Logo'
import Searchbar from '../Searchbar'

function Header() { 
    const authStautus=useSelector(state=>state.auth.status)
    console.log(authStautus)
    const navItem = [
        {
            name: "Home",
            slug: "/",
            active:authStautus
        },
        {
            name: "Product",
            slug: "/product",
            active:authStautus

        },
        {
            name: "Cart",
            slug: "/cart",
            active:authStautus

        },
        {
            name: "Order",
            slug: "/order",
            active:authStautus

        },
        {
            name: "Signup",
            slug: "/signup",
            active:!authStautus

        },
        {
            name: "Signin",
            slug: "/signin",
            active:!authStautus

        }
    ]

    return (
        <header className='bg-gray-600 text-white w-full  h-12 flex  items-center justify-center'>
        <div className='flex  '>
            <Logo classname="text-center "/>
            {authStautus && <Searchbar/>}
            {
                navItem.map((item) => item.active?(
                    <div key={item.slug} className='ml-8 mr-8 flex items-center'>
                        <NavLink to={item.slug} >{item.name}</NavLink>
                    </div>
                ):null)

            }
            <ul className="flex items-center  ">
                <li >
                {
                authStautus && (
                    <Logout className="hover:border-b-red-500" />
                )
            }
                </li>
            </ul>
           
        </div>
        </header>
    )
}

export default Header
