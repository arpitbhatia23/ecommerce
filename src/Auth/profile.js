import axios from "axios";
import Cookies from "js-cookie";
 const useProfile=()=>{

    const profile=async()=>{
        try { const token=Cookies.get("authtoken")
            const response= await axios.get("v1/ecommerce/profile",{
                headers:{
                'accept': 'application/json',

            },
                withCredentials:true
            })
            return response.data
            
        } catch (error) {
            console.log(error)
        }
    }
    return{profile}
 }
 export default useProfile