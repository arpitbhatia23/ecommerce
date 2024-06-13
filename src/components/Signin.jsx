import React from 'react';
import useAuth from '../Auth/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {login as Authlogin}from '../App/slice'
function Signin() {
  const { register, handleSubmit } = useForm();
  const {login} = useAuth();
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const loginHandler = async (user) => {
    try {
      const session= await login(user);
      console.log(session)
      if (session?.success === true) {
        toast.success(session?.message);
       dispatch(Authlogin(session))
        navigate("/")

      

      }
      if(session?.success===false){
        toast.error(session?.message)
      }
    } catch (error) {
      toast.error(error);
    }
    
  };


  return (
    <div className='flex items-center justify-center w-full py-8'>
      
      <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>
        <div className='mb-2 flex justify-center'>
          <span className='inline-block w-full max-w-[100px]'>
            {/* <Logo width="100%" /> */}
          </span>
        </div>
        <h2 className='text-center text-2xl font-bold leading-tight'>Sign in to your account</h2>
        <p className='mt-2 text-center text-base text-black/60'>
          Don&apos;t have any account?&nbsp;
          {/* <Link
              to="/signup"
              className="font-medium text-primary transition-all duration-200 hover:underline"
          >
              Sign Up
          </Link> */}
        </p>
        {/* {error && <p className="text-red-600 mt-8 text-center">{error}</p>} */}
        <form onSubmit={handleSubmit(loginHandler)} className='mt-8'>
          <div className='space-y-5'>
            <input
              label='Email: '
              placeholder='Enter your email'
              type='email'
              {...register('email', {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    'Email address must be a valid address',
                },
              })}
            />
            <input
              label='Password: '
              type='password'
              placeholder='Enter your password'
              {...register('password', {
                required: true,
              })}
            />
            <button type='submit' className='w-full'>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
