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
    <nav className='absolute  min-h-screen w-32  p-4 shadow-lg shadow-slate-900'>
<div className='text-black float-right'>
</div>

    <ul className='  ml-auto flex flex-col items-center justify-center '>
            { sidenav.map((item)=>(
                    <button key={item.id} className=' inline-block px-6 py-8 duration-200   rounded-full  hover:text-gray-400 active:text-gray-400 '>{item.name}{item.icon} </button>
            )
          )
              
    
            }
        
            </ul>


    </nav>
    </>
  )
}

export default Sidenav
