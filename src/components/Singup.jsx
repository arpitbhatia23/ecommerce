import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Fields from './Field';
import Button from './Button';
import useAuth from '../Auth/auth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const signupSchema = Yup.object({
  "username": Yup.string().required('username is required'),
  "email": Yup.string().email('Invalid email format').required('Email is required'),
  "password": Yup.string().required('Password is required').min(6, 'Enter at least 2 characters'),
  // mobile: Yup.number().required('Mobile is required').min(10, 'Enter a valid mobile number'),
  "role": Yup.string().required('Role is required')
});

function Signup() {
  const {signup}=useAuth()
  const navigate=useNavigate()
  return (
    <Formik
      initialValues={{ "username": '', "email": '', "password": '', "role": '' }}
      validationSchema={signupSchema}
      onSubmit={async(values) => {
        console.log(values);
       const userdata= await signup(values)
       if(userdata.success===true){
        toast.success(userdata.message)
        navigate("/signin")
       }
       else{
        toast.error(userdata.message)

       }
       console.log(userdata)
      }}
    >
      {({ errors, touched }) => (
        <div className="flex items-center justify-center w-full py-5">
          <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-5 border border-black/10'>
            <h2 className='text-center text-2xl font-bold leading-tight'>Sign up to your account</h2>
            <p className='mt-2 text-center text-base text-black/60'>Already have an account?</p>
            <Form className='mt-1'>
              <div className='space-y-5'>
                <Fields
                  label="username * :"
                  type="text"
                  placeholder="Enter your username"
                  className="px-4 py-2 rounded-lg w-full"
                  name="username"
                />
                <Fields
                  label="Email * :"
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg w-full"
                  name="email"
                />
                {/* <Fields
                  label="Mobile * :"
                  type="tel"
                  placeholder="Enter your mobile"
                  className="px-4 py-2 rounded-lg w-full"
                  name="mobile"
                /> */}
                <Fields
                  label="Password * :"
                  type="password"
                  placeholder="Enter your password"
                  className="px-4 py-2 rounded-lg w-full"
                  name="password"
                />
                <div>
                  <label className="px-4 py-2 text-black">Role * :</label>
                  <div className="flex items-center">
                    <label className="px-2">
                      <Fields type="radio" name="role" value="ADMIN" />
                      ADMIN
                    </label>
                    <label className="px-2">
                      <Fields type="radio" name="role" value="USER" />
                      USER
                    </label>
                  </div>
                </div>
                <Button type="submit" className='w-full bg-blue-500 rounded-xl py-2 text-white'>
                  Sign up
                </Button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default Signup;
