import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
 const useProfile=()=>{

    const profile=async()=>{
        try { 
            const response= await axios.get("/v1/ecommerce/profile",{
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
            const response= await axios.patch("/v1/ecommerce/profile",user,{
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
            if (!avatar || avatar.length === 0) {
                throw new Error("Avatar file is required.");
            }

            // Extract the file from the FileList
            const avatarFile = avatar.avatar[0];
            const formData = new FormData();
            formData.set('avatar', avatarFile);

            const response= await axios.patch("/v1/users/avatar",formData,{
                headers:{
                'accept': 'application/json',
                'Content-Type': 'multipart/form-data'      
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
    return{profile,updateProfile,updateAvatar}
 }
 export default useProfile