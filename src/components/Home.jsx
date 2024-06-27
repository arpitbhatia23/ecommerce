import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import UseEcommerceApi from '../ecommerceApi\'s/API';
import Productcard from './Productcard';

function Home() {
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

  return (
    <>
    <div className='py-3  px-6 grid grid-cols-6 gap-4'>
      {post.length > 0
        ? post.map((products) => (
            <Productcard key={products._id} {...products} />
          ))
        : <p>No products available.</p>}
</div>
    </>
  );
}

export default Home;
