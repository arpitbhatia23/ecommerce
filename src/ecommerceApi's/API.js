import axios from "axios";

const UseEcommerceApi=()=>{


    const  FetchAllProduct=async()=>{
try {
      
    const response=axios.get("/v1/ecommerce/products?page=1&limit=10",
        {
            headers:{
                'accept': 'application/json',
            }
        }
    )
    return (await response).data


} catch (error) {
    if (error.response) {
        return error.response.data;
      }
   return(error.message)
}



    }


 return {FetchAllProduct}

}
export default UseEcommerceApi