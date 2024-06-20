import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from "./components/Home.jsx"
import Product from "./components/Product.jsx"
import Signin from './components/Signin.jsx'
import Singup from "./components/Singup.jsx"
import Order from "./components/Order.jsx"
import Admin from "./Admin/Admin.jsx"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Cart from './components/Cart.jsx'
import { Provider } from 'react-redux'
import store from './App/store.js'
import Authlayout from "./components/Authlayout.jsx"
import Profile from './components/Profile.jsx'
import Updateprofile from './components/Updateprofile.jsx'
const router=createBrowserRouter([
  {
    path:"/admin",
    element:(<Authlayout Authentication><Admin/></Authlayout>),
    children:[
      {
        path:"/admin/profile",
        element:(<Authlayout Authentication={true}><Profile/></Authlayout>)
      },
      {
        path:"/admin/updateAdminProfile",
        element:(<Authlayout Authentication ><Updateprofile/></Authlayout>)
      }
    ]

  }
  ,{
  path:"/",
  element:<App/>,
  children:[
    {path:"/",
      element:(<Authlayout Authentication><Home/></Authlayout>)
    },
    {
      path:"/product",
      element:(<Authlayout Authentication><Product/></Authlayout>)
    },
    {
      path:"/order",
      element:(<Authlayout Authentication><Order/></Authlayout>)
    },
    
    {
      path:"/signin",
      element:(<Authlayout Authentication={false}><Signin/></Authlayout>)

    },
    {
      path:"/signup",
      element:(<Authlayout Authentication={false}><Singup/></Authlayout>)
    },
    {
      path:"/cart",
      element:(<Authlayout Authentication><Cart/></Authlayout>)
    },
    {
      path:"/profile",
      element:(<Authlayout Authentication><Profile/></Authlayout>)
    },
    {
      path:"/updateProfile",
      element:(<Authlayout Authentication ><Updateprofile/></Authlayout>)
    }

  ] 
}])
    
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>

    </Provider>
  </React.StrictMode>,
)
