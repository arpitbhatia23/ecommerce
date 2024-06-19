import React from 'react'
import { NavLink } from 'react-router-dom'
import Logout from '../components/header/Logout'
import Logo from '../components/Logo'

const Nav = () => {
    const sidenav=[
        { 
          id:"1",
          name:"dashboard",
        },
        {
          id:"2",
          name:"product management",
        },
    
        {
          id:"3",
          name:"order management",
        },
        
      ]
      return (
        <>
          <nav className=' w-full bg-gray-600 py-2 flex text-white'>
            <div className='ml-8 px-4'>
              <Logo/>
            </div>
            <ul className='flex  ml-auto items-center mr-4'>
            { sidenav.map((item)=>(
              <li key={item.id}>
                    <button className=' inline-block px-6 py-2 duration-200   '>{item.name} </button>
                    </li>
            )
          )
              
    
            }
          <Logout/>
            </ul>
    
          </nav>
        </>
  )
}

export default Nav
