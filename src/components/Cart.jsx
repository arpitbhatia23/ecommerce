import React, { useEffect, useState } from 'react'
import UseEcommerceApi from '../ecommerceApi\'s/API'
import Productcard from './Productcard'
import { MdOutlineRemoveShoppingCart } from 'react-icons/md'
import toast from 'react-hot-toast'

function Cart() {
  const [products ,setproduct]=useState([])
 const {Cart,removeCart}=UseEcommerceApi()
useEffect(()=>{
Cart()
.then((userdata)=>{
 console.log(userdata)
 const items = userdata?.data?.items || [];
const productList = items.map(item => item.product);
 setproduct(productList)
})
console.log(products)


},[])
const handelDelete=(id)=>{
  removeCart(id)
  .then((res)=>{
    console.log(res)
    if(res?.success===true) toast.success(res?.message)
      else toast.error(res.message)
    setproduct(prev=>prev.filter((prev)=>prev._id!==id))
  })
}

  return (
    <>
    <div className='grid grid-cols-6 px-4 py-4 gap-4'>
       {products && products.length > 0 ? (
        products.map((product) => (
       <div key={product._id} className=''>  
       <Productcard  {...product} />
        <div className=' flex flex-col items-center justify-center mt-2 py-4 bg-slate-600 rounded-lg shadow-md shadow-black ' 
        onClick={()=>handelDelete(product._id)}><MdOutlineRemoveShoppingCart size={30} /></div>
          

       </div>
        
        ))
      ) : (
        <p>No products in the cart.</p>
      )}
      </div>
    </>
  )
}

export default Cart
