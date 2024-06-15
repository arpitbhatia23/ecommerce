import React from 'react'
import { logout as Authlogout} from '../../App/slice'
import useAuth from '../../Auth/auth'
import { useDispatch } from 'react-redux'
const Logout = () => {
    const {logout}=useAuth()
    const dispatch=useDispatch()
    const logouthandel=()=>{
        logout()
        .then((userData)=>{
          console.log(userData)
            dispatch(Authlogout())

        })

    }
  return (
    <div>
      <button onClick={logouthandel}>logout</button>
    </div>
  )
}

export default Logout
