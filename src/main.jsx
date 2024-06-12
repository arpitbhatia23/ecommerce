import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from "./components/Home.jsx"
import Product from "./components/Product.jsx"
import Signin from './components/Signin.jsx'
import Singup from "./components/Singup.jsx"
import Order from "./components/Order.jsx"
import Admin from "./components/Admin.jsx"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const router=createBrowserRouter({
  path:"/",
  element:<App/>,
  children:[
    {path:"/home",
      element:<Home/>
    },
    {
      path:"/product",
      element:<Product/>
    },
    {
      path:"/order",
      element:<Order/>
    },
    {path:"/admin",
      element:<Admin/>
    

    },
    {
      path:"/signin",
      element:<Signin/>

    },
    {
      path:"/signup",
      element:<Singup/>
    }

  ]
})
    
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
