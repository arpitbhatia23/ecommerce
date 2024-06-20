import React from 'react'
import { logout as Authlogout} from '../../App/slice'
import useAuth from '../../Auth/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { IoIosLogOut } from 'react-icons/io'
import Cookies from 'js-cookie'
import toast from 'react-hot-toast/headless'
const Logout = (className="") => {
  const navigate=useNavigate()
    const {logout}=useAuth()
    const dispatch=useDispatch()
    const logouthandel=()=>{
        logout()
        .then((userData)=>{
          console.log(userData)
          if(userData.success===true){
           
            dispatch(Authlogout())
            navigate("/signin")

          }
         
           

        })

    }
  return (
    <div>
      <div  className={`${className} flex`} onClick={logouthandel}><IoIosLogOut size={25}/> logout</div>
    </div>
  )
}

export default Logout
