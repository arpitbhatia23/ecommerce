import { useEffect,} from 'react'
import './App.css'
import Signin from './components/Signin'
import toast, { Toaster } from 'react-hot-toast'
import useAuth from './Auth/auth'
import Header from './components/header/Header'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {login} from "./App/slice"
function App() {
  const{currentuser,refreshtoken}=useAuth()
  const navigate=useNavigate()
  const dispatch=useDispatch()
  useEffect(()=>{
    const refresh_token= refreshtoken()
    console.log(refresh_token)
     currentuser()
    .then((userData) => {
     
      console.log(userData)
      if (userData?.statusCode=="200") {
        dispatch(login(userData.data))
        navigate('/')
        toast.success('wellcome to ecommerce');
      }
      else{
        navigate("/signin")
      }
    })},[dispatch])
  return (
    <>
    <Toaster/>
    <Header/>
      <Outlet/>

    </>
  )
}

export default App
