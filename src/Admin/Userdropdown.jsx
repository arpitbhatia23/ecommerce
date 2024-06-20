import React from 'react'
import Logout from '../components/header/Logout'
import { useSelector } from 'react-redux'
import { FaRegCircleUser } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const Userdropdown = () => {
   const auth=useSelector(state=>state.auth.status)
   const navigate=useNavigate()
   const userdropdown=[
    {    id:1,
        name:"profile",
        active:auth,
        slug:"profile",
        icon:<FaRegCircleUser size={20}/>
    },
    {
        id:2,
        name:<Logout/>,
        active:auth


    }
    
   ]
   if(auth===true){
  return (
   <>
    <div className=' shadow-lg shadow-slate-900 rounded-lg absolute right-16 mt-6 flex flex-col
            gap-y-4 py-4  px-4' >
    {
        userdropdown.map((item)=>item.active?(
           
                <div key={item.id}>
                <button className='flex items-center gap-x-2'onClick={()=>navigate(item.slug)} >{item.icon}{item.name}</button>

                </div>
           
        ):null)
        
    }

    
   
</div>
</>
  )
}
}

export default Userdropdown
