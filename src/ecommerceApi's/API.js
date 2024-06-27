import axios from "axios";

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
      
                        const response= await axios.get(`/v1/ecommerce/products${id}`,
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
                        

 return {FetchAllProduct,FetchProductById,AddCart,Cart,createProduct}

}
export default UseEcommerceApi