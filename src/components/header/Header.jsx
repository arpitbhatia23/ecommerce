import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'
import Logo from '../Logo'
import Searchbar from '../Searchbar'
import { IoHomeOutline } from 'react-icons/io5'
import { AiFillProduct } from 'react-icons/ai'
import { MdOutlineAdd, MdShoppingCart } from 'react-icons/md'
import { GiShoppingBag } from 'react-icons/gi'
import { IoIosLogIn } from 'react-icons/io'
import { FaRegUser, FaRegUserCircle } from 'react-icons/fa'

function Header() { 
    const authStautus=useSelector(state=>state.auth.status)
    console.log(authStautus)
    const navItem = [
        {
            name: "Home",
            slug: "/",
            active:authStautus,
            icon:<IoHomeOutline size={25}/>
        },
        {
            name: "Product",
            slug: "/product",
            active:authStautus,
            icon:<AiFillProduct size={25}/>


        },
        {
            name: "Cart",
            slug: "/cart",
            active:authStautus,
            icon:<MdShoppingCart size={25} />


        },
        {
            name: "Order",
            slug: "/order",
            active:authStautus,
            icon:<GiShoppingBag size={25}/>


        },
        {
            name: "Signup",
            slug: "/signup",
            active:!authStautus,
            icon:<IoIosLogIn size={25}/>


        },
        {
            name: "Signin",
            slug: "/signin",
            active:!authStautus,
            icon:<FaRegUserCircle size={25}/>


        }
    ]

    return (
        <header className='bg-gray-600 text-white w-full  py-2'>
        <nav className='flex  '>
           <div className='ml-10 px-4 '>
           <Logo classname="text-center "/>
            </div> 
            
            <ul className='flex ml-auto items-center mr-4 '>
            {authStautus && <Searchbar />}
            {
             
                navItem.map((item) => item.active?(
                    <li key={item.slug}>
                    <div  className='inline-block px-6 py-2 duration-200   rounded-full'>
                        <NavLink to={item.slug} className='flex items-center' >{item.icon}{item.name}</NavLink>
                    </div>
                    </li>
                ):null)
                

            }
           
      
                <li >
                {
                authStautus && (

                    <Logout className="hover:border-b-red-500 " />
                )
            }
                </li>
            </ul>
           
        </nav>
        </header>
    )
}

export default Header
