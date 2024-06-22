import React, { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import UseEcommerceApi from '../ecommerceApi\'s/API'

function Home() {
  useEffect(()=>{
    const {FetchAllProduct}=UseEcommerceApi()
    FetchAllProduct()
    .then((userdata)=>{
      console.log(userdata)
    })
  })
  return (
    <>
      <h1>home</h1>
    </>
  )
}

export default Home
