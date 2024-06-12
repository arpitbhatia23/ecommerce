import { useEffect,} from 'react'
import './App.css'
import Signin from './components/Signin'
import toast, { Toaster } from 'react-hot-toast'
import useAuth from './Auth/auth'
import Header from './components/header/Header'
function App() {
  const{currentuser}=useAuth()
  useEffect(()=>{
    currentuser()
    .then((userData) => {
      if (userData) {

        toast.success('wellcome to ecommerce');
      }
    })},[])
  return (
    <>
    <Toaster/>
    <Signin/>


      <h1>hello</h1>

    </>
  )
}

export default App
