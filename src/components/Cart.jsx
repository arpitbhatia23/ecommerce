import React, { useEffect, useState } from 'react'
import UseEcommerceApi from '../ecommerceApi\'s/API'
import Productcard from './Productcard'

function Cart() {
  const [products ,setproduct]=useState([])
 const {Cart}=UseEcommerceApi()
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

  return (
    <>
    <div className='grid grid-cols-6 px-4 py-4 gap-4'>
       {products && products.length > 0 ? (
        products.map((product) => (
       
          <Productcard key={product.id} {...product} />
        ))
      ) : (
        <p>No products in the cart.</p>
      )}
      </div>
    </>
  )
}

export default Cart
