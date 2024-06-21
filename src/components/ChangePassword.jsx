import React from 'react'
import Input from './Input'
import Button from './Button'
import { IoArrowBack } from 'react-icons/io5'
import { IoIosArrowBack } from 'react-icons/io'
import { useForm } from 'react-hook-form'
import useAuth from '../Auth/auth'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'

const ChangePassword = () => {
  const navigate=useNavigate()
  const userData=useSelector(state=>state.auth.userData)
  const {handleSubmit , register}=useForm()
  const {change_password}=useAuth()
  const passwordSubmit=(data)=>{
  
    change_password(data)
    .then((userdata)=>{
    if (userdata.success===true) {
      toast.success(userdata.message)
      if(userData?.data?.role==="ADMIN"){
        navigate("/admin")
      }
      if(userData?.data?.role==="USER"){
        navigate("/")
      }
    }
    if (userdata.success===false) {
      toast.error(userdata.message)
      
    }
    })
  }
 const handelnavigate=()=>{
  if(userData?.data?.role==="ADMIN"){
    navigate("/admin")
  }
  if(userData?.data?.role==="USER"){
    navigate("/")
  }
 }
  return (
    <div>
       <div className='flex items-center justify-center w-full py-20'>
       <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10 shadow-md shadow-gray-700 '>
      <div onClick={()=>handelnavigate()}>  <IoIosArrowBack/></div>
      <form  onSubmit={handleSubmit(passwordSubmit)}className='flex flex-col gap-3'>
      
       <Input label="newPassword"
       {...register("newPassword",{required:true})}/>
        <Input label="oldPassword"
       {...register("oldPassword",{required:true})}/>
       <Button className="w-full " type='submit'>submit</Button>
       </form>
       </div>
       </div>
    </div>
  )
}

export default ChangePassword
