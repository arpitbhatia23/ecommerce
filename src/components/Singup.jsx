import React from 'react'
import Input from './Input'
import Button from './Button'
import { useForm } from 'react-hook-form';


function Singup() {
  const { register, handleSubmit } = useForm();

  return (
    <>
      
<div className=" flex items-center justify-center w-full py-5">
<div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-5 border border-black/10'>


        <h2 className='text-center text-2xl font-bold leading-tight'>Sign up to your account</h2>
        <p className='mt-2 text-center text-base text-black/60'>
          Already have account?</p>

          <form className='mt-1 flex justify-evenly item-center'>
          <div className='space-y-5'>
            <Input
              label='Name: '
              placeholder='Enter your name'
              type='text'
              {...register('Name', {
                required: true,
              })}
            /> 

             <Input
              label='Email: '
              placeholder='Enter your Email'
              type='email'
              {...register('Email', {
                required: true,
              })}
            />

             <Input
              label='Mobile: '
              placeholder='Enter your Mobile Number'
              type='tel'
              {...register('Mobile', {
                required: true,
              })}
            />

            <Input
              label='Password: '
              type='password'
              placeholder='Enter your password'
              {...register('Password', {
                required: true,
              })}
/>
            <Button type='submit' className='w-full bg-blue-300 rounded-xl'>
              Sign up
            </Button>
          </div>
        </form>
</div>
</div>

    </>
  )
}

export default Singup
