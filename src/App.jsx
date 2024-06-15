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
  const{currentuser}=useAuth()
  const navigate=useNavigate()
  const dispatch=useDispatch()
  useEffect(()=>{
    currentuser()
    .then((userData) => {
<<<<<<< HEAD
      if (userData) {
        dispatch(login(userData))
        // navigate('/')
=======
      console.log(userData)
      if (userData?.status=="200") {
        dispatch(login(userData.data))
        navigate('/')
>>>>>>> 39d3d96389a608046a2c92c638854c0d9606019e
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
