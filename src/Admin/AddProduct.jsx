import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { useForm } from 'react-hook-form';
import UseEcommerceApi from '../ecommerceApi\'s/API';
import toast from 'react-hot-toast';
import Select from '../components/Select';

const AddProduct = () => {
  const { createProduct } = UseEcommerceApi();
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm();

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [subImageError, setSubImageError] = useState('');

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 2) {
      setSubImageError('You can upload only two images.');
      return;
    }
    setSubImageError('');
    setSelectedFiles(files);
    setValue('subImages', files);
  };

  const removeFile = (index) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
    setValue('subImages', newFiles);
  };

  const handleAddProduct = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('price', data.price);
    formData.append('stock', data.stock);
    formData.append('category', data.category);
    formData.append('mainImage', data.mainImage[0]);
    formData.append('description', data.description);

    data.subImages.forEach((file) => {
      formData.append('subImages', file);
    });

    createProduct(formData)
      .then((response) => {
        if (response.success) {
          toast.success(response.message);
        } else {
          toast.error(response.message);
        }
      })
      .catch((error) => {
        toast.error('An error occurred while creating the product.');
      });
  };

  return (
    <div className='flex gap-x-6'>
      <div className='flex items-center justify-center w-full py-20'>
        <div className='w-full max-w-lg bg-gray-100 rounded-xl p-4 border border-black/10 shadow-md shadow-gray-700'>
          <form onSubmit={handleSubmit(handleAddProduct)}>
            <Input label="name" {...register('name', { required: true })} />
            {errors.name && <span className='text-red-500'>Name is required</span>}

            <div className='flex items-center gap-2 mt-2'>
              <Input label="price" className="w-20 h-12" type="number" {...register('price', { required: true })} />
              {errors.price && <span className='text-red-500'>Price is required</span>}
              
              <Input label="stock" className="w-20 h-12" type="number" {...register('stock', { required: true })} />
              {errors.stock && <span className='text-red-500'>Stock is required</span>}
            </div>

            <Select label="category" {...register('category', { required: true })} />
            {errors.category && <span className='text-red-500'>Category is required</span>}

            <div className='flex items-center gap-2 mt-2'>
              <Input label="mainImage" type="file" {...register('mainImage', { required: true })} />
              {errors.mainImage && <span className='text-red-500'>Main Image is required</span>}

              <Input
                label="subImages"
                type="file"
                multiple
                onChange={handleFileChange}
                className=""
              />
              {subImageError && <span className='text-red-500'>{subImageError}</span>}
            </div>

            <div>
              {selectedFiles.length > 0 && (
                <ul>
                  {selectedFiles.map((file, index) => (
                    <li key={index}>
                      {file.name} - {file.size} bytes
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="ml-2 text-red-500"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <br />
            <label>description</label>
            <textarea className='w-full h-40 p-2 border border-black/10 rounded-md' {...register('description', { required: true })} />
            {errors.description && <span className='text-red-500'>Description is required</span>}

            <Button className='w-full' type='submit'>Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
