import React from 'react'
import Nav from './Nav'
import Sidenav from './Sidenav'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function Admin() {
 
  return(
    <>
    <Toaster/>
    <Nav/>
    <Outlet/>
    </>
  )
}

export default Admin
