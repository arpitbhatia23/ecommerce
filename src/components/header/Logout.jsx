import React from 'react'
import { logout as Authlogout} from '../../App/slice'
import useAuth from '../../Auth/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { IoIosLogOut } from 'react-icons/io'
import Cookies from 'js-cookie'
const Logout = (className="") => {
  const navigate=useNavigate()
    const {logout}=useAuth()
    const dispatch=useDispatch()
    const logouthandel=()=>{
        logout()
        .then((userData)=>{
          console.log(userData==="success")
         
            dispatch(Authlogout())
          navigate("/signin")

        })

    }
  return (
    <div>
      <button  className={`${className} flex`} onClick={logouthandel}><IoIosLogOut size={25}/> logout</button>
    </div>
  )
}

export default Logout
