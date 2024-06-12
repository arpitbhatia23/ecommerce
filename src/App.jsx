import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signin from './components/Signin'
import { Toaster } from 'react-hot-toast'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Toaster/>
    <Signin/>
    <br /><hr />
      <h1>hello</h1>
    </>
  )
}

export default App
