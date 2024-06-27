import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { useForm } from 'react-hook-form';
import UseEcommerceApi from '../ecommerceApi\'s/API';
import toast from 'react-hot-toast';

const AddProduct = () => {
  const { createProduct } = UseEcommerceApi();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleAddProduct = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('price', data.price);
    formData.append('stock', data.stock);
    formData.append('category', data.category);
    formData.append('subImages', data.subImage);
    formData.append('mainImage', data.mainImage[0]);
    formData.append('description', data.description);

  
 createProduct(formData)
 .then((data)=>{
  console.log(data)
  if(data.success===true){
    toast.success(data.message)
  }
else(
  toast.error(data.message)
)
 })
  };
   

  return (
    <div className='flex gap-x-6'>
      <div className='flex items-center justify-center w-full py-20'>
        <div className='w-full max-w-lg bg-gray-100 rounded-xl p-4 border border-black/10 shadow-md shadow-gray-700'>
          <form className='' onSubmit={handleSubmit(handleAddProduct)}>
            <Input label="name"
              {...register('name', { required: true })}
            />
            {errors.name && <span>Name is required</span>}
            <div className='flex items-center gap-2 mt-2'>
              <Input label="price" className="w-20 h-12" type="number"
                {...register('price', { required: true })}
              />
              {errors.price && <span>Price is required</span>}
              <Input label="stock" className="w-20 h-12" type="number"
                {...register('stock', { required: true })}
              />
              {errors.stock && <span>Stock is required</span>}
            </div>
            <Input label="category" className=""
              {...register('category', { required: true })}
            />
            {errors.category && <span>Category is required</span>}
            <div className='flex items-center gap-2 mt-2'>
              <Input label="mainImage" type="file" className=""
                {...register('mainImage', { required: true })}
              />
              {errors.mainImage && <span>Main Image is required</span>}
              <Input label="subImages" type="file" className=""
                {...register('subImages', )}
              />
              {errors.subImage && <span>Sub Image is required</span>}
            </div>
            <label>description</label>
            <textarea className='w-full h-40 p-2 border border-black/10 rounded-md'
              {...register('description', { required: true })}
            />
            {errors.description && <span>Description is required</span>}
            <Button className='w-full' type='submit'>Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
