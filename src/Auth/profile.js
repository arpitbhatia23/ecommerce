import axios from "axios";
 const useProfile=()=>{

    const profile=async()=>{
        try {
            const response=await axios.get("v1/ecommerce/profile",{
                headers:{
                'accept': 'application/json'},
                withCredentials:true
            })
            return response
            
        } catch (error) {
            
        }
    }
    return{profile}
 }
 export default useProfile