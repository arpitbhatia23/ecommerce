import React from 'react'
import Logout from '../components/header/Logout'
import { RxCross2 } from "react-icons/rx";
import { MdDashboard } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
const Sidenav = () => {
    const sidenav=[
       
        { 
          id:"1",
          name:"Dashboard",
          icon:<MdDashboard/>
        },
        {
          id:"2",
          name:"Product Management",
          icon:"",
          slug:"/admin/addproduct"
        },
    
        {
          id:"3",
          name:"Order Management",
          icon:""
        },
        
      ]
      const navigate=useNavigate()
  return (
    <>
    <nav className='absolute  min-h-screen  bg-slate-900  p-4 shadow-lg shadow-slate-900'>
<div className='text-white float-right'>
</div>

    <ul className='  ml-auto flex flex-col items-center justify-center '>
            { sidenav.map((item)=>(
                    <button key={item.id} className=' flex gap-x-2 items-center justify-center py-8 duration-200 text-white  rounded-full  hover:text-gray-400 active:text-gray-400 ' onClick={()=>navigate(item.slug)}>{item.icon}{item.name} </button>
            )
          )
              
    
            }
        
            </ul>


    </nav>
    </>
  )
}

export default Sidenav
