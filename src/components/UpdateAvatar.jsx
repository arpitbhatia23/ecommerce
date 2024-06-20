import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import useProfile from '../Auth/profile'
import Input from './Input'
import Button from './Button'
const UpdateAvatar = () => {
    const {handleSubmit,register}=useForm()
    const{updateAvatar}=useProfile()

   
    const Avatar=(avatar)=>{
        console.log(avatar)
        updateAvatar(avatar)
        .then((userData)=>{
           console.log(userData)
        })

      }
  return (
    <div>
       <form onSubmit={handleSubmit(Avatar)} >
                <Input 
                 label="update avatar"
                 type="file" 
                 {...register("avatar",{
                  required:true
                 }
                  
                 )

                 }/>

                 <Button className='w-full'type='submit' >update avatar</Button>
              </form>
      
    </div>
  )
}

export default UpdateAvatar
