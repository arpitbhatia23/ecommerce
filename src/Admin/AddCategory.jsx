import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../components/Input'
import Button from '../components/Button'
import UseEcommerceApi from '../ecommerceApi\'s/API'
import toast from 'react-hot-toast'

const AddCategory = ({onAddCategory}) => {
    const {handleSubmit,register,formState:{errors} }=useForm()
    const {createCategory}=UseEcommerceApi()
    const addCategory=(data)=>{
        createCategory(data)
        .then((res)=>{
            console.log(res)
            if(res.success===true){
               toast.success(res.message)
              onAddCategory() }
                else toast.error(res.message)
        })

    }
  return ( 
    <div className='flex gap-x-6'>
    <div className='flex items-center justify-center w-full py-20'>
      <div className='w-full max-w-lg bg-gray-100 rounded-xl p-4 border border-black/10 shadow-md shadow-gray-700'>
      
        <form onSubmit={handleSubmit(handleSubmit(addCategory))} className='flex flex-col gap-4'>

          <Input label='category'
          placeholder="enter category"

          {...register("name",{
            required:true
          })}/>
{errors.name && <p className='text-red-500'>category is required</p>}
<Button type='submit' className='w-full'>submit</Button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default AddCategory
