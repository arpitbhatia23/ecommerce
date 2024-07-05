import React from 'react';
import { Link } from 'react-router-dom';

const Productcard = ({
  subimages,
  category,
  name,
  mainImage,
description,
  _id,
  price,
  ...props
}) => {
 console.log(props)
  
  return (
    
      <Link to={`/product/${_id}`}>
        <div className="  mx-auto  max-w-lg flex items-center flex-col  bg-gray-100 rounded-xl ">
          <div className=" w-5/6  py-2 flex justify-center items-center mb-4">
            <img src={mainImage.url}  alt={name} className="rounded-xl h-[250px] w-4/6 " />
          </div>

          <h2 className="text-md  font-bold">{name} </h2>
          <h2 className="text-sm  py-2">price : {price}/rs</h2>

        </div>
      </Link>
 
  );
};

export default Productcard;
