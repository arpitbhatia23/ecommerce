import { useEffect,} from 'react'
import './App.css'
import Signin from './components/Signin'
import toast, { Toaster } from 'react-hot-toast'
import useAuth from './Auth/auth'
import Header from './components/header/Header'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {login} from "./App/slice"
import useProfile from './Auth/profile'
function App() {
  const{currentuser}=useAuth()
 const {profile}=useProfile()
  const navigate=useNavigate()
  const dispatch=useDispatch()
  useEffect(()=>{
    const p=profile()
  console.log(p)
     currentuser()
    .then((userData) => {
     console.log(userData)
    
      if (userData?.statusCode=="200") {
        dispatch(login(userData))
        if (userData.data.role==="USER") {
          navigate('/')

        }
        if (userData.data.role==="ADMIN") {
          navigate("/admin")
        }
        toast.success('wellcome to ecommerce');
      }
      
    })},[])
  return (
    <>
    <Toaster/>
    <Header/>
      <Outlet/>

    </>
  )
}

export default App
