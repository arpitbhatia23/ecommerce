import React from 'react'
import { AiOutlineProduct } from 'react-icons/ai';
import { BsBoxSeam } from 'react-icons/bs';
import {  MdAddToPhotos, MdDashboard } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
const Sidenav = () => {
    const sidenav=[
       
        { 
          id:"1",
          name:"Dashboard",
          icon:<MdDashboard size={25}/>,
          slug:"/admin/dashboard"
        },
        {
          id:"2",
          name:"Product ",
          icon:<AiOutlineProduct size={25}/>,
          slug:"/admin/product"
        },
        {
          id:"3",
          name:"Add Product ",
          icon:<MdAddToPhotos size={25}/>,
          slug:"/admin/addproduct"
        },
        {
          id:"4",
          name:"category",
          icon:<BsBoxSeam size={25}/>,
          slug:"/admin/category"
        },
    
        {
          id:"5",
          name:"Order ",
          icon:<BsBoxSeam size={25}/>
        },
        
        
      ]
      const navigate=useNavigate()
  return (
    <>
    <nav className='absolute  min-h-screen   p-4 '>
<div className='text-black float-right'>
</div>

    <ul className='  ml-auto flex flex-col items-start justify-center '>
            { sidenav.map((item)=>(
                    <button key={item.id} className=' flex gap-x-2 items-center justify-center py-8 duration-200 text-black  rounded-full  hover:text-gray-400 active:text-gray-400 ' onClick={()=>navigate(item.slug)}>{item.icon}{item.name} </button>
            )
          )
              
    
            }
        
            </ul>


    </nav>
    </>
  )
}

export default Sidenav
