import React from 'react'
import { useForm } from 'react-hook-form'
import useProfile from '../Auth/profile'
import Input from './Input'
import Button from './Button'
import UpdateAvatar from './UpdateAvatar'
const Updateprofile = () => {
    const {handleSubmit,register}=useForm()
    const {updateProfile}=useProfile()
      const updatehandeler=(user)=>{
        console.log(user)
        updateProfile(user)
        .then((userdata)=>{
          console.log(userdata)
        })
      }
     
  return (
    <div>
      
      <div className='flex items-center justify-center w-full py-32'>
      <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>
             <UpdateAvatar/>
             <form onSubmit={handleSubmit(updatehandeler)} className='flex flex-col  py-2'>
            <Input label="firstName"
                   placeholder="enter first name"
                   type="name"
                   {...register("firstName",{
                    required:true,
                   })

                   } />
                   <Input label="lastName"
                   placeholder="enter last name"
                   type="name"
                   {...register("lastName",{
                    required:true,
                   })

                   } />
                   <Input label="countryCode"
                   placeholder="enter your countryCode"
                   type="tel"
                   {...register("countryCode",{
                    required:true,
                   })

                   } />
                    <Input label="phoneNumber"
                   placeholder="enter your phoneNumber"
                   type="tel"
                   {...register("phoneNumber",{
                    required:true,
                   })

                   } />

                         <Button className='w-full mt-6' type="submit">update </Button>

              </form> 
          </div>

      </div>
      </div>
    
  )
}

export default Updateprofile
