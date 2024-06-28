import React from 'react'
import { SiInstagram } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";


function Footer() {
  return (
    <div className='  w-full'>
      <div className="footer bottom-0 bg-gray-400 grid sm:grid-cols-3 gap-2 relative text-center grid-cols-1 ">
          
          <div className=' grid p-4'>
            <div className='flex text-center gap-2'><img src="" alt="logo" /> <span><h1>Company Name</h1></span></div>
          
          <div className='grid text-left '>
            <span>@copyright wali line Lorem ipsum dolor sit amet.</span>
            <span> or kuch likhna hoya ta </span>
          </div>
          <hr />
          <div className='flex text-center gap-2'>
            
            <a href=""><SiInstagram size={20}/>
            </a>
              <a href=""><BsTwitterX size={20}/></a>
              <a href=""><FaWhatsapp size={20}/></a>
            
          </div>
          </div>
         
         <div>
          <span><h1 className='font-bold text-lg'>Company</h1></span>
          <ul>
            <li><a href="">about us</a></li>
            <li><a href="">contact us</a></li>
            <li><a href="">help</a></li>
            <li><a href=""> feedback</a></li>
          </ul>
         </div>

         <div>
          <span><h1 className='font-bold text-lg'>Support</h1></span>
          <ul>
            <li><a href="">about us</a></li>
            <li><a href="">contact us</a></li>
            <li><a href="">help</a></li>
            <li><a href=""> feedback</a></li>
          </ul>
         </div>

         


      </div>
      <div className='bg-lime-400 w-full text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facilis cum totam, dolor repudiandae amet!</div>

    </div>
  )
}

export default Footer
