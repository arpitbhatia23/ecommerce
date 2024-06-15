import React from 'react'
import { AiOutlineAmazon, AiOutlineShoppingCart } from 'react-icons/ai'

const Logo = (className="") => {
  return (
    <div className={`${className}text-4xl flex`}>
    
      <AiOutlineShoppingCart size={40}/>
    </div>
  )
}

export default Logo
