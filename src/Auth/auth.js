import axios from "axios";
import { useState } from "react";
 

 export const uselogin=()=>{
const [data,setdata]=useState()
const [loading,setloading]=useState(true)
const [error,seterror]=useState(false)

 const login =async(user)=>{
    try{
        setloading(true)
        seterror(false)
    const response= await axios.post('/v1/users/login' , user,{
        headers:{
            'accept': 'application/json',
            'Content-Type': 'application/json'
        }

    })
   setdata(response.data)
setloading(false)

}
 catch(error){
   seterror(error.message)

 }

}
const signup =async(user)=>{
    try{
        setloading(true)
        seterror(false)
    const response= await axios.post('/v1/users/register' , user,{
        headers:{
            'accept': 'application/json',
            'Content-Type': 'application/json'
        }

    })
   setdata(response.data)
setloading(false)

}
 catch(error){
  
   seterror(error.message)

 }
}
const currentuser =async(user)=>{
    try{
        setloading(true)
        seterror(false)
    const response= await axios.post('/v1/users/register' , user,{
        headers:{
            'accept': 'application/json',
            'Content-Type': 'application/json'
        }

    })
   setdata(response.data)
setloading(false)

}
 catch(error){
  
   seterror(error.message)

 }
}
return {data,loading,error,login,signup}

}
export default uselogin