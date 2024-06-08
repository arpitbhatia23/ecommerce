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
<<<<<<< HEAD
=======
      <h1>hello</h1>
>>>>>>> fe1ea9c2ed013f229f1c2576f1e847e1cc977282
    </>
  )
}

export default App
