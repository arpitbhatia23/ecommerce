import { useEffect,} from 'react'
import './App.css'
import Signin from './components/Signin'
import toast, { Toaster } from 'react-hot-toast'
import useAuth from './Auth/auth'
import Header from './components/header/Header'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {login} from "./App/slice"
import Footer from './components/Footer/Footer'
function App() {
  const{currentuser}=useAuth()
  const navigate=useNavigate()
  const dispatch=useDispatch()
  
  useEffect(()=>{
    
     currentuser()
    .then((userData) => {    
      if (userData?.statusCode=="200") {
        dispatch(login(userData))
        if (userData.data.role==="USER") {
          navigate('/')

        }
        if (userData.data.role==="ADMIN") {
          navigate("/admin/dashboard")
        }
      }
      
    })},[])
  return (
    <>
    <Toaster/>
    <Header/>
      <Outlet/>

      <Footer/>

    </>
  )
}

export default App
