import React from 'react'
import Input from '../components/Input'

const AddProduct = () => {
  return (
    <div className='flex  gap-x-6'>
    <div className='flex items-center justify-center  w-full py-20'>
      <div className=' w-full max-w-lg bg-gray-100 rounded-xl p-4 border border-black/10 shadow-md shadow-gray-700 '>
      <form className=''>
        <Input label="name"/>
        <div className='flex items-center gap-2 mt-2'>
        <Input label="price" className="w-20 h-12" type="number"/>
        <Input label="stock" className="w-20 h-12"type="number"/>
        </div>
        <Input label="category" className=""/>
        <div className='flex items-center gap-2 mt-2'>
        <Input label="main Image"type="file" className=""/>
        <Input label="sub Image" type="file" className="" />
        </div>
        <label >discription</label>
        <textarea className='w-full h-40 p-2 border border-black/10 rounded-md'/>
      </form>
      </div>
    </div>


   



    </div>
  )
}

export default AddProduct
