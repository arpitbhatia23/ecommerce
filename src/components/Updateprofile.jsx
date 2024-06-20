import React from 'react'
import { useForm } from 'react-hook-form'
import useProfile from '../Auth/profile'
import Input from './Input'
import Button from './Button'
import UpdateAvatar from './UpdateAvatar'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { useSelector } from 'react-redux'
const Updateprofile = () => {
    const {handleSubmit,register}=useForm()
    const {updateProfile}=useProfile()
    const navigate=useNavigate()
      const updatehandeler=(user)=>{
        console.log(user)
        try {
          updateProfile(user)
          .then((userdata)=>{
            if (userdata?.success===true) {
              toast.success(userdata?.message)
              navigate("/profile")
            }
            if (userdata?.success===false) {
              toast.error(userdata.message)
              
            }
          })
        } catch (error) {
          toast.error(error)
        }
      }
      const userdata=useSelector(state=>state.auth.userData)
      const handlenavigate=()=>{
        if(userdata?.data?.role==="ADMIN"){
          navigate("/admin/profile")

        }
        if(userdata?.data?.role==="USER"){
          navigate("/profile")

        }
      }
     
  return (
    <div>
      
      <div className='flex items-center justify-center w-full py-20'>
      <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10 shadow-md shadow-gray-700 '>
     <div onClick={()=>handlenavigate()}><IoIosArrowBack size={25}/></div> 
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
