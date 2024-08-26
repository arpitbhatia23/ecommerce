import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UseEcommerceApi from '../ecommerceApi\'s/API'
import { MdShoppingCart } from 'react-icons/md'
import { RiFlashlightLine } from 'react-icons/ri'
import toast from 'react-hot-toast'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Products = () => {
    const {slug}=useParams()
    const [post,setpost]=useState([])
    const {FetchProductById,AddCart}=UseEcommerceApi()

    console.log(slug)
    useEffect(()=>{
      FetchProductById(slug)
      .then((userdata)=>{
        console.log(userdata)
        setpost(userdata)
      })
    },[slug])
 
    const addCart=()=>{
      AddCart(slug)
      .then((userdata)=>{
       console.log(userdata)
        if (userdata?.success===true) {
          toast.success(userdata.message)
          
        }

      })

    }


  return (
    <div className='flex justify-center py-12  gap-2 '>
       <div className='max-w-md   p-6 flex  flex-col items-center '>
        <div className='flex shadow-md shadow-black py-12 px-16'>
        <Carousel showThumbs={false} thumbWidth={'400px'} showIndicators={true} showStatus={false}  >
         <img src={post?.data?.mainImage.url} alt="" className="rounded-sm shadow-md h-[400px] shadow-black"/>
            {
          post?.data?.subImages?.map((items)=>(

            <div  key={items._id} >
            <img  className="rounded-sm shadow-md h-[400px] shadow-black"src={items.url} alt="image" />
            </div>

          ))

        }
                    </Carousel>

        </div>
        <div className=' flex gap-x-12 py-4'>
       <div className='flex shadow-md items-center shadow-black bg-red-500 px-6 py-2 rounded-lg  text-black text-xl font-bold' onClick={()=>addCart()}>
        <MdShoppingCart size={20}/> add to cart  </div> 
        <div className='flex shadow-md items-center shadow-black bg-yellow-500 px-6 py-2 rounded-lg text-black text-xl font-bold'>
        buy now <RiFlashlightLine size={20}/> </div>

       </div>
      </div>
    <div className='flex flex-col items-center rounded-lg shadow-md shadow-black w-3/6 scroll-smooth'>
     
      <div className='flex justify-center  p-2 font-extrabold w-full'> <h1>{post?.data?.name}</h1></div>
      <div className='flex gap-x-4 py-4'> 
        <p className='shadow-md shadow-black rounded-lg p-4'>stocks:{post?.data?.stock} </p>
        <p className='shadow-md shadow-black rounded-lg p-4'>price:{post?.data?.price}</p> 
        </div>
        
       <div>
       
       
       </div>

        <div className='py-4'>
        {post?.data?.description}
        </div>

    </div>
       
    </div>
  )
}

export default Products
