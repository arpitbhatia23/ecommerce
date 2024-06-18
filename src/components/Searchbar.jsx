import React from 'react'
import Input from './Input'
import { AiOutlineFileSearch, AiOutlineSearch } from 'react-icons/ai'

const Searchbar = () => {
  return (
    <div className='flex items-center '>
      <Input className='h-2  ml-8  text-black w-full ' placeholder="search product here"  />
     <span className="ml-14"><AiOutlineSearch size={27}/></span>  
    </div>
  )
}

export default Searchbar
