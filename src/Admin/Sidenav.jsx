import React from 'react'
import Logout from '../components/header/Logout'
import { RxCross2 } from "react-icons/rx";
const Sidenav = () => {
    const sidenav=[
       
        { 
          id:"1",
          name:"Dashboard",
          icon:""
        },
        {
          id:"2",
          name:"Product Management",
          icon:""
        },
    
        {
          id:"3",
          name:"Order Management",
          icon:""
        },
        
      ]
  return (
    <>
    <nav className='h-screen w-64 bg-gray-700 p-4'>
<div className='text-white float-right'>
    <button ><RxCross2 size={25}/></button>
</div>

    <ul className='  ml-auto items-center mr-4'>
            { sidenav.map((item)=>(
                    <button className=' inline-block px-6 py-2 duration-200   rounded-full text-white hover:text-gray-400 active:text-gray-400 '>{item.name}{item.icon} </button>
            )
          )
              
    
            }
        
            </ul>


    </nav>
    </>
  )
}

export default Sidenav
