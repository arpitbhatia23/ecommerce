import React from 'react'
import Logout from '../components/header/Logout'
import Logo from '../components/Logo'
import { SlMenu } from "react-icons/sl";
const Nav = () => {
    // const sidenav=[
    //     { 
    //       id:"1",
    //       name:"dashboard",
    //     },
    //     {
    //       id:"2",
    //       name:"product management",
    //     },
    
    //     {
    //       id:"3",
    //       name:"order management",
    //     },
        
    //   ]
      return (
        <>
          <nav className=' w-full bg-gray-600 py-2 flex text-white'>
          <div className='  ml-8 px-2 pt-4'>
          <SlMenu size={25} />

            </div>
            <div className=' ml-8 px-2 '>
              <Logo/>
            </div>
             <ul className='flex  ml-auto items-center mr-4'>
            {/* { sidenav.map((item)=>(
                    <button className=' inline-block px-6 py-2 duration-200   rounded-full'>{item.name} </button> */}
            {/* )
          )
              
    
            } */}
          <Logout/>
            </ul> 
            
    
          </nav>
        </>
  )
}

export default Nav
