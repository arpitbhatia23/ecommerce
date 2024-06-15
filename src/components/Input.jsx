import React, { forwardRef, useId } from 'react'

const Input = ({label,
    type="text",
    className="",
    ...props
} ,ref) => {
    const id =useId()
  return (
    <div>
        {label&&<label className={`${className} px-4 py-2 text-black `} htmlFor={id}>
         {label}
            </label>}
            <input type={type}
             className={`${className} px-4 py-4 rounded-lg w-full`} 
             ref={ref}
             htmlFor={id}
             {...props}
            />
      
    </div>
  )
}

export default forwardRef(Input) 
