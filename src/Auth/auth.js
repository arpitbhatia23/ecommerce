import axios from "axios";
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
       
    const response= await axios.post('/v1/users/register' ,user,{
        
        headers:{
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        withCredentials:true

    })
    console.log(user)
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
        
    const response= await axios.get('v1/users/current-user' ,{
        headers:{
            'accept': 'application/json' ,
            'Content-Type': 'application/json',
            
            
        },
        withCredentials:true
        

    })

 return response.data
}
 catch(error){
    if (error.response) {
        return error.response;
      }
   return(error.message)

 }
}


const logout =async()=>{
    try{
        
    const response= await axios.post('/v1/users/logout',{
        headers:{
            'accept': 'application/json',
            'Content-Type': 'application/json',
    },
    withCredentials:true

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
const refreshtoken=async()=>{
    try {
        const response=axios.post("/v1/refresh-token",{},{
            headers:{
                'accept': 'application/json',
        },
        withCredentials:true
        
    }
)
return response
    } catch (error) {
        if (error.response) {
            return error.response.data;
          }
       return(error.message)
    
    }
}
return {login,signup,currentuser,logout,refreshtoken}

}


export default useAuth