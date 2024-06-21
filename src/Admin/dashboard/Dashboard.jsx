import React from 'react'
import { ToastBar } from 'react-hot-toast'
import TotalSale from './TotalSale'
import Totalincome from './Totalincome'

const Dashboard = () => {
  return (
    <div className='flex'>
      <TotalSale/>
      <Totalincome/>
    </div>
  )
}

export default Dashboard
