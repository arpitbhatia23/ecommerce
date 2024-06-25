import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { useForm } from 'react-hook-form'
import UseEcommerceApi from '../ecommerceApi\'s/API'


const AddProduct = () => {
  
    const {createProduct}=UseEcommerceApi()
    const { register, handleSubmit,formState:{errors} } = useForm();

function AddProduct(){
   createProduct()
   .then((data)=>{
    console.log(data)

   })

}

  return (
    <div className='flex  gap-x-6'>
    <div className='flex items-center justify-center  w-full py-20'>
      <div className=' w-full max-w-lg bg-gray-100 rounded-xl p-4 border border-black/10 shadow-md shadow-gray-700 '>
      <form className=''onSubmit={handleSubmit(AddProduct)}>
        <Input label="name"
                {...register('name', {
                  required: true })}/>
        <div className='flex items-center gap-2 mt-2'>
        <Input label="price" className="w-20 h-12" type="number"
        {...register('price', {
          required: true })}/>

        <Input label="stock" className="w-20 h-12"type="number"
                {...register('stock', {
                  required: true })}/>
        </div>
        <Input label="category" className=""
                {...register('category', {
                  required: true })}/>
        <div className='flex items-center gap-2 mt-2'>
        <Input label="mainImage"type="file" className=""
                {...register('mainImage', {
                  required: true })}/>
        <Input label="subImage" type="file" className="" 
                {...register('subImage', {
                  required: true })}/>
        </div>
        <label >discription</label>
        <textarea className='w-full h-40 p-2 border border-black/10 rounded-md'
                {...register('description', {
                  required: true })}/>
        <Button className='w-full' type='submit'>Submit</Button>
      </form>
      </div>
    </div>


   



    </div>
  )
}

export default AddProduct
