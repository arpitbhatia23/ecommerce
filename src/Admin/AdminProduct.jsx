import React from 'react'
import { useState } from 'react';
import UseEcommerceApi from '../ecommerceApi\'s/API';
import { useEffect } from 'react';


function AdminProduct() {
    const [post, setPost] = useState([]);

  useEffect(() => {
    const { FetchAllProduct } = UseEcommerceApi();
    FetchAllProduct()
      .then((userdata) => {
       
        if (userdata && Array.isArray(userdata?.data?.products)) {
          setPost(userdata?.data?.products);
        } else {
          console.error('Unexpected response format:', userdata);
          setPost([]);
        }
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setPost([]); // Ensure post is an array even if there is an error
      });
  }, []);
  console.log(post)
  return (
    <>
      <h1 className='text-center'> Admin product</h1>
    
    </>
  )
}

export default AdminProduct
