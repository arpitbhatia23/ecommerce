import React from 'react'
import Input from './Input'
import Button from './Button'
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { Formik,Form,Field,ErrorMessage} from 'formik'




const signupSchema=Yup.object({
  name:Yup.string().required("*name is required"),
  email:Yup.string().required("*email is required"),
  pass:Yup.string().required().min("","*enter 2 characters"),
  mobile:Yup.number().required().min("10","*enter valid mobile")
})


function Singup() {
  // const { register, handleSubmit } = useForm();

  return (
    <>
      <Formik  
      
      initialValues={{name:"",email:"",mobile:"",password:"",role:""}}
    validationSchema={signupSchema}
      
      >
<div className=" flex items-center justify-center w-full py-5">
<div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-5 border border-black/10'>


        <h2 className='text-center text-2xl font-bold leading-tight'>Sign up to your account</h2>
        <p className='mt-2 text-center text-base text-black/60'>
          Already have account?</p>

          <Form className='mt-1 flex justify-evenly item-center'>
          <div className='space-y-5'>
            <label htmlFor="">name</label>
            <Field type ="text" placeholder="Enter your name" 
            name="name"/> <br />
            <div className='text-red-500'> <ErrorMessage name='name'/>
            </div>
              <br /><br />


              <label htmlFor="">email</label>
            <Field type ="email" placeholder="Enter your email" name="email"/> <br />
            <div className='text-red-500'><ErrorMessage name='email'/></div> 
              <br /><br />

              <label htmlFor="">mobile</label>
            <Field type ="tel" placeholder="Enter your mobile
          " name="mobile"/> <br />
            <div className='text-red-500'><ErrorMessage name='mobile'/></div>
              <br /><br />

              <label htmlFor="">password</label>
            <Field type ="password" placeholder="Enter your password" name="pass"/> <br />
            <div className='text-red-500'><ErrorMessage name='pass'/></div>
              <br /><br />
            <button className='w-full bg-blue-300 rounded-xl'>
              Sign up
            </button>
          </div>
        </Form>
</div>
</div>
</Formik>

    </>
  )
}

export default Singup
