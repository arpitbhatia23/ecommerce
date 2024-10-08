import React, { useState, useEffect } from 'react';
import UseEcommerceApi from '../ecommerceApi\'s/API';
import { MdDelete, MdEdit } from 'react-icons/md';
import toast from 'react-hot-toast';

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

  console.log(post);
 const  handelDelete=(id)=>{
  const {deleteProduct,removeCart}=UseEcommerceApi()
  removeCart(id)
  .then((data)=>{
    console.log(data)
    if(data.success===true) {
      toast.success(data.message)
      
    }
    else{
      toast.error(data.message)
    }

  })
  deleteProduct(id)
  .then((data)=>{
    console.log(data)
    if(data.success===true) {
      toast.success(data.message)
      
    }
    else{
      toast.error(data.message)
    }
    setPost((prevPost) => prevPost.filter((product) => product._id !== id));

  })

}
const handelUpdate=(data)=>{
  console.log(data)
  return(
    <div>abv</div>
  )
 }

  return (
    <>
      <div className="flex flex-col items-center py-4 gap-4">
        {post && post.length > 0 ? (
          <div className="w-3/4">
            <div className="grid grid-cols-6 gap-4 border-b-2 pb-2">
              <div className="font-bold">Image</div>
              <div className="font-bold">Name</div>
              <div className="font-bold">Description</div>
              <div className="font-bold">Created At</div>
              <div className="font-bold">delete</div>
              <div className="font-bold">update</div>

            </div>
            {post.map((products) => (
              <div key={products._id} className="grid grid-cols-6 gap-4 py-2 border-b">
                <div><img src={products.mainImage.url} className="w-12 h-12" alt="product" /></div>
                <p>{products.name}</p>
                <p>{products.description}</p>
                <p>{products.createdAt}</p>
                <div onClick={()=>handelDelete(products._id)}><MdDelete className="text-red-500" size={25}/></div>
                <div onClick={()=>handelUpdate(products)}> <MdEdit size={25}/></div>
              </div>
            ))}
          </div>
        ) : <div> no product</div>}
      </div>
    </>
  );
}

export default AdminProduct;
