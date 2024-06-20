import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
 const useProfile=()=>{

    const profile=async()=>{
        try { 
            const response= await axios.get("http://localhost:8080/api/v1/ecommerce/profile",{
                headers:{
                'accept': 'application/json',

            },
                withCredentials:true
            })
            return response.data
            
        } catch (error) {
            if (error.response) {
                return error.response.data;
              }
           return(error.message)
        }
    }
    const updateProfile=async(user)=>{
        try { 
            const response= await axios.patch("http://localhost:8080/api/v1/ecommerce/profile",user,{
                headers:{
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
                withCredentials:true
            })
            return response.data
            
        } catch (error) {
            if (error.response) {
                return error.response.data;
              }
           return(error.message)
        }
    }
    const updateAvatar=async(avatar)=>{
        try { 
            const formData = new FormData();
            formData.append('avatar', avatar);

            
            
            const response= await axios.patch("http://localhost:8080/api/v1/users/avatar",formData,{
                headers:{
                'accept': 'application/json',
                'Content-Type': 'multipart/form-data'      
                  },
                withCredentials:true
            })
            return response.data
            
        } catch (error) {
            throw error
        }
    }
    return{profile,updateProfile,updateAvatar}
 }
 export default useProfile