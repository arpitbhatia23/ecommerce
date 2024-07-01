import React, { useEffect, useState } from 'react'
import AddCategory from './AddCategory'
import UseEcommerceApi from '../ecommerceApi\'s/API'
import { get } from 'react-hook-form'
import { MdDelete } from 'react-icons/md'
import toast from 'react-hot-toast'

const Category = () => {
    const {getCategory,deleteCategory}=UseEcommerceApi()
    const [post,setpost]=useState([])
    const fetchCategory=()=>{
      getCategory()
.then((res)=>{
    console.log(res)
setpost(res?.data?.categories)
    })
  }

    useEffect(()=>{

      fetchCategory()

},[])

   
    const handelDelete=(id)=>{
      deleteCategory(id)
      .then((res)=>{
        if(res.success===true) toast.success(res.message)
            else toast.error(res.message)
        setpost((pre)=>pre.filter((cat)=>cat._id!==id))
      })
    }
  return (
    <div className='flex flex-col items-center py-4 gap-4'>
        <AddCategory onAddCategory={fetchCategory}/>
        <div className="w-3/4">
      <div className='grid grid-cols-5 gap-x-4 border-b-2 py-4 justify-items-center'>
        <div>name</div>
        <div>id</div>
        <div>createdAt</div>
        <div>delete</div>

      </div>

      
      {
        post.length>0?
        post.map((cat)=>(
            <div  key={cat._id}className='grid grid-cols-5 gap-x-4 border-b-2 py-4 justify-items-center'>
            <div>{cat.name}</div>
            <div>{cat._id}</div>
            <div>{cat.createdAt}</div>
            <div onClick={()=>handelDelete(cat._id)}><MdDelete size={25} className='text-red-500'/> </div>
            </div>
        ))
      :<div>no category </div>}
      

    </div > 
    </div>
  )
}

export default Category
