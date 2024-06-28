import React from 'react'
import { ToastBar } from 'react-hot-toast'
import TotalSale from './TotalSale'
import Totalincome from './Totalincome'
import AdminProduct from '../AdminProduct'

const Dashboard = () => {
  return (
    <div className='flex  flex-col justify-center'>
     <div className=' flex'><TotalSale/>
      <Totalincome/></div> 
      <AdminProduct/>
    </div>
  )
}

export default Dashboard
