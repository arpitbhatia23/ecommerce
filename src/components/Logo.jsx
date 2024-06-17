import React from 'react'
import { AiOutlineAmazon, AiOutlineShoppingCart } from 'react-icons/ai'
import { GiShoppingCart } from 'react-icons/gi'

const Logo = (className="") => {
  return (
    <div className={`${className}text-4xl flex`}>
    
      <GiShoppingCart size={40} />
    </div>
  )
}

export default Logo