import axios from "axios";
import { useState } from "react";
 

const useAuth=()=>{
// login user
 const login =async(user)=>{
    try{
        
    const response= await axios.post('/v1/users/login' , user,{
        headers:{
            'accept': 'application/json',
            'Content-Type': 'application/json'
        }

    })
    return (response.data)
   
}
 catch(error){
    if (error.response) {
        return error.response.data;
      }
   return(error.message)

 }

}

// register user 
const signup =async(user)=>{
    try{
       
    const response= await axios.post('/v1/users/register' , user,{
        
        headers:{
            'accept': 'application/json',
            'Content-Type': 'application/json'
        }

    })
   return(response.data)

}
 catch(error){
    if (error.response) {
        return error.response.data;
      }
   return(error.message)

 }
}
//get current user 
const currentuser =async()=>{
    try{
        
    const response= await axios.post('http://localhost:8080/api/v1/users/current-user' ,{
        headers:{
            'accept': 'application/json',
            'Content-Type': 'application/json'
        }

    })
   

 return response.data
}
 catch(error){
    if (error.response) {
        return error.response.data;
      }
   return(error.message)

 }
}
return {login,signup,currentuser}

}
export default useAuth