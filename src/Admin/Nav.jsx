import React from 'react'
import Logo from '../components/Logo'
import { SlMenu } from "react-icons/sl";
import Userdropdown from './Userdropdown'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Sidenav from './Sidenav';
import { RxCross2 } from 'react-icons/rx';
const Nav = () => {
  const authStautus=useSelector(state=>state.auth.status)
  const userdata=useSelector(state=>state.auth.userData)
  const [visibleDropdow ,setvisibleDropdown]=useState(false)
  
    const [toogle,settoogle]=useState(true)
      return (
        <>
          <nav className=' w-full bg-gray-600 py-2 flex text-white shadow-md shadow-slate-700'>
          <div className='  ml-8 px-2 pt-4'>
          <button onClick={()=>settoogle(!toogle)}>{!toogle?<RxCross2 size={25}/>:<SlMenu size={25}/>}</button>

          

            </div>
            <div className=' ml-8 px-2 '>
              <Logo/>
            </div>

             <ul className='flex  ml-auto items-center mr-4'>
             {
                    authStautus && (
                        <div className='flex px-6 py-2 duration-200 gap-x-2  ' onClick={()=>setvisibleDropdown(!visibleDropdow)}>
                           <img src={userdata?.data?.avatar?.url} alt="" className='rounded-[50%] h-8 w-8 '/>
                           

                        </div>
                    )
                }
            </ul> 
            
    
          </nav>
          {
            visibleDropdow && <Userdropdown/>
            
        }
        {!toogle ? <Sidenav/>:null 
             
          }
        </>
  )
}

export default Nav
