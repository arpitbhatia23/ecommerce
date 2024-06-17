import React from 'react'
import { logout as Authlogout} from '../../App/slice'
import useAuth from '../../Auth/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
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
      <button  className={`${className}`} onClick={logouthandel}>logout</button>
    </div>
  )
}

export default Logout
