import React, { forwardRef, useEffect, useState, useId } from 'react';
import UseEcommerceApi from '../ecommerceApi\'s/API';

const Select = forwardRef(({ label, className, ...props }, ref) => {
  const { getCategory } = UseEcommerceApi();
  const [category, setCategory] = useState([]);
  const id = useId(); // Call useId as a function

  useEffect(() => {
    getCategory()
      .then((data) => {
        console.log(data);
        setCategory(data?.data?.categories); // Assuming the data structure
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <div>
      {label && (
        <label htmlFor={id}>
          {label}
        </label>
      )}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        <option value="">--Select a category--</option>
        {category?.map((cat) => (
          <option key={cat._id} value={cat._id}>
            {cat.name}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;
