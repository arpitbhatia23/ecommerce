import React from 'react'

function Singup() {
  return (
    <>
      
<div className=" flex items-center justify-center w-full py-5">
<div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-5 border border-black/10'>


        <h2 className='text-center text-2xl font-bold leading-tight'>Sign up to your account</h2>
        <p className='mt-2 text-center text-base text-black/60'>
          Already have account?</p>

          <form className='mt-1 flex justify-evenly item-center'>
          <div className='space-y-5'>
            <label htmlFor="">Name:       </label>
            <input
              label='Name: '
              placeholder='Enter your name'
              type='text'
            /> <br />
                        <label htmlFor="">Email:</label>

             <input
              label='Email: '
              placeholder='Enter your Email'
              type='email'
            /><br/>
                        <label htmlFor="">Mobile:       </label>

             <input
              label='Mobile: '
              placeholder='Enter your Mobile Number'
              type='tel'
            /> <br />
                        <label htmlFor="">Password:       </label>

            <input
              label='Password: '
              type='password'
              placeholder='Enter your password'
/>
            <button type='submit' className='w-full bg-blue-300 rounded-xl'>
              Sign up
            </button>
          </div>
        </form>
</div>
</div>

    </>
  )
}

export default Singup
