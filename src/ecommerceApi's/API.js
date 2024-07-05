
import axios from "axios";
import { Await } from "react-router-dom";

const UseEcommerceApi=()=>{

// fectch all product 
    const  FetchAllProduct=async()=>{
try {
      
    const response= await axios.get("/v1/ecommerce/products?page=1&limit=10",
        {
            headers:{
                'accept': 'application/json',
            }
        }
    )
    return await response.data


} catch (error) {
    if (error.response) {
        return error.response.data;
      }
   return(error.message)
}



    }

    
    
        // add product to cart
            const  AddCart=async(id)=>{
                try {
                      
                    const response= await axios.post(`/v1/ecommerce/cart/item/${id}`,
                        {
                            headers:{
                                'accept': 'application/json',
                            }
                        }
                    )
                    return await response.data
                
                
                } catch (error) {
                    if (error.response) {
                        return error.response.data;
                      }
                   return(error.message)
                }
            }

            // fetch product by id
                const FetchProductById=async(id)=>{

                    try {
      
                        const response= await axios.get(`/v1/ecommerce/products/${id}`,
                            {
                                headers:{
                                    'accept': 'application/json',
                                }
                            }
                        )
                        return await response.data
                    
                    
                    } catch (error) {
                        if (error.response) {
                            return error.response.data;
                          }
                       return(error.message)
                    }



                }
// get cart
                    const  Cart=async()=>{
                        try {
                              
                            const response= await axios.get(`/v1/ecommerce/cart/`,
                                {
                                    headers:{
                                        'accept': 'application/json',
                                    }
                                }
                            )
                            return await response.data
                        
                        
                        } catch (error) {
                            if (error.response) {
                                return error.response.data;
                              }
                           return(error.message)
                        }
                        
                        
                        
         }
          
     // remove cart     
         const  removeCart=async(id)=>{
            try {
                  
                const response= await axios.delete(`/v1/ecommerce/cart/item/${id}`,
                    {
                        headers:{
                            'accept': 'application/json',
                        }
                    }
                )
                return await response.data
            
            
            } catch (error) {
                if (error.response) {
                    return error.response.data;
                  }
               return(error.message)
            }
            
            
            
}
// create product 
const createProduct= async(data)=>{

try { 
    
    
    const response= await axios.post("/v1/ecommerce/products/",data,{
             headers:{
                'accept': 'application/json',
                'Content-Type': 'multipart/form-data',
        }
    }
    

    )
    return await response.data
} catch (error) {
    if (error.response) {
        return error.response.data;
      }
   return(error.message)
}

}
// deleteproduct 
const deleteProduct= async(id)=>{

    try { 
        
        
        const response= await axios.delete(`/v1/ecommerce/products/${id}`,{
                 headers:{
                    'accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
            }
        }
        
    
        )
        return await response.data
    } catch (error) {
        if (error.response) {
            return error.response.data;
          }
       return(error.message)
    }
    
    }
    // update product 
    const updateProduct= async(data)=>{

        try { 
            
            
            const response= await axios.patch(`/v1/ecommerce/products/${data.id}`,data,{
                     headers:{
                        'accept': 'application/json',
                        'Content-Type': 'multipart/form-data',
                }
            }
            
        
            )
            return await response.data
        } catch (error) {
            if (error.response) {
                return error.response.data;
              }
           return(error.message)
        }
        
        }
        // getCategory
        const getCategory= async()=>{

            try { 
                
                
                const response= await axios.get(`/v1/ecommerce/categories`,{
                         headers:{
                            'accept': 'application/json',
                            'Content-Type': 'multipart/form-data',
                    }
                }
                
            
                )
                return await response.data
            } catch (error) {
                if (error.response) {
                    return error.response.data;
                  }
               return(error.message)
            }
            
            }
  // create category           
            const createCategory= async(data)=>{

                try { 
                    console.log(data)
                    
                    const response= await axios.post(`/v1/ecommerce/categories`,data,{
                             headers:{
                                'accept': 'application/json',
                                'Content-Type': 'application/json' ,
                        }
                    }
                    
                
                    )
                    return await response.data
                } catch (error) {
                    if (error.response) {
                        return error.response.data;
                      }
                   return(error.message)
                }
                
                }
   // delete category              
                const deleteCategory= async(id)=>{

                    try { 
                        
                        
                        const response= await axios.delete(`/v1/ecommerce/categories/${id}`,{
                                 headers:{
                                    'accept': 'application/json',
                                    'Content-Type': 'application/json',
                            }
                        }
                        
                    
                        )
                        return await response.data
                    } catch (error) {
                        if (error.response) {
                            return error.response.data;
                          }
                       return(error.message)
                    }
                    
                    }
       // update category                  
                    const updateCategory= async(id)=>{

                        try { 
                            
                            
                            const response= await axios.delete(`/v1/ecommerce/categories/${id}`,{
                                     headers:{
                                        'accept': 'application/json',
                                        'Content-Type': 'application/json',
                                }
                            }
                            
                        
                            )
                            return await response.data
                        } catch (error) {
                            if (error.response) {
                                return error.response.data;
                              }
                           return(error.message)
                        }
                        
                        }
                            

 return {
    FetchAllProduct,
    FetchProductById,
    AddCart,
    Cart,
    createProduct,
    deleteProduct,
    updateProduct,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
    removeCart}

}
export default UseEcommerceApi