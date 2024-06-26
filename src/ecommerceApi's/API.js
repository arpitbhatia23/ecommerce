
import axios from "axios";
import { Await } from "react-router-dom";

const UseEcommerceApi=()=>{


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
                            

 return {FetchAllProduct,FetchProductById,AddCart,Cart,createProduct,deleteProduct,updateProduct,getCategory,createCategory,updateCategory,deleteCategory}

}
export default UseEcommerceApi