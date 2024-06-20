import React, { useEffect, useState } from 'react'
import useProfile from '../Auth/profile'
import { useSelector } from 'react-redux'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack, IoIosArrowRoundBack } from 'react-icons/io'

const Profile = () => {
   const {profile}=useProfile()
   const[profileData  , setProfileData]=useState()
     useEffect(()=>{
      profile()
      .then((userdata)=>{
        console.log(userdata)
        setProfileData(userdata)
      })
     },[])
     const navigate=useNavigate()
   
   
  const userdata=useSelector(state=>state.auth.userData)
  const handelnavigate=()=>{
    if(userdata?.data?.role==="ADMIN"){
      navigate("/admin/updateAdminProfile")
    }
    if(userdata?.data?.role==="USER"){
      navigate("/updateProfile")
    }
  
  }
  const back=()=>{
    if(userdata?.data?.role==="ADMIN"){
      navigate("/admin")
    }
    if(userdata?.data?.role==="USER"){
      navigate("/")
    }
  }
  return (
    <div className='flex items-center justify-center w-full py-32 '>
      <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10 shadow-md shadow-gray-700'>
     <button onClick={()=>back()}><IoIosArrowBack size={25}  /></button> 
      <div className='flex  flex-col justify-start items-center'>
          <span className='flex justify-center  '> <img className="rounded-[50%]  w-2/6 shadow-md shadow-slate-700"src={userdata?.data?.avatar?.url} alt="" /></span>
          <span className='py-2'>username  : {userdata?.data?.username}</span>

          <span className='py-2'>firstName : {profileData?.data?.firstName}</span>
          <span className='py-2'>lastName  : {profileData?.data?.lastName}</span>
          <span className='py-2'>phone no. : {profileData?.data?.phoneNumber}</span>
          <span className='py-2'>email_Id  : {userdata?.data?.email}</span>
           
           <Button className='py-2'onClick={()=>handelnavigate()}>update profile</Button>
          </div>

      </div>
      
      
    </div>
  )
}

export default Profile
