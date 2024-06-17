import React, { forwardRef, useId } from 'react'
import { Field,ErrorMessage } from 'formik'
const Fields = ({label,
    type="text",
    className="",
    name,
    placeholder="",
    error,
    ...props
} ,ref) => {
    const id =useId()
  return (
    <div>
        {label&&<label className={`${className} px-4 py-2 text-black `} htmlFor={id}>
         {label}
            </label>}
            <Field type={type}
            placeholder={placeholder}
             className={`${className} px-4 py-4 rounded-lg w-full`} 
             ref={ref}
             htmlFor={id}
             {...props}
             name={name}
            />

<ErrorMessage component="div" name={name} className="text-red-500 mt-1 text-sm" />      
    </div>
  )
}

export default forwardRef(Fields) 
